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
