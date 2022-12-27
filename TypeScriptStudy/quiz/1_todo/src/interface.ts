interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let lea: User = {
  age: 13,
  name: '레아',
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const LEA = {
  name: 'lea',
  age: 100,
};
getUser(LEA);

// 함수의 스펙(구조)에 인터페이스를 활용

interface sumFunction {
  (a: number, b: number): number;
}

let sum: sumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱

interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
arr[0]; // 'a'
arr[1] = 10; //err

interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsRile: /\.js$/,
};

obj['cssFile'] = 'a';

Object.keys(obj).forEach(function (value) {});

// 인터페이스 확장

// interface Person {
//   name: string;
//   age: number;
// }

interface Developer extends Person {
  laguage: string;
}

// let loveLea: Developer = {
//   name: 'lea',
//   age: 100,
//   laguage: 'hi',
// };

// type은 확장이 되지 않는다. 가능한 type 보다는 interface를 사용하는게 좋다.
