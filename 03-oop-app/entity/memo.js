import BaseEntity from "./base-entity.js";

export default class Memo extends BaseEntity {
  #email;
  #content;

  constructor(email, content) {
    super();
    this.#email = email
    this.#content = content;
  }
  toCSV() {
    return `${this.#email},${this.#content}`;
  }
  get email() {
    return this.#email
  }
  get content() {
    return this.#content
  }
}
