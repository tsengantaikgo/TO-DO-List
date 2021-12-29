
//select input and button & ul & LI
var input = document.getElementById("userinput");
var enterButton = document.getElementById("enter");
var list = document.getElementById("enterlist");
var listItem = document.getElementsByTagName("li");


// button eventlistener with function that add item to list
function inputLength() {
    return input.value.length;
}

function addListAfterClick(event) {
    if (inputLength() > 0) {
        createNewList();
    }
}

function addListAfterPress(event) {
    if (inputLength() > 0 && event.code === "Enter") {
        createNewList();
    }
}


function createNewList() {
    var newLi = document.createElement("li");
    var newButton = document.createElement("button");

    newLi.appendChild(document.createTextNode(input.value));
    newButton.appendChild(document.createTextNode("Delete Item"))

    newButton.addEventListener("click", deleteItem);

    list.appendChild(newLi);
    newLi.appendChild(newButton);

    input.value = "";
}

//delete Item for createNewList
function deleteItem(event) {
    event.target.parentElement.remove();
    // newButton.parentElement
}

//for the first 6 item add toggle and new button
//create new buttom
function createNewButton(i) {
    var newButton = document.createElement("button");
    newButton.appendChild(document.createTextNode("Delete Item"))
    listItem[i].appendChild(newButton);
    newButton.addEventListener("click", deleteItem);
}
//====FOR INIL LIST====//
//ADD DELETE button 
for (var i = 0; i < listItem.length; i++) {
    createNewButton(i)
}

// ADD CONDITION (ONLY toggle when tagnme === "LI")
function onAndOff(event) {
    console.log(event.type); // click
    console.log(event.target.tagName); //check the target (LI or UL)
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterPress);
list.addEventListener("click", onAndOff);



//- for loop to add eventlististener to listItem[i] is not working
//listItem[i] will be undifined when you clicked
//It because the event handler will be called some time after the loop has completed,
//so the variable i has a value that points outside the listItem array.

//- Wrap the code in a function, to create a scope where you have a copy of the variable
//- event.target

