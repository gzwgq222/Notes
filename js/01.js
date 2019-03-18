const deepCopy = (obj) => {
  let copy = Array.isArray(obj) ? [] : {}
  for (let i in obj) {
    if (typeof obj[i] === 'object') {
      copy[i] = obj[i] === null ? null : deepCopy[obj[i]]
    } else {
      copy[i] = obj[i]
    }
  }
}