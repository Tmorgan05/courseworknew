

//Given a budget and the prices of the two gifts, 
//write at least two functions that return a boolean if you are within or over budget.

//return true if within budget, else false


const budget = 50;
const price1 = 20;
const price2 = 25;

//Define a function that returns the sum of the two prices before tax

function sumOfGifts(gift1, gift2) {
    return gift1 + gift2;
 }
console.log(sumOfGifts(price1, price2))
const gTotal = sumOfGifts(price1, price2)
function addTax(giftTotal) {
    return giftTotal + (giftTotal * 0.08);
}
const giftsWithTax = addTax(giftTotal);
function holidayShopping(budget, giftsWithTax) {
    return budget >= giftsWithTax;
}
holidayShopping(budget, giftsWithTax);