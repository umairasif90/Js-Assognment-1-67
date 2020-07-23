//1

// function DataShow(){
//     var em = document.getElementById("Email")
//     var nam = document.getElementById("firstName")
//     var lnam = document.getElementById("lasatName")
//     var num = document.getElementById("Number")
//     document.write("First Name: "+nam.value+ "<br>Last Name: "+nam.value + "<br>Your Number: "+num.value+"<br>Your E-mail: "+ em.value);
// }

//2

// function readMore(){
//     var text = "I wouldn't have to stand before you now, as a failure, telling you all this. So this time I want to impart this truth with you, you don't even have to forgive me, and no matter what you do from here on out, I will love you always"
//     document.getElementById("MyParagraph").innerHTML = text;
// }

//3

// var rIndex,
// table = document.getElementById("table");


// function checkEmptyInput()
// {
// var isEmpty = false,
//     Sno = document.getElementById("Sno").value,
//     fname = document.getElementById("fname").value,
//     lname = document.getElementById("lname").value,
//     age = document.getElementById("age").value;

// if(Sno === ""){
//     alert("please fill the input field");
//     isEmpty = true;
// }
// else if(fname === ""){
//     alert("please fill the input field");
//     isEmpty = true;
// }
// else if(lname === ""){
//     alert("please fill the input field");
//     isEmpty = true;
// }
// else if(age === ""){
//     alert("please fill the input field");
//     isEmpty = true;
// }
// return isEmpty;
// }


// function addHtmlTableRow()
// {

// if(!checkEmptyInput()){
// var newRow = table.insertRow(table.length),
//     cell0 = newRow.insertCell(0),
//     cell1 = newRow.insertCell(1),
//     cell2 = newRow.insertCell(2),
//     cell3 = newRow.insertCell(3),
//     Sno = document.getElementById("Sno").value,
//     fname = document.getElementById("fname").value,
//     lname = document.getElementById("lname").value,
//     age = document.getElementById("age").value;

// cell0.innerHTML = Sno;
// cell1.innerHTML = fname;
// cell2.innerHTML = lname;
// cell3.innerHTML = age;

// selectedRowToInput();
// }
// }


// function selectedRowToInput()
// {

// for(var i = 1; i < table.rows.length; i++)
// {
//     table.rows[i].onclick = function()
//     {

//         rIndex = this.rowIndex;
//       document.getElementById("Sno").value = this.cells[0].innerHTMLl;
//       document.getElementById("fname").value = this.cells[1].innerHTML;
//       document.getElementById("lname").value = this.cells[2].innerHTML;
//       document.getElementById("age").value = this.cells[3].innerHTML;
//     };
// }
// }
// selectedRowToInput();

// function editHtmlTbleSelectedRow()
// {
// var Sno = document.getElementById("Sno").value,
//     fname = document.getElementById("fname").value,
//     lname = document.getElementById("lname").value,
//     age = document.getElementById("age").value;
// if(!checkEmptyInput()){
// table.rows[rIndex].cells[0].innerHTML = Sno;
// table.rows[rIndex].cells[1].innerHTML = fname;
// table.rows[rIndex].cells[2].innerHTML = lname;
// table.rows[rIndex].cells[3].innerHTML = age;
// }
// }

// function removeSelectedRow()
// {
// table.deleteRow(rIndex);

// document.getElementById("Sno").value = "";
// document.getElementById("fname").value = "";
// document.getElementById("lname").value = "";
// document.getElementById("age").value = "";
// }