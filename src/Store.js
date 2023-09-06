import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    user: {},
    users: [
      {
        userName: "Bryant",
        userLastName: "Moreno",
        userPassword: "123",
        userEmail: "bryant-m@hotmail.com",
        isUserLoggedIn: true,
        userContacts: [],
        userTasks: [],
      },
    ],
  },
  mutations: {
    setUsers(state, user) {
      state.users.push(user);
      console.log(state.users)
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    signNewUser({ commit }, newUser) {
      commit("setUser", newUser);
    },
    setAllUsers({ commit }, newUser) {
      commit("setUsers", newUser);
    },
  },
  getters: {
    async getDefaultContacts() {
      try {
        const response = await axios.get("https://reqres.in/api/users?page=1");
        return response.data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    },
    getUser: (state) => {
      return state.user;
    },
    getUsers: (state) => {
      console.log(state.users);
      return state.users;
    },
  },
});

export default store;
