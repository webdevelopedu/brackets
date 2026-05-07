module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = [];
  const bracketsMap = {};
  bracketsConfig.forEach(([open, close]) => {
    openBrackets.push(open);
    bracketsMap[close] = open;
  });
  for (let char of str) {
    const lastInStack = stack[stack.length - 1];
    if (bracketsMap[char] !== undefined) {
      if (char === bracketsMap[char]) {
        if (lastInStack === char) {
          stack.pop();
        } else {
          stack.push(char);
        }
      } else {
        if (stack.length === 0 || stack.pop() !== bracketsMap[char]) {
          return false;
        }
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};
