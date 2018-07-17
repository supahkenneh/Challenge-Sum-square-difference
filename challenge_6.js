/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers) {
  this.naturalNumbers = naturalNumbers;
  
  this.sumOfSquares = function() {
    let squaredThenSummed = 0;
    for (let i = 1; i <= naturalNumbers; i++) {
      squaredThenSummed += i * i;
    }
    return squaredThenSummed;
  }
  
  this.squareOfTheSums = function() {
    let summedThenSquared = 0;
    for (let i = 1; i <= naturalNumbers; i++) {
      summedThenSquared += i;
    }
    summedThenSquared *= summedThenSquared;
    return summedThenSquared;
  }
}

// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()
