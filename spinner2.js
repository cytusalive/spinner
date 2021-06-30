process.stdout.write('hello from spinner2.js... \rheyyy\n');

const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => process.stdout.write(`\r${spinner[i]}   `), 100 * i);
}

setTimeout(() => console.log(), 100 * spinner.length);
