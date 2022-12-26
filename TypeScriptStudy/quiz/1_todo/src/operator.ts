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

//유니온 타입
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

// 모두 포함 (인터섹션)
let capt2: string & number & boolean;

// 실무에서는 인터섹션보다는 유니온이 더 많이 사용됨

askSomeone({ name: '디벨로퍼', skill: '웹개발' });
askSomeone({ name: '레아', age: 30 });
