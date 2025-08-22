// 참조 값(Refefence Value)

/*
객체(Object): 복합적인 형식의 데이터를 키와 값 구조로 담을 수 있는 컨테이너
키를 통한 값 조회: user1.email, user1["email"]
키 목록 조회: Object.keys(user1)
값 목록 조회: Object.keys(user1)
키와 값 목록 조회: Object.entries(user1)
*/
let user1 = {
  email: "iu@gmail.com",
  password: "1234",
  nickname: "아이유",
  age: 19,
  isStudent: true,
}
let user2 = {
  email: "mj@gmail.com",
  password: "1234",
  nickname: "마이클 잭슨",
  age: 35,
  isStudent: false,
}

console.log(user1);
console.log(user1.email);
console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));

console.log(`이메일: ${user1.email}, 별명: ${user1.nickname}, 나이: ${user1.age}`);
console.log(`이메일: ${user2.email}, 별명: ${user2.nickname}, 나이: ${user2.age}`);

/*
배열(Array): 여러개의 데이터를 담을 수 있는 컨테이너
요소 개수: users.length
요소 조회: users[0]
요소 추가: users.push(user1), users.unshift(user1), users.splice(인덱스, 0, user1)
요소 삭제: users.pop(), users.shift(), users.splice(인덱스, 제거할 요소의 개수)
*/
const users = [user1];
console.log(users);
users.push(user2);
console.log(users);
console.log(users[0]);
console.log(users[1]);
users[0].hobbies = ["독서"];
users[1].hobbies = ["노래"];

console.log(`이메일: ${users[0].email}, 별명: ${users[0].nickname}, 나이: ${users[0].age}`);
console.log(`이메일: ${users[1].email}, 별명: ${users[1].nickname}, 나이: ${users[1].age}`);


/*
객체(Object)
펼치기: const newUsers = [...users]
구조분해: const [user1, user2, user3] = users;

배열(Array)
펼치기: const newUsers = [...users]
구조분해: const [user1, user2, user3] = users;
*/
users[0] = {
  ...users[0],
  hobbies: [...users[0].hobbies, "노래"],
};
users[1] = {
  ...users[1],
  hobbies: [...users[1].hobbies, "춤"],
};
console.log(users[0]);
console.log(users[1]);
