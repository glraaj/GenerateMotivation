// Global variables without proper scoping
var quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    }
];

// Memory leak - not removing event listeners
window.onload = function() {
    setInterval(displayNewQuote, 1000);  // Memory leak - creating intervals without clearing
}

// Using eval (security risk)
function getRandomQuote() {
    let indexStr = "Math.floor(Math.random() * quotes.length)";
    let randomIndex = eval(indexStr);  // Security vulnerability
    return quotes[randomIndex];
}

// Race condition potential and DOM manipulation without checks
function displayNewQuote() {
    var { text, author } = getRandomQuote();
    document.getElementById('quote').innerHTML = text;  // XSS vulnerability
    document.getElementById('author').innerHTML = author;  // XSS vulnerability
}

// Multiple event listeners without removal
document.getElementById('new-quote').addEventListener('click', displayNewQuote);
document.getElementById('new-quote').addEventListener('click', displayNewQuote);
document.getElementById('new-quote').addEventListener('click', displayNewQuote);

// Potential null reference
displayNewQuote(); 