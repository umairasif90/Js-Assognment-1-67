//1
// function DateTime() {
//     var current = new Date();
//     document.writeln(current)
// }
// DateTime();

//2
// function Greeting(){
//     var fname = prompt("Enter your first name: ");
//     var lname = prompt("Enter your last name: ");
//     alert("Welcome! "+fname+" "+lname);
// }
// Greeting();

//3
// function add(num1,num2,result){
//     num1 = +prompt("Enter first number ");
//     num2 = +prompt("Enter second number ");
//     result = num1 + num2;
//     alert(result)
// }
// add();

//4
// function argument(num1, num2, result, op){
//     num1 = +prompt("Enter first operand: ")
//     num2 = +prompt("Enter second operand: ")
//     op = prompt("Enter operator: ")
//     if(op === "+"){
//         result = num1 + num2
//         alert(result)
//     }
//     else if(op === "-"){
//         result = num1 - num2
//         alert(result)
//     }
//     else if(op === "*"){
//         result = num1 * num2
//         alert(result)
//     }
//     else if(op === "/"){
//         result = num1 / num2
//         alert(result)
//     }
// }
// argument();

//5
// function square(input){
//     input= +prompt("Enter any number: ");
//     alert("Square of given number is: "+ input * input)
// }
// square();

//6
// function factorial(){
//     var input = +prompt("Enter the number: ");
//     var result = input;
// for(var i = 1 ;i < input; i++){
//   result = i * result;
// }
// alert("The factorial of given number is: "+ input +" is "+ result);
// }
// factorial();

//7
// function count(){
//     var startNumber = +prompt("Enter starting number: ")
//     var endNumber = +prompt("Enter ending number: ")
//     for(var i = startNumber; i <= endNumber; i++){
//         document.writeln(i + "<br>")
//     }
// }
// count();

//8
// function hypotenuse(base, perpendicular)
//     { 
//         base = +prompt("Enter value for base: ");
//         perpendicular = +prompt("Enter value for perpendicular: ");
//         var a = Math.sqrt((base * base) + (perpendicular * perpendicular)); 
//         alert("The value of hypotenuse is "+a) 
//     } 
// hypotenuse();

//9
// function calculateArea(height,width,area){
//     height = +prompt("Enter Height: ")
//     width = +prompt("Enter Width:")
//     area = height * width;
//     alert("Area of rectangle is " + area);
// }
// calculateArea();

//10
// function palindrome(str, str2) {
//     str = prompt("enter word");
//     str2 = str; 
// str =  str.split('').reverse().join('') 
// if (str2 === str){
//     alert("Palindrome")
// }
// else{
//     alert("Not palindrome")
// }
// } 
// palindrome()

//11
// function letterCap(cap)
// {
//  return cap.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// document.writeln(letterCap('the quick brown fox'));

//12
// function longestWord(str)
// {
//   var array = str.match(/\w[a-z]{0,}/gi);
//   var result = array[0];

//   for(var i = 1 ; i < array.length ; i++)
//   {
//     if(result.length < array[i].length)
//     {
//     result = array[i];
//     } 
//   }
//   return result;
// }
// document.writeln(longestWord('Web Development Tutorial'));

//13
// function occur(strr, letter) 
// {
//  var count = 0;
//  for (var i = 0; i < strr.length; i++) 
//  {
//     if (strr.charAt(i) == letter) 
//       {
//       count += 1;
//       }
//   }
//   return count;
// }
// alert(occur('JSResourceS.com', 'o'));

//14
// function calcCircumference(){
//     var radius = +prompt("Enter the radius to calculate the circumference: ")
//     var circum = (2 * 3.14 *radius);
//     alert("The circumference is: "+circum);
// }
// function calcArea(){
//     var rad = +prompt("Enter the radius to calculate area of circle: ")
//     var area = (3.14 * (rad * rad));
//     alert("The area is "+ area);
// }
// calcCircumference();
// calcArea();