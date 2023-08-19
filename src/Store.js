// store.js
import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      user:{
        userName:"",
        userLastName:"",
        userPassword:"",
        userEmail:"",
        isUserLoggedIn: false,
        userContacts: [],
        userTasks: [],
      },
      users:[],
    };
  },
  mutations: {
    setNewUser(state, data) {
      state.user = localStorage.getItem(data);
    },
    addNewUser(state, newUser) {
      state.users.push(newUser);
      localStorage.setItem(state.user.userEmail, JSON.stringify(newUser))
    },
    setApiContacts(state, apiData){
      apiData.data.forEach((element) =>{
        state.user.userContacts.push(element)
      })
    }
  },
  actions: {
    async fetchDataFromApi(context) {
      try {
        const response = await axios.get(
          "https://reqres.in/api/users?page=1"
        );
        this.state.user.isUserLoggedIn && context.commit("setApiContacts", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  getters: {
    getApiData(state) {
      return state.apiData;
    },
    getAllUsers(state) {
      return state.users;
    },
    getCurrentUser(state) {
      return state.user;
    },
  },
});

export default store;
