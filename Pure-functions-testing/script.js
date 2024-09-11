// if we write export before a variable prior to function or variable we can use either in another JS file

export function add(a, b) {
  return a + b;
}
add(3, 7);
export function subtract(a, b) {
  return a - b;
}
subtract(12, 6);
//export function isPalindrome(palindrome) {
//if palindrome(
//eturn a, b;
//}
//isPalindrome(a, b);
export function checkPalindrome(str) {
  return str == str.split("").reverse().join("");
}
checkPalindrome("racecar");
