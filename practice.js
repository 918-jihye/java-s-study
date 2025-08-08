// 1. 0부터 9까지의 숫자 중에서 짝수만 출력하세요
let j = 0;
while (j < 10) {
  console.log(j);
  j = j + 2;
}

// 1. break를 사용해서
// 0부터 9까지의 숫자 중에서 홀수만 출력하세요
let i = 1;
while (true) {
  console.log(i);
  if (i === 9) {
    break;
  }
  i = i + 2;
}

// 0부터 9까지 짝수를 for 반복문으로 출력하세요
for (let i = 0; i < 10; i = i + 2) {
  console.log(i);
}
console.log("드디어 끝났다!");
