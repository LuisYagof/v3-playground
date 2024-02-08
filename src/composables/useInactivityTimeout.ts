export default function useInactivityTimeout() {
  // DATA
  let inactivityTimeout: ReturnType<typeof setTimeout> | undefined = undefined

  // METHODS
  function beginListeningToScreenEvents() {
    document.addEventListener('mousemove', resetInactivityTimeout)
    document.addEventListener('click', resetInactivityTimeout)
    resetInactivityTimeout()
  }

  function resetInactivityTimeout() {
    const oneMinInMs = 1 * 60 * 1000
    clearTimeout(inactivityTimeout)
    inactivityTimeout = setTimeout(() => {
      window.alert('TIMEOUT')
    }, oneMinInMs)
  }

  return { beginListeningToScreenEvents }
}
