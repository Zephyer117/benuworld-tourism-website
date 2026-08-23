export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('adminAuthenticated') === 'true'
}

export function logout(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem('adminAuthenticated')
  localStorage.removeItem('adminUsername')
}

export function getUsername(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('adminUsername')
}
