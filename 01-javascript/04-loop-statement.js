// 반복문

// 시작
// while (이 조건이 참이라면) {
//   실행하고 다시 반복
// }
// 끝
// 0부터 9까지 출력
const func1 = () => {
  console.log("시작");
  let i = 0;
  while (i < 10) {
    console.log(i);
    i = i + 1;
  }
  console.log("끝");
}
// func1();

// break
// 0부터 9까지 출력
const func2 = () => {
  console.log("시작");
  let i = 0;
  while (true) {
    console.log(i);
    if (i === 9) {
      break;
    }
    i += 1;
  }
  console.log("끝");
}
// func2();

// for
// 0부터 9까지 출력
const func3 = () => {
  console.log("시작");
  for (let i = 0; i < 10; i = i + 1) {
    console.log(i);
  }
  console.log("끝");
}
func3();

// continue
// 0부터 9까지 5를 제외하고 출력
const func4 = () => {
  console.log("시작");
  for (let i = 0; i < 10; i = i + 1) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }  
  console.log("끝");
}
func4();
