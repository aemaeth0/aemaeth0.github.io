var quotes = [
  "\"We are a way for the cosmos to know itself.\"" + '<br>' + "— Carl Sagan",
  "\"Even the finest sword plunged into salt water will eventually rust.\"" + '<br>' + " — Sun Tzu",
  "\"Not all those who wander are lost.\"" + '<br>' + " — J.R. R. Tolkein",
  "\"There is no substitute for hard work.\"" + '<br>' + " — Thomas Edison",
  "\"All that we see or seem is but a scream within a scream.\"" + '<br>' + " — Edgar Allen Poe",
  "\"To improve is to change; to be perfect is to change often.\"" + '<br>' + " — Winston Churchill",
  "\"There is no beauty without some strangeness.\"" + '<br>' + " — Edgar Allen Poe",
  "\"I am not what happened to me. I am what I choose to become.\"" + '<br>' + " — Carl Jung",
  "\"Success if getting what you want. Happiness is wanting what you get.\"" + '<br>' + " — Dale Carnegie",
  "\"Wise men talk because they have something to say; fools, because they have to say something.\"" + '<br>' + " — Plato"
  ];
var randomQuote = quotes[Math.floor(Math.random() * 9)];
/*document.write(randomQuote);*/
/*document.getElementById('quote1').innerHTML = '<p>' + randomQuote + '</p>';*/
  document.getElementById('quote1').innerHTML = randomQuote;
