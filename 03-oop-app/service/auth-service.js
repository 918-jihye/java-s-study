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
        user.getEmail() === inputEmail &&
        user.checkPasswordMath(inputPassword)
      ) {
        return new SignInRes(user.getEmail(), user.getNickname());
      }
    }

    return null;
  }
  signUp(inputEmail, inputPassword, inputNickname) {
    const users = this.#userRepository.getAllUsers();
    for (let i = 0; i < users.length; i++) {
      if (users[i].getEmail() === inputEmail) {
        return false;
      }
    }

    const newUser = new User(inputEmail, inputPassword, inputNickname);
    this.#userRepository.addUser(newUser);
    return true;
  }
}
