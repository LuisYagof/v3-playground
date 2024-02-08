function sleep(timeoutInMs: number) {
  return new Promise((resolve) => setTimeout(resolve, timeoutInMs))
}

export { sleep }
