
//learn about the DOM (Document Object Model) in JavaScript 
//The DOM is a programming interface for web documents. 
//It represents the page so that programs can change the document 
//structure, style, and content. The DOM represents the document as 
//nodes and objects; that way, programming languages can interact with
 //the page.

//To access the DOM in JavaScript, you can use the `document` object.
//For example, to get an element by its ID: 
var element = document.getElementById("myElement");

//To change the content of an element:  
element.innerHTML = "New content!";

//To change the style of an element:
element.style.color = "red";

//To add an event listener to an element:
element.addEventListener("click", function() {
  alert("Element clicked!");
});

//To create a new element and add it to the DOM:
var newElement = document.createElement("div");
newElement.innerHTML = "I am a new element!";
document.body.appendChild(newElement);  

//examples with explanations of how to do them
//1. Change the background color of a div with the ID "myDiv":
var myDiv = document.getElementById("myDiv");
myDiv.style.backgroundColor = "blue";

//2. Add a click event listener to a button with the ID "myButton":
var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
  alert("Button was clicked!");
});

//3. Create a new paragraph element and add it to the body of the document:
var newParagraph = document.createElement("p");
newParagraph.innerHTML = "This is a new paragraph.";
document.body.appendChild(newParagraph);

//4. Change the text of an element with the class "myClass":
var elements = document.getElementsByClassName("myClass");
for (var i = 0; i < elements.length; i++) {
  elements[i].innerHTML = "Text has been changed!";
}   
//5. Remove an element with the ID "oldElement":
var oldElement = document.getElementById("oldElement"); 
oldElement.parentNode.removeChild(oldElement);

//6. Toggle a class on an element with the ID "toggleElement":
var toggleElement = document.getElementById("toggleElement");
toggleElement.classList.toggle("active");

//7. Get the value of an input field with the ID "myInput":
var myInput = document.getElementById("myInput");
var inputValue = myInput.value;
console.log(inputValue);

//8. Set the value of an input field with the ID "myInput":
myInput.value = "New value";   

//9. Create a new list item and add it to an unordered list with the ID "myList":
var newListItem = document.createElement("li");
newListItem.innerHTML = "New list item";
var myList = document.getElementById("myList");
myList.appendChild(newListItem);

//10. Get all elements with the tag name "p" and log their text content:
var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i].textContent);
}



// traversing the DOM:
//1. Get the parent element of an element with the ID "childElement":
var childElement = document.getElementById("childElement");
var parentElement = childElement.parentElement;
console.log(parentElement); 
//2. Get the first child element of an element with the ID "parentElement":
var parentElement = document.getElementById("parentElement");
var firstChild = parentElement.firstElementChild;
console.log(firstChild);  
//3. Get the next sibling element of an element with the ID "currentElement":
var currentElement = document.getElementById("currentElement");
var nextSibling = currentElement.nextElementSibling;
console.log(nextSibling);
//4. Get the previous sibling element of an element with the ID "currentElement":
var previousSibling = currentElement.previousElementSibling;
console.log(previousSibling);
//5. Get all child elements of an element with the ID "parentElement":
var childElements = parentElement.children;
console.log(childElements);
//6. Get the first child element of an element with the class "myClass":
var myClassElement = document.getElementsByClassName("myClass")[0];
var firstChildOfMyClass = myClassElement.firstElementChild;
console.log(firstChildOfMyClass);
//7. Get the last child element of an element with the ID "parentElement":
var lastChild = parentElement.lastElementChild;
console.log(lastChild);
//8. Get the parent element of an element with the class "myClass":
var myClassElement = document.getElementsByClassName("myClass")[0];
var parentOfMyClass = myClassElement.parentElement; 
console.log(parentOfMyClass);
//9. Get the next sibling element of an element with the class "myClass":
var nextSiblingOfMyClass = myClassElement.nextElementSibling; 
console.log(nextSiblingOfMyClass);
//10. Get the previous sibling element of an element with the class "myClass":
var previousSiblingOfMyClass = myClassElement.previousElementSibling; 
console.log(previousSiblingOfMyClass);
console.log("DOM manipulation and traversal examples completed!");