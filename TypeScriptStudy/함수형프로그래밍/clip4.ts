// 선언형
export function priceOfTomato() {
  return 7000;
}

export function priceOfOrange() {
  return 15000;
}

export function priceOfApple() {
  return 10000;
}

export function list1() {
  //토마토, 오렌지, 사과 한상자
  return priceOfTomato() + priceOfOrange() + priceOfApple();
}

export function list2() {
  return priceOfTomato() + priceOfTomato();
}

export function list3() {
  return priceOfTomato() * 100;
}
