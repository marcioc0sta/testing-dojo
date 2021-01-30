const marginCalc = (multiplier = 0) => {
  const def = 6
  if (!multiplier || isNaN(multiplier)) {
    return `${def}px`
  }

  const result = def * multiplier
  return `${result}px`
}

export default marginCalc
