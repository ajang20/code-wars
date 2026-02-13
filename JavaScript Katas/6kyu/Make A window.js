// 6 kyu Make A Window
// Make me a window. I'll give you a number (N). You return a window.

// Rules:

// The window will always be 2 x 2.

// The window needs to have N number of periods across and N number of periods vertically in each pane.

// Example:

// N = 3

// ---------
// |...|...|
// |...|...|
// |...|...|
// |---+---|
// |...|...|
// |...|...|
// |...|...|
// ---------
// Note: there should be no trailing new line characters at the end.

function makeAWindow(num) {
  let result = "";

  let vertical = "|" + ".".repeat(num) + "|" + ".".repeat(num) + "|";
  let middle = "|" + "-".repeat(num) + "+" + "-".repeat(num) + "|";
  let ends = "-".repeat(num * 2 + 3);

  result += ends + "\n";

  for (let i = 0; i < num; i++) {
    result += vertical + "\n";
  }

  result += middle + "\n";

  for (let i = 0; i < num; i++) {
    result += vertical + "\n";
  }

  result += ends;
  return result;
}
