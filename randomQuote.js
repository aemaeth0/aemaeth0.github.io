var quotes = [
  "All give life to the warrior.",
  "Ours is the paradise of Terra.",
  "Let them be ash beneath our feet.",
  "Who dares wins.",
  "Ours is the redemption of the Universe.",
  "To improve is to change; to be perfect is to change often.",
  "We will crush the Inner Sphere until they are but smoke and dreams.",
  "I do not see why man should not be just as cruel as nature.",
  "Ours is the war of liberation.",
  "Strength lies not in defense but in attack."
  ];
var randomQuote = quotes[Math.floor(Math.random() * 9) + 1];
/*document.write(randomQuote);*/
/*document.getElementById('quote1').innerHTML = '<p>' + randomQuote + '</p>';*/
  document.getElementById('quote1').innerHTML = randomQuote;
