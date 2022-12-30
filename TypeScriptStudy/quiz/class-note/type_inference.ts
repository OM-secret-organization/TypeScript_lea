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
let shoppingItem2: Dropdown<number> = { value: 3, title: 'hi' };

// 타입 추론 3

interface Dropdown2<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown2<K> {
  description: string;
  tag: K;
}

let detailedItem: DetailedDropdown<string> = {
  title: 'abe',
  description: 'lea',
  value: 'hihi',
  tag: 'hello',
};
