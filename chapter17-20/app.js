//1
// var multiArray = [[],[]];

//2
// let multimatrix = [[0, 1, 2, 3],[ 1, 0, 1, 2],[ 2, 1, 0, 1]];
//   alert(multimatrix[0]+"\n"+multimatrix[1]+"\n"+multimatrix[2]);

//3
// for(var x =1 ; x <=10 ; x++){
//     document.writeln(x+"<br>");
// }

//4
// var a = +prompt("enter table number");
// var userTime = +prompt("Enter how many time you want to multiply");
// for(b = 1; b<=userTime; b++){
//     c=(a*b);
//     document.writeln(a+ " x " +b+ " = " +c +"<br>");
// }

//5
// var xyzArr = ["apple", "banana", "mango", "orange", "strawberry"];
// document.writeln("Elements of array are:".bold()+"<br>");
// for( var z = 0; z<xyzArr.length ; z++){
//     document.writeln(xyzArr[z]+"<br>");
// }
// for(var y = 0; y<xyzArr.length; y++){
//     document.writeln("<br>"+"Element at index "+y+" is "+xyzArr[y]+"<br>");
// }

//6
// var count = +prompt("Kahan tak counting chaheye?");
// document.writeln("Counting: ".bold()+"<br>");
// for(var c = 1; c<=count; c++){
//     document.writeln(c);
// }
// document.writeln("<br>"+"Reversed counting: ".bold()+"<br>");
// for(var r = count; r >0; r--){
//     document.writeln(r);
// }
// document.writeln("<br>"+"Even numbers: ".bold()+"<br>");
// for(var e = 0; e< c; e++){
//     if(e % 2 === 0){
//         document.writeln(" "+e+" ");
//     }
// }
// document.writeln("<br>"+"Odd numbers: ".bold()+"<br>");
// for(var o = 0; o< c; o++){
//     if(o % 2 != 0){
//         document.writeln(" "+o+" ");
//     }
// }
// document.writeln("<br>"+"Series: ".bold()+"<br>");
// for(var e = 1; e< c; e++){
//     if(e % 2 === 0){
//         document.writeln(" "+e+"k");
//     }
// }

//7

//  var ItemArr = ["cake", "biscuit", "cookie", "chips", "patty"]
// var que = prompt("Welcome to our bakery! Please enter the item you want. :)");
// que.toLowerCase();
// var find = ItemArr.includes(que);
// if (find == true){
//     alert("Yes "+que+ " is available");
// }
// else{
//     alert("Sorry! we dont have "+que);
// }

//8
// var LargeNumArr = [24, 53, 78, 91, 12];
// alert(Math.max(...LargeNumArr)+" is the largest number");

//9

// var SmallNumArr = [24, 53, 78, 91, 12];
// alert(Math.min(...SmallNumArr)+" is the smallest number");

//10

// document.writeln("Multiplies of 5:".bold());
// for (var x=1; x <= 100; x++){
// if( x % 5 == 0 ){
//     document.writeln(" "+x);
//     }
// }