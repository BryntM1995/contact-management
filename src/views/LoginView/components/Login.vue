<template>
    <div>
        <div class="mb-3 border-bottom border-2">
            <h2 class="multi-colored fs-3 text fw-bold pb-3 text-center">Log in <i class="bi bi-envelope-check"></i></h2>
        </div>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-envelope-at-fill"></i> Email address</label>
            <label v-if="!areCredentialsCorrect" class="form-label text-danger fs-6"> Email address is not registered or
                Password is incorrect.</label>
            <input @change="validate" v-model="email" type="email" class="form-control" aria-describedby="emailHelp"
                placeholder="Type your Email.." required>
        </div>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-fingerprint"></i> Password</label>
            <input @change="validate" v-model="password" type="password" class="form-control" id="exampleInputPassword1"
                placeholder="Type your Password.." required>
        </div>
        <button type="submit" class="btn btn-primary" @click="toValidateUser">Submit</button>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

let email = ref('')
let password = ref('')
let areCredentialsCorrect = ref(true)

function toLogInAnUser(user) {
    store.commit('setUser', user)
    router.push({ name: 'contact' })
}

function toValidateUser() {
    const users = store.getters.getUsers
    const user = users.find(x => x.userEmail === email.value.toLocaleLowerCase().trim() && x.userPassword === password.value)
    if (user) {
        toLogInAnUser(user)
        areCredentialsCorrect.value = true
    }
    else {
        areCredentialsCorrect.value = false
    }
}
</script>

<style scoped>
.multi-colored {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, #ff0000, #1c20da, #f9ec19, #1c20da);
}

.form-control:focus {
    background-color: lightgray;
}

.form-label {
    color: #fff;
}
</style>