//1
// var studentNames = [];

//2
// var studentNames = new Array();

//3
// var stringArray = ["Umair","Ali","Shafin"];
// alert(stringArray[0]);

//4
// var intArray = [0,1,2];
// alert(intArray[0]);

//5
// var boolArray = [true,false];
// alert(boolArray[0]);
//6
// var mixArray = [0, "First", "true"];
// alert(mixArray[0]);

//7
// var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.writeln("Qualifications:".bold()+"<br>"+"1) "+qualification[0]+"<br>"+"2) "+qualification[1]+"<br>"+"3) "+qualification[2]+"<br>"+"4) "+qualification[3]+"<br>"+"5) "+qualification[4]+"<br>"+"6) "+qualification[5]+"<br>"+"7) "+qualification[6]+"<br>"+"8) "+qualification[7]);

//8
// var StudentNames = ["shafin","umair","ali"];
// var score = [200,100,500];
// var total = 500;
// var per = (score[0]/total)*100, percIndOne = (score[1]/total)*100, percIndTwo = (score[2]/total)*100;
// document.writeln("The score of "+StudentNames[0]+" is "+score[0]+" and Precentage is: "+per+"%"+"<br>"
// +"The score of "+StudentNames[1]+" is "+score[1]+" and Precentage is: "+percIndOne+"%"+"<br>"
// +"The score of "+StudentNames[2]+" is "+score[2]+" and Precentage is: "+percIndTwo+"%");

//9

// var strColors = [" Red"," Green"," Blue"," Yellow"];
// document.writeln("strColors Array".bold()+"<br>"+"<br>"+"Initial array strColors: "+strColors);
// var que = prompt("What color do you want to put in the begining?");
// strColors.unshift(que);
// document.writeln("<br>"+"<br>"+"After adding new color is the begining: "+strColors);
// var que = prompt("What color do you want to put in the End?");
// strColors.push(que);
// document.writeln("<br>"+"<br>"+"After adding new color is the End: "+strColors);
// var que = prompt("Add one more color in the begining");
// strColors.unshift(que);
// var que = prompt("One more color please :D");
// strColors.unshift(que);
// document.writeln("<br>"+"<br>"+"After adding 2 new strColors is the begining: "+strColors);
// strColors.shift(que);
// document.writeln("<br>"+"<br>"+"After removing first color from the begining: "+strColors);
// strColors.pop(que);
// document.writeln("<br>"+"<br>"+"After removing first color from the end: "+strColors);

//10
// var studentScore = [];
// var sub = +prompt("Enter number of subjects");
// for(var i=0; i<sub; i++) {
// 	studentScore[i] = prompt('Enter marks for subject #' + (i+1));
// }
// document.writeln("Student Scores: ".bold()+studentScore);
// document.writeln("<br>"+"Student Scores in ascending order: ".bold()+studentScore.sort());

//11
// var cities = ["karachi","lahore","peshawar","islamabad","quetta"];
// var select = [];
// select = cities.slice(2, 4);
// document.writeln("The cities are: ".bold()+cities);
// document.writeln("<br>"+"Selected cities are: ".bold()+select);

//12
// var arr = ["This", "is", "my","cat"];
// document.writeln("This is array: "+arr);
// document.write("<br>"+"This is string: "+ arr.join(" "));

//13
// var fifo = [];
// fifo.push("first element");
// fifo.push(" second element");
// fifo.push(" third element");
// fifo.push(" fourth element");
// fifo.push(" fifth element");
// document.writeln(fifo);
// fifo.shift();
// document.writeln("<br>"+"<br>"+"first element removed: "+"<br>"+fifo);
// fifo.shift();
// document.writeln("<br>"+"<br>"+"second element removed: "+"<br>"+fifo);
// fifo.shift();
// document.writeln("<br>"+"<br>"+"third element removed: "+"<br>"+fifo);
// fifo.shift();
// document.writeln("<br>"+"<br>"+"fourth element removed: "+"<br>"+fifo);
// fifo.shift();
// document.writeln("<br>"+"<br>"+"fifth element removed: "+"<br>"+fifo);

//14
// var lifo = [];
// lifo.push("first element");
// lifo.push(" second element");
// lifo.push(" third element");
// lifo.push(" fourth element");
// lifo.push(" fifth element");
// document.writeln(lifo);
// lifo.pop();
// document.writeln("<br>"+"<br>"+"fifth element removed: "+"<br>"+lifo);
// lifo.pop();
// document.writeln("<br>"+"<br>"+"fourth element removed: "+"<br>"+lifo);
// lifo.pop();
// document.writeln("<br>"+"<br>"+"third element removed: "+"<br>"+lifo);
// lifo.pop();
// document.writeln("<br>"+"<br>"+"second element removed: "+"<br>"+lifo);
// lifo.pop();
// document.writeln("<br>"+"<br>"+"first element removed: "+"<br>"+lifo);

//15

// var phoneManu = ["Apple"," Samsung"," HTC"," Nokia"," Samsung"];
// document.writeln("Here are some Mobile device manufactures:".bold()+"<br>"+"<br>");
// document.writeln("No1: "+phoneManu[0]+"<br>");
// document.writeln("No2: "+phoneManu[1]+"<br>");
// document.writeln("No3: "+phoneManu[2]+"<br>");
// document.writeln("No4: "+phoneManu[3]+"<br>");
// document.writeln("No5: "+phoneManu[4]+"<br>");



