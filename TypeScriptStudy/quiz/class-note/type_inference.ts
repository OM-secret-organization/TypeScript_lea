//타입 추론 기본
let a = 10;
let b = 'string';

// a = 10 기본값
function getA(a = 10) {
  let c = 'lea';
  return a + c; //10lea -> string
}

// 타입 추론 2
interface Dropdown<T> {
  value: T;
  title: string;
}

let shoppingItem: Dropdown<string> = { value: 'lea', title: 'hi' };
let shoppingItem: Dropdown<number> = { value: 3, title: 'hi' };
