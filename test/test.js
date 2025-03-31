import { assert } from "chai";
import { multiply, multiplyDifferently } from "../multiply.js";
import { describe, it } from "mocha";

describe("Testing multiplication", () => {
  it("Should multiply two values on fisrt cycle ", () => {
    assert.equal(multiply(2, 1), 2);
  });

  it("Should multiply two on second cycle returning 4", () => {
    assert.equal(multiply(2, 2), 4);
  });

  it("Should multiply two values on third cycle returning 9", () => {
    assert.equal(multiply(3, 3), 9);
  });

  it("Should multiply two values on fourth cycle returning 16", () => {
    assert.equal(multiply(4, 4), 16);
  });
});

describe("Testing multiplication differently ", () => {
  it("Should multiply two values without the asterisk on first cycle returning 4", () => {
    assert.equal(multiplyDifferently(2, 2), 4);
  });

  it("Should multiply two values without the asterisk on second cycle returning 9", () => {
    assert.equal(multiplyDifferently(3, 3), 9);
  });

  it("Should multiply two values without the asterisk on third cycle returning 16", () => {
    assert.equal(multiplyDifferently(4, 4), 16);
  });
});
