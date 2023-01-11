let mots = prompt("Enter a mots:");

// Delete all the vowels from the mots
let motsSupprimer = mots.replace(/[aeiou]/gi, '');

// Console.log the result
console.log(motsSupprimer);

// Bonus: Replace the vowels with another character
let replaced = mots.replace(/[aeiou]/gi, function(match) {
  switch (match) {
    case 'a':
      return 1;
    case 'e':
      return 2;
    case 'i':
      return 3;
    case 'o':
      return 4;
    case 'u':
      return 5;
  }
});

// Console.log the result
console.log(replaced);