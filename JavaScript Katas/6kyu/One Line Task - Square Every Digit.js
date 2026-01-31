// 6 kyu One line task: Square Every Digit
// Inspired by Square Every Digit and by the inimitable myjinxin2015's many clever one-line katas

// Your goal here is precisely the same: square every digit of the given integer, in as few characters as possible.

// Your return value should be in integer format. Your input will always be a valid, non-negative integer, may be > 231

// Code size limit: 36 characters or less

// Examples
// 0     -->  0
// 64    -->  3616
// 1111  -->  1111
// 2222  -->  4444
// 3333  -->  9999
// 3212  -->  9414
// 1234  -->  14916
// 77455754  -->  4949162525492516
// 99999999  -->  8181818181818181
// P.S., if you can get the sample tests to pass while under the character limit, the full tests should pass without a hitch!

// Have fun, and please upvote if you enjoyed it :)

// Found this one too easy? This one's a bit more difficult!

// Too hard? This one's a bit easier :)
sd = (x) => [...(x + "")].map((d) => d * d).join`` * 1;
