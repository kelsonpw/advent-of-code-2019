const fs = require("fs");

const inputs = fs
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split(",")
  .map(Number);

const optCalc = {
  [1]: (a, b) => a + b,
  [2]: (a, b) => a * b
};

function compute(nums, start = 0) {
  const section = nums.slice(start, start + 4);
  if (section[0] === 99) {
    return nums;
  }

  const clone = [...nums];
  clone[section[3]] = optCalc[section[0]](nums[section[1]], nums[section[2]]);
  return compute(clone, start + 4);
}

function calculateCompute(nums) {
  const clone = [...nums];
  clone[1] = 12;
  clone[2] = 2;
  return compute(clone);
}

function findAnswer(nums) {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      const clone = [...nums];
      clone[1] = i;
      clone[2] = j;
      const result = compute(clone)[0];
      if (result === 19690720) {
        return {
          noun: i,
          verb: j
        };
      }
    }
  }
  return {
    noun: 0,
    verb: 0
  };
}

const [result] = calculateCompute(inputs);
console.log("PART 1");
console.log({ result });

console.log("PART 2");
const { noun, verb } = findAnswer(inputs);
console.log({ noun, verb });
