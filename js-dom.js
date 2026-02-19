/*
  This file is intentionally educational.
  It demonstrates common DOM manipulation and traversal patterns with detailed comments.

  Important behavior note:
  Many IDs/classes used below are "example" selectors and do not exist in index.html by default.
  To avoid runtime crashes, each example checks if the target element exists before using it.
*/

/*
  Utility: Safe ID lookup
  Why this exists:
  - Directly using document.getElementById(...) and then reading properties can throw errors
    when the element is missing.
  - Returning early keeps each example independent and easier to study.
*/
function getById(id) {
  return document.getElementById(id);
}

/*
  Utility: Consistent message for missing elements
  Why this helps:
  - Beginners can quickly understand why a demo did not run.
  - Console output remains structured and searchable.
*/
function warnMissing(selectorDescription) {
  console.info("[SKIPPED] " + selectorDescription + " was not found in the current HTML.");
}

/*
  Utility: Isolated example runner
  Why this exists:
  - Keeps each sample self-contained.
  - Catches unexpected errors so one failed example does not stop the rest.
*/
function runExample(title, callback) {
  try {
    callback();
    console.log("[OK] " + title);
  } catch (error) {
    console.error("[ERROR] " + title + ":", error);
  }
}

// ---------------------------------------------------------------------------
// SECTION A: Basic DOM manipulation examples
// ---------------------------------------------------------------------------

runExample("1) Get element by ID and update its content/style", function () {
  // Find an element with id="myElement".
  var element = getById("myElement");
  if (!element) {
    warnMissing('Element with id="myElement"');
    return;
  }

  // Replace the HTML content currently inside the element.
  element.innerHTML = "New content!";

  // Change text color to red so the visual update is obvious.
  element.style.color = "red";
});

runExample("2) Add a click listener to an existing element", function () {
  // This pattern demonstrates event-driven behavior.
  var element = getById("myElement");
  if (!element) {
    warnMissing('Element with id="myElement" for click listener');
    return;
  }

  // The callback runs every time the element is clicked.
  element.addEventListener("click", function () {
    alert("Element clicked!");
  });
});

runExample("3) Create and append a new div to the body", function () {
  // Create a brand new DOM node in memory.
  var newElement = document.createElement("div");

  // Set user-visible content for the new element.
  newElement.innerHTML = "I am a new element!";

  // Insert into the document so it appears on screen.
  document.body.appendChild(newElement);
});

runExample('4) Change background color of #myDiv', function () {
  var myDiv = getById("myDiv");
  if (!myDiv) {
    warnMissing('Element with id="myDiv"');
    return;
  }

  // Inline style writes directly to the element's style attribute.
  myDiv.style.backgroundColor = "blue";
});

runExample('5) Add click listener to #myButton', function () {
  var myButton = getById("myButton");
  if (!myButton) {
    warnMissing('Element with id="myButton"');
    return;
  }

  myButton.addEventListener("click", function () {
    alert("Button was clicked!");
  });
});

runExample("6) Create a paragraph and append it to the body", function () {
  var newParagraph = document.createElement("p");
  newParagraph.innerHTML = "This is a new paragraph.";
  document.body.appendChild(newParagraph);
});

runExample('7) Update text for all elements with class="myClass"', function () {
  var elements = document.getElementsByClassName("myClass");
  if (!elements.length) {
    warnMissing('Elements with class="myClass"');
    return;
  }

  // Loop through a live HTMLCollection and update each matching element.
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "Text has been changed!";
  }
});

runExample('8) Remove element #oldElement from the DOM', function () {
  var oldElement = getById("oldElement");
  if (!oldElement) {
    warnMissing('Element with id="oldElement"');
    return;
  }

  // parentNode is required because removeChild is called on the parent.
  if (!oldElement.parentNode) {
    console.info("[SKIPPED] #oldElement has no parentNode to remove from.");
    return;
  }
  oldElement.parentNode.removeChild(oldElement);
});

