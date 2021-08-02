function reverse(bool) {
  if (typeof bool !== 'boolean') {
    throw new Error("boolean expected")
  }
  return !bool
}
