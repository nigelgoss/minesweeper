function subtract(a, b) {
  return a - b;
}

it("subtracts 4 from 6 and returns 2", () => {
  expect(subtract(6, 4)).toBe(2);
});
