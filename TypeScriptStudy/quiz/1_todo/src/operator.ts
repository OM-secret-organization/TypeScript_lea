// function logMessage(value: string): void {
//   console.log(value);
// }

// logMessage('hi');
// logMessage(100); //err

function logMessage(value: string | number): void {
  console.log(value);
}

logMessage('hi');
logMessage(100); //err

let lea: string | number | boolean;

function leaMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }

  throw new TrypeError('value must be string or number');
}

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person): void {
  someone.name;
  someone.age;
  someone.skill;
}

askSomeone({ name: 'hi', age: 30, skill: 'hi' });
