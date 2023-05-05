

//create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.
//If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
//At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

const discount = .25;
const coupon = 10;


const customer = [timmy, sarah, rocky]

const total = price => {
  const discount = .25
  return price * (1 - discount)
}

const gTotal = price => {
  const coupon = 10
  return price - coupon
}

const getTotal = customer => {
  const hasSubscription = customer.sub
  const hasCoupon = customer.coup
  let total = customer.pricePerRefill * customer.refills
  if (hasSubscription) total = total(dtotal)
  if (hasCoupon) total = gTotal(ctotal)
  console.log(`Your grand total is ${total}`)
  return total
}

// The loop below call getTotal for each customer in the customers array
for (let customer of customer) {
  getTotal(customer)
}

