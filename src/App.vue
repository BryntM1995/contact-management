<template>
  <div v-if="loggedUser.isUserLoggedIn">
    <nav class="navbar navbar-expand-lg bg-dark mb-3 border-bottom shadow-lg border-black ">
      <div class="container-fluid">
        <a class="navbar-brand border-end pe-2 fs-2 fw-bold ms-2 multicolored" href="#">TK<i
            class=" ms-2 bi bi-journal-richtext"></i></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'contact' }" class="nav-link   pe-2 text-light links fw-semibold"
                aria-current="page" href="#"><i class="bi bi-person-lines-fill"></i> ContactList</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'task' }" class="nav-link   pe-2 text-light links fw-semibold" aria-current="page"
                href="#"><i class="bi bi-list-task"></i> TaskList</router-link>
            </li>
          </ul>
          <UserDropdown class="UserDropdown" />
        </div>
      </div>
    </nav>
    <div class="m-3 greetingContainer">
      <h3 class=""> <i class="bi bi-moon-stars"></i> My Day</h3>
      <h5 class="text-body-tertiary">{{ `Hello ${loggedUser.userName}! ${greetingMessage}` }}</h5>
    </div>
  </div>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup>
import Footer from './components/Footer.vue';
import UserDropdown from './components/UserDropdown.vue';
import { ref, onMounted, computed, defineComponent } from 'vue';
import moment from 'moment';
import { useStore } from 'vuex'


defineComponent({
  components: {
    Footer,
    UserDropdown
  },
})

const store = useStore()
const loggedUser = computed(() => store.getters.getUser)
const currentTime = ref(moment().format('HH:mm:ss'));


const greetingMessage = computed(() => {
  const currentHour = moment().hour();
  let greeting = '';

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Night';
  }

  return `${greeting}, It's ${currentTime.value}`;
});

onMounted(() => {
  setInterval(() => {
    currentTime.value = moment().format('MMMM Do YYYY, h:mm a');
  }, 1000);
});


</script>

<style scoped>
.links {
  transition: 0.9s;
}

* {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.links:hover {
  color: red !important;

}

body {
  background-color: rgb(231, 10, 10);
}


.greetingContainer {
  border-bottom: solid black 1px;
}

.router-link-active {
  color: #f9ec19 !important;
}

.UserDropdown {
  margin-left: 65%;
}

.multicolored {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #fff, #f9ec19, #fff);
}
</style>