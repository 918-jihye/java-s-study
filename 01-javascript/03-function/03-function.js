/*
함수 매개변수 작동 방식

1. 언어마다 다릅니다.

2. 자바스크립트의 함수 매개 변수 작동 방식: 값에 의한 전달(Pass by Value)
- 원시 값 전달(Pass by Value)
  - 함수가 실행되면 새로운 변수가 스택에 할당되고, 원시 값이 복사되어 전달된다

- 참조 값 전달(Pass by Value of Reference)
  - 함수가 실행되면 새로운 변수가 스택에 할당되고, 참조 값이 복사되어 전달된다

3. 기타 
- 자바스크립트는 함수도 객체입니다. 즉 Object의 자식입니다.
- 좋은 함수
  - 상위 스코프 값을 참조하는 함수는 좋은 함수가 아니다. 참조하고 싶은 값은 인자로 받아서 사용하는 것이 좋다.
  - 순수 함수를 최대한 작성하라.
  - 부작용이 존재하는 함수는 최대한 줄여서 격리하라.
*/
function addOne(number) {
  number + 1;
  return;
}

x = 1;
console.log(x);
addOne(x); 
console.log(x);

function addNumber(arr) {
  arr.push(100);
  return;
}

numbers = []
console.log(numbers);
addNumber(numbers);
console.log(numbers);