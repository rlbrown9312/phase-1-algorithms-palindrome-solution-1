function isPalindrome(str) {
  const regex = /[\W_]/g;
  const smallStr = str.toLowerCase().replace(regex, "");
  const reversed = smallStr.split("").reverse().join("");
  return reversed === smallStr? true: false
 }
 
 const string = "abba___!!!"
 
 console.log(isPalindrome(string))















/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
