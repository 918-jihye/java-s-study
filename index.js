// 1. 원시형 데이터: 문자열, 숫자
// const user_name1 = "김민정";
const userName1 = "김민정";
const userAge1 = 19;
console.log(`이름: ${userName1}, 나이: ${userAge1}`);

const userName2 = "박지연";
const userAge2 = 20;
console.log(`이름: ${userName2}, 나이: ${userAge2}`);

console.log();

// 2. 연산자
// 우변의 값을 좌변의 변수에 대입: =
// 같다: ===
// 대소 비교: <, <=, >, >=


// 3. 참조형 데이터: 객체, 배열
const user1 = {
  userName: "김민정", 
  userAge: 19
}
const user2 = {
  userName: "박지연", 
  userAge: 20
}
console.log(`이름: ${user1.userName}, 나이: ${user1.userAge}`);
console.log(`이름: ${user2.userName}, 나이: ${user2.userAge}`);

console.log();

const users = [user1];
users.push(user2);
console.log(`이름: ${users[0].userName}, 나이: ${users[0].userAge}`);
console.log(`이름: ${users[1].userName}, 나이: ${users[1].userAge}`);

console.log();

// 4. 제어문: 조건문
// if (이 부분의 결과가 참이라면) {
//   실행한다  
// } else if (아니면 이 부분의 결과가 참이라면) {
//   실행한다
// } else {
//   실행한다
// }
if (users[0].userAge >= 20) {
  console.log(`(성인O)이름: ${users[0].userName}, 나이: ${users[0].userAge}`);
} else {
  console.log(`(성인X)이름: ${users[0].userName}, 나이: ${users[0].userAge}`);
}
if (users[1].userAge >= 20) {
  console.log(`(성인O)이름: ${users[1].userName}, 나이: ${users[1].userAge}`);
} else {
  console.log(`(성인X)이름: ${users[1].userName}, 나이: ${users[1].userAge}`);
}

// 5. 함수

// 6. 제어문: 반복문
// while (이 부분의 결과가 참이라면) {
//   실행하고 다시 반복한다
// }
// 드디어 끝났다
let i = 0;
while (i < 10) {
  console.log(i);
  i = i + 1;
}
console.log("드디어 끝났다!");

let j = 0;
while (true) {
  console.log(j);
  if (j === 9) {
    break;
  }
  j = j + 1;  
}
console.log("드디어 끝났다!");

// continue 추가

for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}
console.log("드디어 끝났다!");
