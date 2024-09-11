//const { expect } = require("chai");r//mport { Script } from "vm";
//if I have exporteed an element I can import it into the file  Ialso want to use it in.
import { test, expect } from "vitest";
// remeber to import parameters and the test from vitest
import { add, subtract } from "./script";
//destructuring  --> means importing one element from a whole file
// we write a test  for our add function in Script.js
test("add", function () {
  const result = add(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});
test("subtract", function () {
  const result = subtract(12, 6);
  const expected = 6;
  expect(result).toBe(expected);
});
