// Mad Libs Story Generator in JavaScript

function promptUserForWords(prompts) {
  const userInputs = [];
  for (let i = 0; i < prompts.length; i++) {
    const input = prompt(`Enter a ${prompts[i]}:`); // Uses browser prompt
    userInputs.push(input || `[${prompts[i]}]`);
  }
  return userInputs;
}

function generateStory(words) {
  // Example story template
  return `One day, a ${words[0]} ${words[1]} decided to ${words[2]} in the ${words[3]}. 
It was a very ${words[4]} experience!`;
}

function madLibs() {
  const prompts = [
    "adjective",
    "noun",
    "verb",
    "place",
    "adjective"
  ];

  const userWords = promptUserForWords(prompts);
  const story = generateStory(userWords);

  alert("Here's your Mad Libs story:\n\n" + story); // Outputs to browser alert
}

// To run: Open in browser, then call madLibs() in the console.
madLibs();
