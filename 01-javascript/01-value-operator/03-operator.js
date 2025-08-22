// 연산자(Operator)

/*
기본 연산자
=
+, -, *, /, %
+=, -=, *=, /=, %=
++, --

비교 연산자
===, !==
<, <=, >, >=

논리 연산자
&& (AND, 두 조건이 모두 true일 때 true)
|| (OR, 두 조건 중 하나라도 true이면 true)
! (NOT, 논리 값을 반대로 변환)

삼항 연산자(조건이 참이면 a, 거짓이면 b를 반환)
조건 ? a : b

옵셔널 체이닝(객체의 속성에 접근할 때 속성이 null 또는 undefined이면 에러를 내지 않고 undefined를 반환)
.?

널 병합 연산자(왼쪽 값이 null 또는 undefined인 경우 오른쪽 값을 반환)
??

타입 체크 연산자
typeof
  null: object로 확인됩니다. 값이 null인지 확인하려면 if (x === null)를 사용하는 것이 좋습니다.
  array: object로 확인됩니다. 값이 배열인지 확인하려면 Array.isArray(x)를 사용하는 것이 좋습니다.

상속 체크 연산자
instanceof
*/
const user = { name: "김철수", age: 20 };
console.log(user.age >= 20 ? "성인" : "청소년");
console.log(user.phone?.number);
console.log(user.phone?.number ?? "010-XXX-XXXX");

const myString = "123";
console.log(typeof myString);

const myNumber = 123;
console.log(typeof myNumber);

const myBoolean = true;
console.log(typeof myBoolean);

let myUndefined;
console.log(typeof myUndefined);

const myNull = null;
console.log(typeof myNull);

const myObject = { email: "asd@gmail.com" };
console.log(typeof myObject);

const myArray = [];
console.log(typeof myArray);

const myFunction = function () {};
console.log(typeof myFunction);

class Animal {}
class Dog extends Animal {}
const dog = new Dog();
const animal = new Animal();
console.log(dog instanceof Animal);
console.log(dog instanceof Dog);
