export default class App {
  #authScreen;
  #memoScreen;

  constructor(authScreen, memoScreen) {
    this.#authScreen = authScreen;
    this.#memoScreen = memoScreen;
  }
  run() {
    let me =null;
    // 로그인
    while (true) {
      const choice = this.#authScreen.openAuthUI();
      if (choice === 1) {
        me = this.#authScreen.openSignInUI();
        if (me !== null) {
          break;
        }
      } else if (choice === 2) {
        this.#authScreen.openSignUpUI();
      } else if (choice === 3) {
        process.exit(0);
      } else {
        this.#authScreen.openInvalidInputUI();
      }
    }
    while (true) {
      const choice = this.#memoScreen.openMainUI();
      if (choice === 1) {
      this.#memoScreen.openCreateMemoUI(me);
      } else if (choice === 2) {
        this.#memoScreen.openMemosUI(me);
      } else if (choice === 3) {
        break;
      } else if  (choice === 4) {
        process.exit(0);
      } else {
        console.log("\t입력 잘못되었습니다.")
      }
      
    }
    
  }
}
