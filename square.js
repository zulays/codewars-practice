//determine if a number is a square number
// In mathematics, a square number or perfect square is an integer that is the
// square of an integer; in other words, it is the product of some integer with itself.


let isSquare = function (n) {
  //check if number is positive && check if number is a square
return n > 0 && Math.sqrt(n) % 1 === 0



// if (n === -1){
//   return false;
// } else if (n === 0) {
// return true
// } else if (Math.sqrt(n) % 1 === 0) {
//   return true
// }

}

console.log(isSquare(4))
console.log(isSquare(3))
console.log(isSquare(25))
console.log(isSquare(0))
console.log(isSquare(-1))