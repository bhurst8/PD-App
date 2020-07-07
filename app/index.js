/*
 * Entry point for the watch app
 */

console.log("App code started");

import document from "document";

let container = document.getElementById("container");

// Get the selected index
let currentIndex = container.value;

// Set the selected index
container.value = 0; // jump to first slide
