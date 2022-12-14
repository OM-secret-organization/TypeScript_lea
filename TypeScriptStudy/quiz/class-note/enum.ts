// Enums, 특정 갑들의 집합을 의미하는 자료형

// 나이키
// 아디다스
// 뉴발란스

//숫자형 이넘
enum Shoes {
  Nike,
  Adidas,
}

// 별도의 값을 지정하지 않으면 숫자형 이넘으로 취급
let myShoes = Shoes.Nike;
console.log(myShoes); //0

enum Shoes2 {
  Nike = 'nike',
  Adidas = 'adidas',
}

let myShoes2 = Shoes2.Nike;
console.log(myShoes2); //나이키

// 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답');
  }
  if (answer === Answer.No) {
    console.log('오답');
  }
}

askQuestion(Answer.Yes);
askQuestion('Yes');
