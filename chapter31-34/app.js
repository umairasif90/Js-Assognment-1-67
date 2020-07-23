//1
// var current = new Date();
// document.writeln("Current date is ".bold()+"<br>"+current);

//2
// var month = new Array("jan","feb","mar","apr","may","june","jul","aug","sep","oct","nov","dec");
//   var date = new Date();
//   var currenrtMonth = month[date.getMonth()];
//   alert("Current month is "+currenrtMonth);

//3
// var days = new Array("sun","mon","tue","wed","thu","fri","sat");
//   var a = new Date();
//   var currentDay = days[a.getDay()];
//   alert("today is "+currentDay)

//4
// var dayArr = new Array("sun","mon","tue","wed","thu","fri","sat");
//   var a = new Date();
//   var day = dayArr[a.getDay()];
//   alert("It's fun day "+day)

//5
// var a = new Date();
// var current = a.getDate();
// if(current < 15){
//     alert("First 15 days of the month");
// }
// else{
//     alert("Last 15 days of the month");    
// }

//6
// var currentDate = new Date();
// var milli = currentDate.getTime();
// var mins = Math.floor(milli / 60000);
// document.writeln("Current date: "+currentDate+"<br>"+"<br>"+"Elapsed milliseconds since January 1,1970: "+milli+"<br>"+"<br>"+"Elapsed minutes since January 1, 1970: "+mins);

//7
// var currentDate = new Date();
// var hour = currentDate.getHours();
// if(hour > 12){
//     alert("Its P.M")
// }
// else{
//     alert("Its A.M")
// }

//8
// var b = new Date(new Date().getFullYear(), 11, 31);
// document.writeln("Last Date: "+b);

//9
// var date1 = new Date('04/25/2020');
// var date2 = new Date();
// var diff = Math.abs(date2 - date1);
// var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
// alert(days + " days have passed since 1st Ramadan, 2020");

//10
// var date1 = new Date();
// var date2 = new Date("Dec 05, 2015 20:15:16");
// var seconds = Math.abs(date1 - date2) / 1000;
// alert("On reference date: "+date2+"\n"+ seconds+ " seconds had passed since beginning of 2015");

//11
// var currentDate = new Date();
// document.writeln("Current date: "+currentDate);
// currentDate.setHours(currentDate.getHours() - 1);
// document.writeln("<br> 1 hour ago,it was "+currentDate);

//12
// var date = new Date();
// document.writeln("Current date: "+date);
// date.setFullYear(date.getFullYear() - 100);
// document.writeln("<br> 100 years back, it was "+date);

//13
// var currentDate = new Date();
// var currentAge = +prompt("Enter your age: ")
// currentDate.setFullYear(currentDate.getFullYear() - currentAge);
// var YearOfBirth = currentDate.getFullYear()
// document.writeln("<br> Your birth year is: "+YearOfBirth);

//14
// var customerName = prompt("Enter your name");
// var month1 = prompt("Enter current month");
// var noOfunits = +prompt("Enter number of units");
// var chargesPerunit = 16, LatePaymentCharges = 350, NetPayment = (noOfunits * chargesPerunit), Late_Payment = (noOfunits * chargesPerunit) + LatePaymentCharges;
// document.writeln("K-Electric Bill".bold()+"<br> Coustomer Name: "+customerName.bold()+"<br> Month: "+month1.bold()+"<br> Number of Units:<b> "+noOfunits+"</b>"+"<br> Charges Per Unit:<b> "+chargesPerunit+"</b>");
// document.writeln("<br><br> Net Amount Payable (within Due Date):<b> "+Math.round(NetPayment)+"</b>"+"<br> Late payment surcharge:<b> "+LatePaymentCharges+"</b>"+"<br> Gross Amount Payable (after Due Date):<b> "+Math.round(Late_Payment)+"</b>");


