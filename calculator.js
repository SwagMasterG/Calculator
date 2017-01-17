// JavaScript Document


// Change Display

function d(val) {
	document.getElementById("d").value = val;
}

// Type numbers and operators

function v(val) {
	document.getElementById("d").value += val;
}

// Evaluate

function e() {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("Error")	
	}
}
var store = 0;
// Memory Functions
function m() {
     store = document.getElementById("d").value;
}
function ms() {
     document.getElementById("d").value += store;
}
function mc() {
    store=0;
}