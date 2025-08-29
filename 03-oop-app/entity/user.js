import BaseEntity from "./base-entity.js";

export default class User extends BaseEntity {
  #email;
  #password;
  #nickname;

  constructor(email, password, nickname) {
    super();
    this.#email = email;
    this.#password = password;
    this.#nickname = nickname;
  }
  toCSV() {
    return `${this.#email},${this.#password},${this.#nickname}`;
  }
  get email() {
    return this.#email;
  }
  get nickname() {
    return this.#nickname;
  }
  checkPasswordMatch(inputPassword) {
    if (this.#password === inputPassword) {
      return true;
    } else {
      return false;
    }
  }
}
