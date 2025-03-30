const multiply = (a, b) => a * b;

const multiplyDifferently = (seed, multiplier) => {
  let result = 0,
    i = 0;
  for (; i < multiplier; i++) {
    result += seed;
  }
  return result;
};

export { multiply, multiplyDifferently };
