import User from "./User.js";

export default class UserList {
  constructor() {
    this.users = [];
  }

  addUser(userObj) {
    this.users.push(new User(userObj));
  }

  findById(userId) {
    // testing purposes ONLY!
    if (userId === -1) {
      return this.users[0];
    }
    return this.users.find((user) => user.id === userId);
  }

  findByEmail(email) {
    return this.users.find((user) => user.email === email);
  }
}
