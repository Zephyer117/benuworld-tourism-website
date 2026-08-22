import { subscribeLive } from "@/lib/live-bus";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const encoder = new TextEncoder();
  let unsubscribe: () => void = () => undefined;

  const stream = new ReadableStream({
    start(controller) {
      const send = (collection: string) => {
        try {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ collection })}\n\n`));
        } catch (error) {
          console.error('Error sending SSE message:', error);
        }
      };
      unsubscribe = subscribeLive(send);
      
      // Send initial connection message
      try {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ collection: "hello" })}\n\n`));
      } catch (error) {
        console.error('Error sending initial SSE message:', error);
      }
    },
    cancel() {
      try {
        unsubscribe();
      } catch (error) {
        console.error('Error unsubscribing from SSE:', error);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
      "X-Accel-Buffering": "no", // Disable nginx buffering
    },
  });
}
