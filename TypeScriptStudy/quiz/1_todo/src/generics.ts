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
