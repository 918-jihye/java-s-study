import Memo from "../entity/memo.js"

export default class MemoService {
  #memoRepository;

  constructor(memoRepository) {
    this.#memoRepository = memoRepository;
  }

  createMemo(email, content) {
    const newMemo = new Memo(email, content);
    this.#memoRepository.addMemo(newMemo);
    return newMemo;
  }

  getMemo(email) {
    const allMemos = this.#memoRepository.getAllMemos();
    return allMemos.filter(memo => memo.email.trim() === email.trim());
  }
}