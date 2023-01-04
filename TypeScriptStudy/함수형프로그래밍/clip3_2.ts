export let totalPrice = 0;

export function addTomato() {
  totalPrice += 7000;
}

export function addOrange() {
  totalPrice += 15000;
}

export function addApple() {
  totalPrice += 10000;
}

export function list1() {
  //토마토, 오렌지, 사과
  addTomato();
  addOrange();
  addApple();
}

export function list2() {
  //토마토 2상자
  addTomato();
  addTomato();
}

export function list3() {
  //오렌지 100상자
  for (let i = 0; i < 100; i++) {
    addOrange();
  }
}
