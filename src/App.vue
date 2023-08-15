<template>
  <nav class="navbar navbar-expand-lg bg-primary mb-3 border-bottom shadow-lg border-black ">
    <div class="container-fluid">
      <a class="navbar-brand border-end pe-2 text-light fw-bold ms-2" href="#">TaskAgenda</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{name:'contact'}" class="nav-link  border-end pe-2 text-light links fw-semibold" aria-current="page"
              href="#"><i class="bi bi-person-lines-fill"></i> ContactList</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'task'}" class="nav-link  border-end pe-2 text-light links fw-semibold"
              aria-current="page" href="#"><i class="bi bi-list-task"></i> TaskList</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="m-3 greetingContainer">
    <h3 class=""> <i class="bi bi-moon-stars"></i> My Day</h3>
    <h5 class="text-body-tertiary">{{ greetingMessage }}</h5>
  </div>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Footer from './components/Footer.vue';
import { ref, onMounted, computed } from 'vue';
import moment from 'moment';

export default {
  name: 'App',
  components: {
    Footer,
  },
  setup() {
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

    return {
      greetingMessage,
    };
  },
};
</script>

<style scoped>
.links {
  transition: 0.9s;
}

.links:hover {
  background-color: #fff;
  color: orangered !important;

}

body {
  background-color: rgb(243, 158, 158);
}

.greetingContainer {
  border-bottom: solid black 1px;
}
.router-link-active{
  background-color: blueviolet;
}
</style>