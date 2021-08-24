const sentence = "hello there from lighthouse labs";

const greeting = (string) =>  {
  let time = 0;
  let input = string + '\n';
  input.split('').forEach(letter =>
    setTimeout(() => {
      process.stdout.write(letter);
    }, time += 50));
};

greeting(sentence);