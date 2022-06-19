export default class User {
    constructor(userObj) {
      this.id = Math.round(Math.random() * 1000000).toString();
      this.surname = userObj.surname;
      this.email = userObj.email;
      this.password = userObj.password;
    }
  }
  