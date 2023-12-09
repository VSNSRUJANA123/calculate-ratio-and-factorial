const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");
const ratioAndFact = (a1, a2, a3) => {
  let ratio = ratioOfTwoNumbers(a1, a2);
  let factorial = factorialOfNumber(a3);
  return { ratio, factorial };
};
module.exports = ratioAndFact(4, 2, 1);
