<template>
  <AddButton></AddButton>
  <ContactList :apiData="apiData.data"></ContactList>
</template>

<script>
import AddButton from './components/AddButton'
import ContactList from './components/ContactList'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex';

export default {
  name: 'contactView',
  components: {
    ContactList,
    AddButton,
  },
  setup() {
    const store = useStore();

    const apiData = computed(() => store.getters.getApiData);

    const fetchDataFromApi = () => {
      store.dispatch('fetchDataFromApi');
    };

    onMounted(fetchDataFromApi)
    return {
      apiData,
    };
  }
};
</script>