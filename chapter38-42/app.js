//1
// function pow(a,b){
//    alert(Math.pow(a,b))
// }
// pow(3,2)

//2
// function checkLeap(){
//     var year = document.getElementById("year")
//     if((year.value % 4 ===0) && (year.value % 100 != 0) || (year.value % 400 === 0)){
//         alert("year " + year.value + " is leap year")
//     }else{
//         alert("year " + year.value + " is not leap year")
//     }
// }

//3
// function calcualteArea(a,b,c){
//     var s = (a + b + c) / 2
//     var area = s * ((s - a) * (s - b) * (s - c))
//     alert(area)
// }
// calcualteArea(3,3,3)

//4
// function mainFunction(){
//     var marks1 =parseInt (document.getElementById("marks1").value)
//     var marks2 =parseInt(document.getElementById("marks2").value)
//     var marks3 =parseInt( document.getElementById("marks3").value)
//     var total =(marks1.value + marks2.value + marks3.value);
//     document.getElementById("demo").innerHTML=total;
// }

//4
// function aver(){
//     var sub1 = +prompt("enter marks of subject 1 to calcualte average marks")
//     var sub2 = +prompt("enter marks of subject 2 to calcualte average marks")
//     var sub3 = +prompt("enter marks of subject 3 to calcualte average marks")
//     var avg = (sub1 + sub2 + sub3) /3;
//     document.write("average marks " +avg)
// }
// aver()

// function percentage(){
//     var sub1 = +prompt("enter marks of subject 1 to calcualte average marks")
//     var sub2 = +prompt("enter marks of subject 2 to calcualte average marks")
//     var sub3 = +prompt("enter marks of subject 3 to calcualte average marks")
//     var obtained = sub1 + sub2 + sub3;
//     var total = 2000;
//     var percent = (obtained/total) *100;
//     document.write("<br>percentage: " +percent)
// }
// percentage()

// function mainFunction(){
//     var percent = percentage()
//     var average = aver()
//     document.write("percentage " +percent)
//     document.write("average marks " +avg)
// }

//5
// function IndexOf(array, search) {
//     for(var val in array){
//        if(array[val] === search){
//             return val;
//         }
//     }
//     return -1;
// }

// var characters = ['a', 'b', 'c','d','e','f'];
// console.log(IndexOf(characters, 'd'));
// console.log(IndexOf(characters, 'g'));

//6
// function removeVowels(){
// var str = "my name is umair asif";                      
//    str = str.replace( /[aeiou]/g, '' );      
//     document.write(str)
// }
// removeVowels()

//7
// function occurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var chars = str.toLowerCase().split("");
//     var count = 0;

//     for(var i = 0; i < chars.length - 1; i++) {

//       if(matchfound(chars[i]) && matchfound(chars[i+1])) {
//         count++
//       }
//     }
//     return count;
//   }
//   function matchfound(char) {
//   switch (char) {
//     case 'a':
//         return true;
//     case 'e':
//         return true;
//     case 'i':
//         return true;
//     case 'o':
//         return true;
//     case 'u':
//       return true;
//     default:
//       return false;
//   }
// }
// console.log(occurrences());

//8
// function convertToMeter(){
//     var km = document.getElementById("km");
//     var meter = km.value *1000;
//     document.write("<br>"+ km.value+"km = "+ meter +" meter");
// }


// function convertTofeet(){
//     var km = document.getElementById("feet");
//     var feet = km.value * 3281;
//     document.write("<br>"+ km.value+"km = "+ feet +" feet");
// }


// function convertToInches(){
//     var km = document.getElementById("inch");
//     var inches = km.value * 39370.078740157;
//     document.write( "<br>"+ km.value+"km = "+ inches +" inches");
// }


// function convertToCentimeters(){
//     var km = document.getElementById("cm");
//     var cm = km.value * 100000;
//     document.write( "<br>"+ km.value+"km = "+ cm +" inches");
// }


//9
// caloverTime()

// function caloverTime(){
//     var pay = +prompt("enter your salary");
//     var workTime = +prompt("enter your worktime")
//     if(workTime > 40){
//         for(var i = 41; i <=workTime; i++){
//             pay += 12
//         }
//         document.write("Salary after overtime: " + pay)
//     }else{
//         document.write("Normal salary: " +pay)
//     }
// }
// caloverTime()

//10

// function notes(){
//     var withdraw = +prompt("enter amount you want to withdraw")
//     var hundred = withdraw/100;
//     var fifty = ((withdraw % 100) / 50);
//     var ten = (((withdraw % 100) % 50) / 10);
//     alert("\nYou'll have "+Math.floor(hundred)+" hundred notes\n"+Math.floor(fifty)+" fifty notes\n"+Math.floor(ten)+" ten notes");
// }
// notes()

