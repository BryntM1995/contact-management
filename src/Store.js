// store.js
import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      apiData: {},
      tasks: [],
    };
  },
  mutations: {
    setApiData(state, apiData) {
      state.apiData = apiData;
    },
    addUser(state, newUser) {
      state.apiData.push(newUser)
      localStorage.setItem("apiData", JSON.stringify(state.apiData));
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
  },
  actions: {
    async fetchDataFromApi(context) {
      try {
        let localApiData =  JSON.parse(localStorage.getItem("apiData"))
        if (localApiData) {
          context.commit("setApiData", localApiData);
          console.log(localApiData)
        }
        else{
          const response = await axios.get(
            "https://reqres.in/api/users?page=1"
          );
          context.commit("setApiData", response.data);
          localStorage.setItem("apiData", JSON.stringify(response.data));
        }
      } catch (error) {
        // just in case the API has a requestLimit like MarvelApi Lol

        console.error("Error fetching data:", error);
        console.error("Backup was used due to Error:", error);
        context.commit(
          "setApiData",
          JSON.parse(localStorage.getItem("apiData"))
        );
      }
    },
  },
  getters: {
    getApiData(state) {
      return state.apiData;
    },
    getAllTasks(state) {
      return state.tasks;
    },
  },
});

export default store;
