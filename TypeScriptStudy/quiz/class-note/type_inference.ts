let a = 10;
let b = 'string';

// a = 10 기본값
function getA(a = 10) {
  let c = 'lea';
  return a + c; //10lea -> string
}
