// store.js
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      apiData:{},
    };
  },
  mutations: {
    setApiData(state, apiData) {
        state.apiData = apiData;
    },
  },
  actions: {
     async fetchDataFromApi(context) {
        try {
          const response = await axios.get('https://reqres.in/api/users?page=1');
          context.commit('setApiData', response.data);
          console.log(response.data)
          localStorage.setItem('apiData', JSON.stringify(response.data));
        } catch (error) {
          // just in case the API has a requestLimit like MarvelApi Lol
  
          console.error('Error fetching data:', error);
          console.error('Backup was used due to Error:', error);
          context.commit('setApiData', JSON.parse(localStorage.getItem('apiData')))
        }
    },
  },
  getters: {
    getApiData(state) {
        return state.apiData;
    },
  },
});

export default store;
