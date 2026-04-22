// 6 kyu Reverse Vowels In A String
// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// Good luck!

function reverseVowels(str) {
  const regex = /[aeiou]/gi;
  const vowelsArr = str.match(regex);
  if (!vowelsArr) return str;
  vowelsArr.reverse();

  let i = 0;
  return str.replace(regex, () => vowelsArr[i++]);
}
