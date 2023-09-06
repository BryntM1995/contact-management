<template>
  <div class="dropdown">
    <button class="btn btn-success dropdown-toggle rounded-circle" type="button" data-bs-toggle="dropdown"
      aria-expanded="false">
      <i class="bi bi-gear"></i>
    </button>
    <ul class="dropdown-menu dropdown-menu-dark">
      <li><button class="dropdown-item" type="button">{{ `Status : ${userStatus}` }} <i
            class="bi bi-wrench-adjustable-circle"></i></button></li>
      <li><button class="dropdown-item border-top" type="button">{{ `${currentUser.userName} ${currentUser.userLastName}`
      }}  <i class="bi bi-person-badge"></i></button></li>
      <li><button class="dropdown-item border-top" type="button" @click="toSignOut">Log out <i
            class="ms-2 bi bi-x-circle-fill"></i></button></li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from "vue-router";

const store = useStore()
const router = useRouter();
const currentUser = computed(() => {
  return store.getters.getUser;
})

const userStatus = computed(() => {
  const currentUser = store.getters.getUser;
  return currentUser.isUserLoggedIn ? 'Active' : 'Inactive'
})

function toSignOut() {
  store.commit('setUser', {})
  router.push({ name: 'login' })
}

</script>