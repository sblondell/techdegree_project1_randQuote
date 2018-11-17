/* techdegree project 1 - Random Quote Generator */
/* November 16, 2018                             */


/*
An array to hold all available quote objects for the assignment.
*/
var quotes = [
  {
    quote : 'Always do right. This will gratify some people and astonish the rest.',
    source : 'Mark Twain',
    citation : "Note to the Young People's Society, Greenpoint Presbyterian Church",
    year : '1901'
  },
  {
    quote : 'If you are going through hell, keep going.',
    source : 'Winston Churchill',
    citation : '',
    year : ''
  },
  {
    quote : 'Sometimes the road less traveled is less traveled for a reason',
    source : 'Jerry Seinfeld',
    citation : '',
    year : ''
  },
  {
    quote : 'Just remember, once you\'re over the hill you begin to pick up speed.',
    source : 'Arthur Schopenhauer',
    citation : '',
    year : ''
  },
  {
    quote : 'All my life, I always wanted to be somebody. Now I see that I should have been more specific.',
    source : 'Jane Wagner',
    citation : '',
    year : ''
  },
  {
    quote : 'Friendship is born at that moment when one person says to another: What! You too? I thought I was the only one.',
    source : 'C.S. Lewis',
    citation : '',
    year : ''
  },
  {
    quote : 'Your work is to discover your world and then with all your heart give yourself to it.',
    source : 'Buddha',
    citation : '',
    year : ''
  },
  {
    quote : 'True friends are families which you can select.',
    source : 'Audrey Hepburn',
    citation : '',
    year : ''
  },
  {
    quote : 'The more I give to thee, the more I have, for both are infinite.',
    source : 'William Shakespeare',
    citation : '',
    year : ''
  },
  {
    quote : 'I used to think anyone doing anything weird was weird. Now I know that it is the people that call others weird that are weird.',
    source : 'Paul McCartney',
    citation : '',
    year : ''
  }
];


/*
A function that takes an array and returns a random object from that array.
*/

function getRandomQuote(array){
  var randNum = 0;

  randNum = Math.floor(Math.random() * array.length);

  return array[randNum];
}



/*
A function that takes a random object from an array and generates the appropriate
html string (a combination of the object's properties and html tags) to be shown
by the web browser.
*/

function printQuote(){
  var randQuote = getRandomQuote(quotes);
  var outputDiv = document.getElementById('quote-box');
  var html = '';

  html += "<p class='quote'>" + randQuote.quote + '</p>';
  html += "<p class='source'>" + randQuote.source;
  if (randQuote.citation){
    html += "<span class='citation'>" + randQuote.citation + "</span>";
  }
  if (randQuote.year){
    html += "<span class='citation'>" + randQuote.year + "</span>";
  }
  html += '</p>';

  outputDiv.innerHTML = html;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


