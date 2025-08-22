export default class App {
  #authScreen;

  constructor(authScreen) {
    this.#authScreen = authScreen;
  }
  run() {
    while (true) {
      const choice = this.#authScreen.openAuthUI();
      if (choice === 1) {
        const me = this.#authScreen.openSignInUI();
        if (me !== null) {
          break;
        }
      } else if (choice === 2) {
        this.#authScreen.openSignUpUI();
      } else if (choice === 3) {
        process.exit(0);
      } else {
        this.#authScreen.openInvalidInputUI();
        continue;
      }
    }

    console.log("========== Main Screen ==========");
    console.log(
      "[1]. 메모 생성, [2]. 메모 불러오기, [3]. 로그아웃, [4]. 종료: ",
    );
  }
}
