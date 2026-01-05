//8 kyu simple calculator
function calculator(a, b, sign) {
  // Check if a and b are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'unknown value';
  }
  
  // Perform the operation based on the sign
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '%':
      return a % b;
    default:
      return 'unknown value';
  }
}