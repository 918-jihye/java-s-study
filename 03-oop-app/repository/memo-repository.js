import Memo from "../entity/memo.js";
import BaseRepository from "./base-repository.js";

export default class MemoRepository extends BaseRepository {
  constructor(fileManager, config) {
    super(fileManager);
    this.fileSource = config.MEMO_DATA_PATH;
  }

  getAllMemos() {
    const memos = [];
    const memoRows = this.fileManager.read(this.fileSource);
    for (let i = 0; i < memoRows.length; i++) {
      const [email, content] = memoRows[i];
      const newMemo = new Memo (email.trim(), content.trim());
      memos.push(newMemo);
    }
    return memos;
  }
  addMemo(memo) {
    this.fileManager.write(this.fileSource, memo.toCSV());
  }
}
