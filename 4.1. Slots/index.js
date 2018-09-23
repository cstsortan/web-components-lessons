// Importing code from other file thanks to ES Modules
import { addButton } from './src/add-button.js';

// Getting the entry point
const entryPoint = document.querySelector('#entry-point');

// Append a button with the method provided by external code
entryPoint.appendChild(addButton('Click here!'));