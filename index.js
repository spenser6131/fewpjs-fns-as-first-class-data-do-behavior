/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet (str) {
  const hour = str.split(':')[0];
  if (hour < 12) {
    return "Good Morning"
  }
  if (hour >= 12 && hour <= 17) {
    return "Good Afternoon"
  }
  if (hour > 17) {
    return "Good Evening"
  }
}

function displayMessage (str) {
  let el = document.querySelector("h1#greeting")
  el.innerText = str
}