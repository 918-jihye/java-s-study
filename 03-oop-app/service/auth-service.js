import User from "../entity/user.js";
import SignInRes from "../dto/sign-in-res.js";

export default class AuthService {
  #userRepository;

  constructor(userRepository) {
    this.#userRepository = userRepository;
  }

  signIn(inputEmail, inputPassword) {
    const users = this.#userRepository.getAllUsers();
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (
        user.email === inputEmail &&
        user.checkPasswordMatch(inputPassword)
      ) {
        return new SignInRes(user.email, user.nickname);
      }
    }

    return null;
  }
  signUp(inputEmail, inputPassword, inputNickname) {
    const users = this.#userRepository.getAllUsers();
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === inputEmail) {
        return false;
      }
    }

    const newUser = new User(inputEmail, inputPassword, inputNickname);
    this.#userRepository.addUser(newUser);
    return true;
  }
}
