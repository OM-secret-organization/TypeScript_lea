function logText(text) {
  console.log(text);
  return text;
}

logText(31);
logText('lea');
logText(true);

// 제네릭 사용시
function logText2<T>(text: T): T {
  console.log(text);
  return text;
}

//호출하는 시점에 타입을 넘겨줌
logText2<string>('lea');
logText2<number>(31);
logText2<boolean>(true);

function logText3(text: string) {
  console.log(text);
  text.split('').reverse().join('');
  return text;
}

logText3('a');
logText3(10); // err
logText3(true); //err

// 유지보수는 안좋음, 계속 반복되는 코드
function logNumber(num: number) {
  console.log(num);
  return num;
}
const num = logNumber(10);

// 제네릭을 사용하지 않을 경우의 단점
function logText4(text: string | number) {
  console.log(text);
  return text;
}

logText4('a');
logText4(10);

const a = logText4('a'); // string | number

a.split(''); // number가 들어올 경우에는 split 을 사용할 수 없음

//제네릭을 이용한 타입 선언

function logText5<T>(text: T): T {
  console.log(text);
  return text;
}

// 호출할 때(호출하는 시점) 타입을 정의
const loveLea = logText5<string>('lovelea');
loveLea.split(''); //문자열이기 때문에 사용 가능
const login = logText5<boolean>(true);
