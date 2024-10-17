//Refactored spinner.js to remove repeated setTimeout statements
// create array of characters in the spin
// set variable for how many times you want the spinner to spin

const spin = ['|', '/', '-', '\\'];
const spins = 2;
let delay = 0;

// use for...of loop to loop through characters for first spin
// wrap that in a c style loop to spin 2 times

for (let i = 0; i < spins; i++) {
  for (const element of spin) {
    setTimeout(() => {
      process.stdout.write(`\r${element}   `);
    }, delay);
    delay += 200;
  }
}

setTimeout(() => {
  process.stdout.write('\r|   ');
  //console.log(); end on new line
}, delay);