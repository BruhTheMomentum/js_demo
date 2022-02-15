const moment = require('moment');

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

var date = Date();
console.log(moment(date).format("LL"));
document.getElementById("time").innerHTML = moment(date).format("LL");

function addListAfterClick(){
	if (input.value.length > 0)
		createListElement();
}

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.which === 13) //enter = 13
        createListElement();
}

function createListElement() {

    //create list element
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

    //finnished tasks
	function finnishedTask() {
		li.classList.toggle("done");
	}
	li.addEventListener("click",finnishedTask);

    //delete button
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);

	function deleteListItem(){
		li.classList.add("delete")
	}
}


