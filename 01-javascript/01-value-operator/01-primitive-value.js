// 원시 값(Primitive Value)

/*
변수: 값에 이름을 붙인 것

const nickname = 1;
const: 값을 변경할 수 없으며 정의할 때 값을 선언해야 함

let x = 1;
let: 값을 변경할 수 있으며, 정의할 때 값을 선언하지 않아도 됨

항상 const를 사용해서 변수를 선언하고, 꼭 필요한 경우 let을 사용

const isStudent = true; >> javascript, c#, java, swift, go
const is_student = true; >> python, c, c++
*/
const nickname1 = "김민정";
const age1 = 20;
const isStudent1 = true;
console.log(`이름: ${nickname1}, 나이: ${age1}`);

const nickname2 = "박진웅";
const age2 = 30;
const isStudent2 = false;
console.log(`이름: ${nickname2}, 나이: ${age2}`);


/*
타입: 값의 형식

문자열(string): "", '', `${변수}`
  문자열 값으로 메소드를 사용하면 런타임에 동적으로 String 객체가 생성되고 사용후 제거된다.
  const address = "    대한민국-서울광역시-강남구     ";
  console.log(address.trim().split("-"));
  출력 결과: ["대한민국", "서울광역시", "강남구"];
숫자(number): 숫자, NaN, Infinity, -Infinity
참 또는 거짓(boolean): true, false
값을 정의하지 않음: undefined
값이 없음: null
큰 정수(bigint)
symbol
*/

/*
타입 변환

문자열로 변환
  String(값)
숫자로 변환
  Number(값) >> 숫자로 변환, 실패하면 NaN
  parseInt(값) >> 정수로 변환, 실패하면 ?
  parseFloat(값) >> 소수로 변환, 실패하면 ?
참 또는 거짓으로 변환
  Boolean(값)
  변환하면 false가 되는 것: 0, "", null, undefined, NaN
  변환하면 true가 되는 것: 위의 5가지를 제외한 나머지 전부
*/

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN)); 
