// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
// Create selectors for buttons
var button1 = document.querySelector('.button1');
var button2 = document.querySelector('.button2');
var button3 = document.querySelector('.button3');
var button4 = document.querySelector('.button4');
var button5 = document.querySelector('.button5');
// Create variables to store the element chosen by each button
var elementChosenForColumn1 = 0;
var elementChosenForColumn2 = 0;
var elementChosenForColumn3 = 0;
var elementChosenForColumn4 = 0;
var elementChosenForColumn5 = 0;

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function chooseElement(buttonNumber) {
	// Increments the variable for the element chosen by each button
	if (buttonNumber == 1) {
		elementChosenForColumn1++;
	} else if (buttonNumber == 2) {
		elementChosenForColumn2++;
	}	else if (buttonNumber == 3) {
		elementChosenForColumn3++;
	}	else if (buttonNumber == 4) {
		elementChosenForColumn4++;
	}	else if (buttonNumber == 5) {
		elementChosenForColumn5++;
	}
5
	// Sets the variable for the element chosen by each button back to 1 if it reaches the maximum number of elements
	if (elementChosenForColumn1 == 8) {
		elementChosenForColumn1 = 1;
	} else if (elementChosenForColumn2 == 6) {
		elementChosenForColumn2 = 1;
	} else if (elementChosenForColumn3 == 6) {
		elementChosenForColumn3 = 1;
	} else if (elementChosenForColumn4 == 7) {
		elementChosenForColumn4 = 1;
	} else if (elementChosenForColumn5 == 6) {
		elementChosenForColumn5 = 1;
	}

	let element;

	// Get the element to highlight
	if (elementChosenForColumn1 == 1) {
		element = document.getElementById('col1_element1');
	}	else if (elementChosenForColumn1 == 2) {
		element = document.getElementById('col1_element2');
	}	else if (elementChosenForColumn1 == 3) {
		element = document.getElementById('col1_element3');
	}	else if (elementChosenForColumn1 == 4) {
		element = document.getElementById('col1_element4');
	}	else if (elementChosenForColumn1 == 5) {
		element = document.getElementById('col1_element5');
	}	else if (elementChosenForColumn1 == 6) {
		element = document.getElementById('col1_element6');
	}	else if (elementChosenForColumn1 == 7) {
		element = document.getElementById('col1_element7');
	}

	// Remove highlighted class from all elements
	let elements = document.querySelectorAll('.highlighted');
	elements.forEach(function(element) {
		element.classList.remove('highlighted');
	});

  // Add a CSS class to highlight the element
  element.classList.add('highlighted');

	// Speak alt of the element
	textToSpeak = element.getAttribute('alt');
	speakNow(textToSpeak);

	console.log(elementChosenForColumn1);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
// speakButton.onclick = function() {
// 	speakNow(textToSpeak);
// }
// Event listeners for buttons
button1.addEventListener('click', function() {
  chooseElement(1);
});
// button2.addEventListener('click', chooseElement(2));
// button3.addEventListener('click', chooseElement(3));
// button4.addEventListener('click', chooseElement(4));
// button5.addEventListener('click', chooseElement(5));