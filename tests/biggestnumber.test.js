
const biggestNUmber = require('../src/biggestnumber')


test("it returns the largest number in the array" , () => {
    expect(biggestNUmber([5, 20, 8, 15])).toBe(20);
})