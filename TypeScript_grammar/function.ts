// 함수 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식

function sum2(a: number, b: number): number {
  return a + b;
}

// 인자 값을 추가하면 에러가 뜬다.
function sum3(a: number, b: number): number {
  return a + b;
}

sum(10, 20, 30);

// 함수의 옵셔널 파라미터

function log(a: string, b?: string, c?: string) {}

log("hello");
log("hello ts", "lea");
