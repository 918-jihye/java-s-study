import PromptSync from "prompt-sync";

export default class MemoScreen {
  #prompt;
  #MemoService;

  constructor(MemoService) {
    this.#prompt = PromptSync();
    this.#MemoService = MemoService;
  }

  openCreateMemoUI(currentUser) {
    const content = this.#prompt("\t 메모내용을 입력하세요: ")
    const memo = this.#MemoService.createMemo(currentUser.email, content);
    console.log("\t메모가 생성되었습니다")
  }

  openMemosUI(currentUser) {
    const memos = this.#MemoService.getMemo(currentUser.email);
    if(memos.length === 0) {
      console.log("\t메모가 없습니다.")
    } else {
      console.log("\n====== 내 메모 =======");
      memos.forEach((memo, index) => {
        console.log (`[${index + 1}] ${memo.email} - ${memo.content}`);
      });
      console.log("==============\n")
    
    }
  }
  openMainUI() {
    return Number(this.#prompt("[1]. 메모 생성, [2] 메모 불러오기, [3]. 로그아웃, [4]. 종료"));
    }
}