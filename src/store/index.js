import { createStore } from 'vuex'
import UserList from "../cls/model/UserList.js";
import PhoneList from "@/cls/model/PhoneList.js"

export default createStore({
  state: {
    users: new UserList(),
    currentUser: null,
    phoneNumbers: new PhoneList(),
    currentUserPhone: null,
  },
  getters: {
  },
  mutations: {
    ADD_USER: (state, userObj) => {
      state.users.addUser(userObj);
      state.currentUserPhone = state.phoneNumbers.addPhone(userObj);
    },
    LOGIN: (state, userObj) => {
      const user = state.users.findByEmail(userObj.email);
      if (!user) {
        console.log(
          `User with username '${userObj.email}' is not registered`
        );
        return;
      }
      if (user.password === userObj.password) {
        state.currentUser = user;
      } else {
        console.log(
          `Password for username '${userObj.username}' doesn't match!`
        );
      }
    },
    LOGOUT: (state) => {
      state.currentUser = null;
      console.log("Logged out");
    },
    ADD_NUMBER: (state, number) => {
      if (state.currentUser) {
        state.currentUserPhone.addNumber(number);
      }
    },
    DELETE_NUMBER: (state, numberId) => {
      state.currentUserPhone.deleteNumber(numberId);
    },
    EDIT_NUMBER: (state, phoneNumber) => {
      state.currentUserPhone.editNumber(phoneNumber.id, phoneNumber.number);
    }
  },
  actions: {
    ADD_USER: (context, user) => {
      context.commit("ADD_USER", user);
    },
    LOGIN: (context, user) => {
      context.commit("LOGIN", user);
    },
    LOGOUT: (context) => {
      context.commit("LOGOUT");
    },
    ADD_NUMBER: (context, number) => {
      context.commit("ADD_NUMBER", number);
    },
    DELETE_NUMBER: (context, numberId) => {
      context.commit("DELETE_NUMBER", numberId);
    },
    EDIT_NUMBER: (context, item) => { 
      context.commit('EDIT_NUMBER', item);
    },
  },
  modules: {
  }
})
