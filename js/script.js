/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

var quotes = [
  {
    quote : 'Always do right. This will gratify some people and astonish the rest.',
    source : 'Mark Twain',
    citation : "Note to the Young People's Society, Greenpoint Presbyterian Church, 1901"
  },
  {
    quote : 'If you are going through hell, keep going.',
    source : 'Winston Churchill',
    citation : ''
  },
  {
    quote : 'Sometimes the road less traveled is less traveled for a reason',
    source : 'Jerry Seinfeld',
    citation : ''
  },
  {
    quote : 'Just remember, once you\'re over the hill you begin to pick up speed.',
    source : 'Arthur Schopenhauer',
    citation : ''
  },
  {
    quote : 'All my life, I always wanted to be somebody. Now I see that I should have been more specific.',
    source : 'Jane Wagner',
    citation : ''
  },
  {
    quote : 'Friendship is born at that moment when one person says to another: What! You too? I thought I was the only one.',
    source : 'C.S. Lewis',
    citation : ''
  },
  {
    quote : 'Your work is to discover your world and then with all your heart give yourself to it.',
    source : 'Buddha',
    citation : ''
  },
  {
    quote : 'True friends are families which you can select.',
    source : 'Audrey Hepburn',
    citation : ''
  },
  {
    quote : 'The more I give to thee, the more I have, for both are infinite.',
    source : 'William Shakespeare',
    citation : ''
  },
  {
    quote : 'I used to think anyone doing anything weird was weird. Now I know that it is the people that call others weird that are weird.',
    source : 'Paul McCartney',
    citation : ''
  }
];




/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

function getRandomQuote(){
  var randNum = 0;

  randNum = Math.floor(Math.random() * quotes.length);

  return quotes[randNum];
}



/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote(){
  var randQuote = getRandomQuote();
  var outputDiv = document.getElementById('quote-box');
  var html = '';

  html += "<p class='quote'>" + randQuote.quote + '</p>';
  html += "<p class='source'>" + randQuote.source;
  if (randQuote.citation){
    html += "<span class=citation>" + randQuote.citation + "</span>";
  }
  html += '</p>';

  outputDiv.innerHTML = html;
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


