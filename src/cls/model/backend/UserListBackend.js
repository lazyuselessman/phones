const axios = require('axios');

export default class UserListBackend {
  constructor() {
    this.users = [];
    this.loadUsers();
  }

  get baseURL() { //only getter. it used as baseURL without ()
    return 'http://127.0.0.1:8000/api/v1/';
  }

  async loadUsers() {
    const result = await axios.get(this.baseURL + 'user/');
    this.users = result.data;
  }

  async addUser(userObj) {
    const result = await axios.post(this.baseURL + 'user/', {
      "username": userObj.email,
      "password": userObj.password,
      "last_name": userObj.surname,
      "email": userObj.email,
    } );
    this.loadUsers();
    return result.data;
  }

  async login(userObj) {
    const userToken = await axios.post(this.baseURL + "token", {
      "username": userObj.email,
      "password": userObj.password,
    });
    if (!userToken.data.access) {
      console.log(
        `User with username '${userObj.email}' is not registered`
      );
      return null;
    }
    else {
      return this.findByEmail(userObj.email);
    }
  }

  findByEmail(email) {
    return this.users.find((user) => user.email === email);
  }
}
