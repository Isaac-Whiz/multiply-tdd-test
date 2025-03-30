const multiply = (a, b) => a * b;

const multiplyDifferently = (seed, multiplier) => {
  var result = 0;
  for (let i = 0; i < multiplier; i++) {
    result += seed;
  }
  return result;
};

export { multiply, multiplyDifferently };
