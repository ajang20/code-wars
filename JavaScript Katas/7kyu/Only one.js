// 7 kyu Only one
// Task: Write function only_one which return True if ONLY ONE of the boolean flag is True, otherwise return False. If there are no boolean flag, return False

//   onlyOne() --> false
//   onlyOne(true, false, false) --> true
//   onlyOne(true, false, false, true) --> false
//   onlyOne(false, false, false, false) --> false
function onlyOne(...arg) {
  let bool = arg.filter((ele) => ele === true);
  return bool.length === 1 ? true : false;
}
