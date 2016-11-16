
// A palindromic number reads the same both ways. The largest palindrome
//made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const sortProd = (a,b) => {
  return b-a
}

const products = []
for (x=100; x<=999; x++) {
  for (y=100; y<=999; y++) {
    products.push(x*y)
  }
}

//Arity function transform with arity of 1
const reverse = (products) => {
  let arr = ('' + products).split('')
  return arr.reverse(products).join('')
}

//Predicate
const isPalindrome = (num) => {
  return (reverse(num) == num)
}

//Filter out the palindromes
let result = products.filter(isPalindrome)

//Return the highest number by sorting in descending order and getting first index
console.log(result.sort(sortProd)[0])

module.exports = {reverse, isPalindrome}
