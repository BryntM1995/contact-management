<template>
<ContactList></ContactList>
</template>

<script>
import ContactList from './components/ContactList'
import { ref, onMounted } from 'vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    ContactList,
  },
  setup() {
    const apiData = ref([]);

    const fetchDataFromApi = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=1');
        console.log(response.data)
        apiData.value = response.data;
        localStorage.setItem('apiData', JSON.stringify(response.data));
      } catch (error) {
        // just in case the API has a requestLimit like MarvelApi Lol

        console.error('Error fetching data:', error);
        console.error('Used backup due to Error:', error);
        apiData.value = JSON.parse(localStorage.getItem('apiData'))
      }
    };

    onMounted(fetchDataFromApi);

    return {
      apiData
    };
  }
};
</script>