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
var surpriseButton = document.querySelector('.surpriseButton');
var playbackButton = document.querySelector('.playbackButton');
// Create variables to store the element chosen by each button
var elementChosenForColumn1 = 0;
var elementChosenForColumn2 = 0;
var elementChosenForColumn3 = 0;
var elementChosenForColumn4 = 0;
var elementChosenForColumn5 = 0;
// Create variables to store the element to highlight for each column and play correct sound
var element, element1, element2, element3, element4, element5;

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function getElement() {
	// Get the element to highlight for column 1
	if (elementChosenForColumn1 == 1) {
		element1 = document.getElementById('col1_element1');
	}	else if (elementChosenForColumn1 == 2) {
		element1 = document.getElementById('col1_element2');
	}	else if (elementChosenForColumn1 == 3) {
		element1 = document.getElementById('col1_element3');
	}	else if (elementChosenForColumn1 == 4) {
		element1 = document.getElementById('col1_element4');
	}	else if (elementChosenForColumn1 == 5) {
		element1 = document.getElementById('col1_element5');
	}	else if (elementChosenForColumn1 == 6) {
		element1 = document.getElementById('col1_element6');
	}	else if (elementChosenForColumn1 == 7) {
		element1 = document.getElementById('col1_element7');
	}

	// Get the element to highlight for column 2
	if (elementChosenForColumn2 == 1) {
		element2 = document.getElementById('col2_element1');
	}	else if (elementChosenForColumn2 == 2) {
		element2 = document.getElementById('col2_element2');
	}	else if (elementChosenForColumn2 == 3) {
		element2 = document.getElementById('col2_element3');
	}	else if (elementChosenForColumn2 == 4) {
		element2 = document.getElementById('col2_element4');
	}	else if (elementChosenForColumn2 == 5) {
		element2 = document.getElementById('col2_element5');
	}	else if (elementChosenForColumn2 == 6) {
		element2 = document.getElementById('col2_element6');
	}

	// Get the element to highlight for column 3
	if (elementChosenForColumn3 == 1) {
		element3 = document.getElementById('col3_element1');
	}	else if (elementChosenForColumn3 == 2) {
		element3 = document.getElementById('col3_element2');
	}	else if (elementChosenForColumn3 == 3) {
		element3 = document.getElementById('col3_element3');
	}	else if (elementChosenForColumn3 == 4) {
		element3 = document.getElementById('col3_element4');
	}	else if (elementChosenForColumn3 == 5) {
		element3 = document.getElementById('col3_element5');
	}	else if (elementChosenForColumn3 == 6) {
		element3 = document.getElementById('col3_element6');
	}

	// Get the element to highlight for column 4
	if (elementChosenForColumn4 == 1) {
		element4 = document.getElementById('col4_element1');
	}	else if (elementChosenForColumn4 == 2) {
		element4 = document.getElementById('col4_element2');
	}	else if (elementChosenForColumn4 == 3) {
		element4 = document.getElementById('col4_element3');
	}	else if (elementChosenForColumn4 == 4) {
		element4 = document.getElementById('col4_element4');
	}	else if (elementChosenForColumn4 == 5) {
		element4 = document.getElementById('col4_element5');
	}	else if (elementChosenForColumn4 == 6) {
		element4 = document.getElementById('col4_element6');
	}	else if (elementChosenForColumn4 == 7) {
		element4 = document.getElementById('col4_element7');
	}

	// Get the element to highlight for column 5
	if (elementChosenForColumn5 == 1) {
		element5 = document.getElementById('col5_element1');
	}	else if (elementChosenForColumn5 == 2) {
		element5 = document.getElementById('col5_element2');
	}	else if (elementChosenForColumn5 == 3) {
		element5 = document.getElementById('col5_element3');
	}	else if (elementChosenForColumn5 == 4) {
		element5 = document.getElementById('col5_element4');
	}	else if (elementChosenForColumn5 == 5) {
		element5 = document.getElementById('col5_element5');
	}	else if (elementChosenForColumn5 == 6) {
		element5 = document.getElementById('col5_element6');
	}
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

	// Sets the variable for the element chosen by each button back to 1 if it reaches the maximum number of elements
	if (elementChosenForColumn1 == 8) {
		elementChosenForColumn1 = 1;
	} else if (elementChosenForColumn2 == 7) {
		elementChosenForColumn2 = 1;
	} else if (elementChosenForColumn3 == 7) {
		elementChosenForColumn3 = 1;
	} else if (elementChosenForColumn4 == 8) {
		elementChosenForColumn4 = 1;
	} else if (elementChosenForColumn5 == 7) {
		elementChosenForColumn5 = 1;
	}

	// Get elements chosen to form the phrase
	getElement();

	// Sets correct element to play sound and highlight image
	if (buttonNumber == 1) {
		element = element1;
	} else if (buttonNumber == 2) {
		element = element2;
	}	else if (buttonNumber == 3) {
		element = element3;
	}	else if (buttonNumber == 4) {
		element = element4;
	}	else if (buttonNumber == 5) {
		element = element5;
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
button2.addEventListener('click', function() {
	chooseElement(2);
});
button3.addEventListener('click', function() {
	chooseElement(3);
});
button4.addEventListener('click', function() {
	chooseElement(4);
});
button5.addEventListener('click', function() {
	chooseElement(5);
});
surpriseButton.addEventListener('click', function() {
	// Set variables to a random element
	elementChosenForColumn1 = Math.floor(Math.random() * 7) + 1;
	elementChosenForColumn2 = Math.floor(Math.random() * 6) + 1;
	elementChosenForColumn3 = Math.floor(Math.random() * 6) + 1;
	elementChosenForColumn4 = Math.floor(Math.random() * 7) + 1;
	elementChosenForColumn5 = Math.floor(Math.random() * 6) + 1;
	// Get elements chosen to form the phrase
	getElement();
	// Speak alt of all the elements
	textToSpeak = element1.getAttribute('alt') + " " + element2.getAttribute('alt') + " " + element3.getAttribute('alt') + " " + element4.getAttribute('alt') + " " + element5.getAttribute('alt');
	speakNow(textToSpeak);
});
playbackButton.addEventListener('click', function() {
	// Speak alt of all the elements
	textToSpeak = element1.getAttribute('alt') + " " + element2.getAttribute('alt') + " " + element3.getAttribute('alt') + " " + element4.getAttribute('alt') + " " + element5.getAttribute('alt');
	speakNow(textToSpeak);
});
