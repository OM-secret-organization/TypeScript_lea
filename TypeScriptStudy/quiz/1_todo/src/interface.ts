interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let lea: User = {
  age: 13,
  name: '레아'
}

function getUser(user: User) {
  console.log(user);
}


const LEA = {
  name: 'lea',
  age: 100
}
getUser(LEA);