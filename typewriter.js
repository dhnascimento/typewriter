const sentence = "hello there from lighthouse labs";

let interval = 2000;

for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), interval);
  if((interval-2000)/50 >= sentence.length -1) {
    setTimeout(() => console.log(), interval);
  }
  interval += 50;
};
