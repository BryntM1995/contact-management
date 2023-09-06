<template>
  <AddButton></AddButton>
  <ContactList></ContactList>
</template>

<script>
import AddButton from './components/AddButton'
import ContactList from './components/ContactList'
import { useStore } from 'vuex';

export default {
  name: 'contactView',
  components: {
    ContactList,
    AddButton,
  },
  setup() {
    const store = useStore();
  }
};
</script>