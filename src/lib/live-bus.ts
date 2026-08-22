type Listener = (collection: string) => void;

const g = globalThis as typeof globalThis & { __benuLive?: Set<Listener> };

function listeners() {
  if (!g.__benuLive) g.__benuLive = new Set();
  return g.__benuLive;
}

export function subscribeLive(fn: Listener) {
  listeners().add(fn);
  return () => listeners().delete(fn);
}

export function notifyLive(collection: string) {
  const currentListeners = listeners();
  // Clone the set to avoid issues if listeners modify during iteration
  const listenersArray = Array.from(currentListeners);
  for (const fn of listenersArray) {
    try {
      fn(collection);
    } catch (error) {
      console.error('Error notifying live listener:', error);
      // Remove failed listener
      currentListeners.delete(fn);
    }
  }
}
