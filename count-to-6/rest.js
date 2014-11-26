module.exports = (...numbers) => {
  var sum = numbers.reduce((sum, number) => sum + number, 0)
  return sum / numbers.length
}
