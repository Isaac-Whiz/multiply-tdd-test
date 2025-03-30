import { assert } from "chai";
import { multiply } from "../multiply.js";

describe("Testing multiplication on the first cycle", () => {
  it("Should multiply two values", () => {
    assert.equal(multiply(2, 1), 2);
  });
});

describe("Testing multiplication on a second cycle", () => {
  it("Should multiply two values", () => {
    assert.equal(multiply(2, 2), 4);
  });
});

describe("Testing multiplication on a third cycle", () => {
  it("Should multiply two values", () => {
    assert.equal(multiply(3, 3), 9);
  });
});

describe("Testing multiplication on a fourth cycle", () => {
  it("Should multiply two values", () => {
    assert.equal(multiply(4, 4), 16);
  });
});

describe("Testing multiplication on a fifth cycle", () => {
  it("Should multiply two values", () => {
    assert.equal(multiply(23, 45), 23 * 45);
  });
});

describe("Testing multiplication differently ", () => {
  it("Should multiply two values without the asterisk", () => {
    assert.equal(multiplyDifferently(2, 2), 4);
  });
});
