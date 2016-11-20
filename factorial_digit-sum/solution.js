// n! means n × (n − 1) × ... × 3 × 2 × 1
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
// Find the sum of the digits in the number 100!


const BigNumber = require('bignumber.js')


const fact = (n) => {
  let num = new BigNumber(n)
  for(x=n-1; x>0; x--){
  num = num.times(x)
}
  return num.toFixed().split('')
}

const result = fact(100).reduce(function(a, b) {
  return a*1 + b*1
}, 0)

console.log(result)

module.exports = { fact }
