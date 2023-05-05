

//Write an algorithm that accepts an array of numbers
//and returns a new array of numbers with just the odd numbers.

const bunch = [2, 4, 6, 8, 11, 20, 15, 22]
const bunchA = []
const bunch2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const bunchB = []
const bunch3 = [70, 42, 55, 81, 21, 91, 34]
const bunchC = []
const bunch4 = [2, 4, 6, 8, 10, 11, 12]
const bunchD = []


for (let index = 0; index < bunch.length; index++) {
    if (bunch[index] % 2 !== 0) {
        bunchA.push(bunch[index])
    }}
console.log(bunchA);

for (let index = 0; index < bunch2.length; index++) {
    if (bunch2[index] % 2 !== 0) {
        bunchB.push(bunch2[index]) 
    }}
console.log(bunchB);

for (let index = 0; index < bunch3.length; index++) {
    if (bunch3[index] % 2 !== 0) {
        bunchC.push(bunch3[index]) 
    }}
console.log(bunchC);

//for (let index = 0; index < bunch4.length; index++) {
//    if (bunch4[index] === bunchD.push(bunch4[index])) }
//console.log(bunchD);