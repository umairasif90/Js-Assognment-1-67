// function mainContent(){
//     var main = document.getElementById("main-content")
//    var display = main.innerHTML;
//    document.write(display)
// }
// mainContent()

//2
// function mainContent() {
//     var main = document.getElementById("main-content").children;
//     var txt = "";
//     for (var i = 0; i < main.length; i++) {
//       txt = txt + main[i].tagName + "<br>";
//     }
//     document.getElementById("demo").innerHTML = txt;
//   }

//3
// function mainContent() {
//     var main = document.getElementsByClassName("render");

//     var txt = "";
//     for (var i = 0; i < main.length; i++) {
//       txt = txt + main[i].tagName + "<br>";
//     }
//     document.getElementById("demo").innerHTML = txt;
//   }

//4
// function mainContent(){
//    document.getElementById("first-name").value="umair";

// }
// mainContent()

//5
// function mainContent(){
//     document.getElementById("last-name").value="asif";
//     document.getElementById("email").value="umair.asif521";
// }
// mainContent()

//part 2
//1
// function nodeType(){
//     var x = document.getElementById("form-content").nodeType;
//   document.write(x)
// }
// nodeType()

//2
// function nodeType(){
//     var x = document.getElementById("lastName").nodeType;
//   document.write(x)
// }
// nodeType()

//3
// function updateChild() {
//         var elmnt = document.createElement("p");
//         var textnode = document.createTextNode("Last Name: umair");
//         elmnt.appendChild(textnode);
      
//         var item = document.getElementById("lastName");
//         item.replaceChild(elmnt, item.childNodes[0]);
// }
// updateChild()

//4
// function targetNode(){
//     var firstchild = document.getElementById("main-content");
//     document.write(firstchild.firstChild.nodeName)
//     document.write(firstchild.lastChild.nodeName)
// }
// targetNode()

//5
// function targetNode(){
//     var nextt = document.getElementById("lastName");
//     var prev = document.getElementById("lastName");
//     document.write(nextt.nextSibling.nodeName)
//     document.write(prev.previousSibling.nodeName)
// }
// targetNode()

//6
// function targetNode(){
//     var parent = document.getElementById("email");
//     var type = document.getElementById("email");
//     document.write(parent.parentNode.nodeName)
//     document.write(type.nodeType)
// }
// targetNode()