runExample('9) Toggle class "active" on #toggleElement', function () {
  var toggleElement = getById("toggleElement");
  if (!toggleElement) {
    warnMissing('Element with id="toggleElement"');
    return;
  }

  // If "active" exists, it is removed; otherwise it is added.
  toggleElement.classList.toggle("active");
});

runExample('10) Read and then update the value of #myInput', function () {
  var myInput = getById("myInput");
  if (!myInput) {
    warnMissing('Element with id="myInput"');
    return;
  }

  // Read the current field value for debugging/inspection.
  var inputValue = myInput.value;
  console.log("Current input value:", inputValue);

  // Overwrite with a new value.
  myInput.value = "New value";
});

runExample('11) Create a list item and append to #myList', function () {
  var myList = getById("myList");
  if (!myList) {
    warnMissing('Element with id="myList"');
    return;
  }

  var newListItem = document.createElement("li");
  newListItem.innerHTML = "New list item";
  myList.appendChild(newListItem);
});

runExample('12) Log text content of all <p> elements', function () {
  var paragraphs = document.getElementsByTagName("p");
  if (!paragraphs.length) {
    warnMissing("<p> elements");
    return;
  }

  // textContent returns plain text without HTML tags.
  for (var i = 0; i < paragraphs.length; i++) {
    console.log("Paragraph " + (i + 1) + ":", paragraphs[i].textContent);
  }
});

// ---------------------------------------------------------------------------
// SECTION B: DOM traversal examples
// ---------------------------------------------------------------------------

runExample('13) Get parent of #childElement', function () {
  var childElement = getById("childElement");
  if (!childElement) {
    warnMissing('Element with id="childElement"');
    return;
  }

  // parentElement gives the closest element ancestor (not text/comment nodes).
  var parentElement = childElement.parentElement;
  console.log("Parent of #childElement:", parentElement);
});

runExample('14) Get first child of #parentElement', function () {
  var parentElement = getById("parentElement");
  if (!parentElement) {
    warnMissing('Element with id="parentElement"');
    return;
  }

  var firstChild = parentElement.firstElementChild;
  console.log("First child of #parentElement:", firstChild);
});

runExample('15) Get next and previous siblings of #currentElement', function () {
  var currentElement = getById("currentElement");
  if (!currentElement) {
    warnMissing('Element with id="currentElement"');
    return;
  }

  var nextSibling = currentElement.nextElementSibling;
  var previousSibling = currentElement.previousElementSibling;
  console.log("Next sibling of #currentElement:", nextSibling);
  console.log("Previous sibling of #currentElement:", previousSibling);
});

runExample('16) Get all children and last child of #parentElement', function () {
  var parentElement = getById("parentElement");
  if (!parentElement) {
    warnMissing('Element with id="parentElement"');
    return;
  }

  // children is an HTMLCollection of element children only.
  var childElements = parentElement.children;
  var lastChild = parentElement.lastElementChild;
  console.log("Children of #parentElement:", childElements);
  console.log("Last child of #parentElement:", lastChild);
});

runExample('17) Traverse from first element with class="myClass"', function () {
  var myClassElement = document.getElementsByClassName("myClass")[0];
  if (!myClassElement) {
    warnMissing('First element with class="myClass"');
    return;
  }

  var firstChildOfMyClass = myClassElement.firstElementChild;
  var parentOfMyClass = myClassElement.parentElement;
  var nextSiblingOfMyClass = myClassElement.nextElementSibling;
  var previousSiblingOfMyClass = myClassElement.previousElementSibling;

  console.log("First child of .myClass element:", firstChildOfMyClass);
  console.log("Parent of .myClass element:", parentOfMyClass);
  console.log("Next sibling of .myClass element:", nextSiblingOfMyClass);
  console.log("Previous sibling of .myClass element:", previousSiblingOfMyClass);
});

console.log("DOM manipulation and traversal examples completed.");
