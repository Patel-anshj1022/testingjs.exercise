
const addChar= require('../src/chars'); 

test("it concatenates Ansh and Patel to get Ansh Patel", () => {
  expect(addChar("Ansh", "Patel")).toBe("Ansh Patel");
});