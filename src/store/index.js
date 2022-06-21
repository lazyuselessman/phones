import { createStore } from 'vuex'
import PhoneListBackend from '@/cls/model/backend/PhoneListBackend';
import UserListBackend from '@/cls/model/backend/UserListBackend';


export default createStore({
  state: {
    users: new UserListBackend(),
    phoneNumbers: new PhoneListBackend(),
    currentUser: null,
  },
  getters: {
    userPhoneGetUserPhone(state) {
      return state.phoneNumbers.loadUserPhone(state.currentUser.id);
    }
  },
  mutations: {
    ADD_USER: (state, userObj) => {
      state.users.addUser(userObj);
    },
    LOGIN: (state, userObj) => {
      state.currentUser = userObj;
    },
    LOGOUT: (state) => {
      state.currentUser = null;
      console.log("Logged out");
    },
    ADD_NUMBER: (state, number) => {
      if (state.currentUser) {
        state.phoneNumbers.addNumber(state.currentUser, number);
      }
    },
    DELETE_NUMBER: (state, numberId) => {
      state.phoneNumbers.deleteNumber(state.currentUser, numberId);
    },
    EDIT_NUMBER: (state, phoneNumber) => {
      state.phoneNumbers.editNumber(state.currentUser, phoneNumber.id, phoneNumber.number);
    }
  },
  actions: {
    ADD_USER: (context, user) => {
      context.commit("ADD_USER", user);
    },
    LOGIN: async (context, user) => {
      const userObj = await context.state.users.login(user);
      context.commit("LOGIN", userObj);
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
