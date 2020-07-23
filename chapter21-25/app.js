//1
// var fname = prompt("Enter your first name: ");
// var lname = prompt("Enter your last name: ");
// alert("Welcome! "+fname+" "+lname);

//2
// var model = prompt("Enter you favorite mobile model: ");
// var length = model.length;
// document.writeln("My favorite mobile is: ".bold() +model+"<br>" + "Length of string is: ".bold() +length);

//3
// var string = "Pakistani";
// var indx = string.indexOf("n");
// alert("String: "+string+"\nIndex of n is: "+indx);

//4
// var string = "Hello World";
// var indx = string.lastIndexOf("l");
// alert("String: "+string+"\nIndex of last L is: "+indx);

//5
// var string = "Pakistani";
// var ind = string.charAt(3);
// alert("String: "+string+"\nCharacter at index 3 is: "+ind);

//6
// var fname = prompt("Enter your first name");
// var lname = prompt("Enter your last name");
// var concat = fname.concat(lname);
// alert("Welcome "+concat);

//7
// var cityName = "Hyderabad";
// var newCity = cityName.replace("Hyder", "Islamabad");
// alert("City is: "+cityName+"\nUpdated City is: "+newCity);

//8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g, "&");
// document.writeln("Message is: ".bold()+"<br>"+message+"<br>"+"Updated Message is: ".bold()+"<br>"+replace);

//9
// var string = "456";
// alert("The type of 456 is: "+typeof string);
// var num = Number(string);
// alert("Now The type of 456 is: "+typeof num);

//10
// var input = prompt("Enter some letters");
// var capletter = input.toUpperCase();
// alert("The input is: "+input+"\nUpper case: "+capletter);

//11
// var input = prompt("Enter some letters: ");
// alert("Title case: "+input[0].toUpperCase() +  input.slice(1));

//12
// var num = "35.36";
// alert("Number: "+num);
// num = num.replace(/\./g,"");
// alert("Result is: "+num);

//13
// var username = prompt("enter username")
// var a = /^[A-Za-z0-9 ]+$/
// var valid = a.test(username);
//         if (!valid) {
//             alert("Contains Special Characters.");
//         } else {
//             alert("Does not contain Special Characters.");
//         }

//14
// var items = ["cake", "biscuit", "cookie", "chips", "patty"]
// var message = prompt("Welcome to our bakery! Please enter the item you want. :)");
// message = message.toLowerCase();
// var check = items.includes(message);
// if (check == true){
//     alert("Yes "+message+ " is available at index: "+ items.indexOf(message));
// }
// else{
//     alert("WE ARE SORRY. PASTRY ARE NOT AVAILABLE IN OUR BAKERY "+message);
// }

//15
// var pass = prompt("enter password");
// var check =  /^[A-Za-z]\w{6,100}$/;
// if(pass.match(check)) 
// { 
// alert('Password Matched')
// }
// else
// { 
// alert('Password Not Matched')
// }

//16
// var university = "SSUET"
// var splitt = university.split("")
// for( var j = 0; j<university.length; j++){
//     document.writeln("<br>"+splitt[j])
// }

//17
// var input = prompt("Enter some word");
// var lastCharacter = input.charAt(input.length-1);
// alert("User Input: "+input+"\nLast character of input: "+lastCharacter);

//18

// var text = "The quick brown fox jumps over the lazy dog";
// text = text.toLowerCase();
// var occurance = text.match(/the/g);
// alert("there are "+occurance.length+" occurance(s) of word 'The'");


