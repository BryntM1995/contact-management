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
            <router-link to="/" class="nav-link active border-end pe-2 text-light links fw-semibold" aria-current="page"
              href="#"><i class="bi bi-person-lines-fill"></i> ContactList</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Task" class="nav-link active border-end pe-2 text-light links fw-semibold"
              aria-current="page" href="#"><i class="bi bi-list-task"></i> TaskList</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="m-3">
    <h3 class=""> <i class="bi bi-moon-stars"></i> My Day</h3>
    <h5 class="text-body-tertiary">{{ formattedDate }}</h5>
  </div>
  <router-view class="container"></router-view>
  <Footer></Footer>
</template>

<script>
import Footer from './components/Footer.vue';
import { ref, onMounted } from 'vue';
import moment from 'moment';

export default {
  name: 'App',
  components: {
    Footer,
  },
  setup() {
    const formattedDate = ref('');

    onMounted(() => {
      const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a'); // Obtén la fecha actual
      formattedDate.value = currentDate;
    });
    return {
      formattedDate,
    };
  },
};
</script>

<style>
.links {
  transition: 0.9s;
}

.links:hover {
  background-color: #fff;
  color: orangered !important;

}

body {
  background-color: rgb(243, 158, 158);
}</style>