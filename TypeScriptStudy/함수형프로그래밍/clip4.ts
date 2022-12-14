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

/**
 * 순수함수
 * 입력타입 : string
 * 출력타입 : number | undefined
 */

function getPrice(name: string): number | undefined {
  if (name === 'tomato') {
    return 7000;
  } else if (name === 'orange') {
    return 15000;
  } else if (name === 'apple') {
    return 10000;
  }
}

export const isExpensive = (price: number | undefined) => {
  if (price === undefined) {
    return false;
  }
  return price > 10000;
};

export const main = () => {
  // const price = getPrice('tomato');
  // return isExpensive(price);
  return isExpensive(getPrice('tomato'));
};

//입력값이 적을 땐 객체로 사용
const priceOfFruit = {
  tomato: 7000,
  orange: 15000,
  apple: 10000,
};

const isEven = {
  tomato: true,
  orange: true,
  apple: false,
};

const isEvenFn = (str: string) => str.length % 2 === 0;

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
