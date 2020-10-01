const sayHello = name => {
  console.log(`Hello, ${name}`);
}

sayHello("Erica");

//return

const returnSayHello = name => {
 return `Hello, ${name}`;
}

const greetings = returnSayHello("Erica");
console.log(greetings);