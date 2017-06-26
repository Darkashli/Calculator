
// when the page loads, set some default values
var getal1 = parseInt(10);
var getal2 = parseInt(10);
var operator = '+';
var uitkomst = parseInt(0);

function Plus() {
	getal1 = parseInt(document.getElementById("display").value);
	operator = "+";
	document.getElementById("display").value = null;
}

// call this function when we need to print the new output
function printanswer() {
	getal2 = parseInt(document.getElementById("display").value);

	if (operator == '+') {
		uitkomst = parseInt(getal1 + getal2);
	//alert(getal1 + '+' + getal2 + '=' + uitkomst );
	}

	if (operator == '-') {
		uitkomst = getal1 - getal2;
	}

	if (operator == '/') {
		uitkomst = getal1 / getal2;
	}

	if (operator == '*') {
		uitkomst = getal1 * getal2;
	}

	document.getElementById("display").value = uitkomst;
}

