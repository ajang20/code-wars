// 6 kyu CamelCase Method
// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase = function (a) {
  return this.split(" ")
    .map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1))
    .join("");
};
