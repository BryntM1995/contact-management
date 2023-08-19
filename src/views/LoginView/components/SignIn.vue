<template>
    <form>
        <div class="mb-3 border-bottom border-2">
            <label class="pb-3 multi-colored fs-3 text fw-bold">Sign in <i class="bi bi-envelope-check"></i></label>
        </div>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-person-vcard"></i> First Name</label>
            <input v-model="firstName" type="text" class="form-control" placeholder="Ex: Robert" required>
        </div>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-person-vcard"></i> Last Name</label>
            <input v-model="lastName" type="text" class="form-control" placeholder="Ex: Gomez" required>
        </div>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-at"></i> Email address</label>
            <input v-model="userEmailField" type="email" class="form-control" aria-describedby="emailHelp"
                placeholder="Ex: Example@Vue.com" required>
        </div>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-fingerprint"></i> Password</label>
            <input v-model="passwordField" type="password" class="form-control" placeholder="Ex: Password123" required>
        </div>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-fingerprint"></i> Confirm Password</label>
            <input v-model="confirmationPasswordField" type="password" class="form-control" placeholder="Ex: Password123" required>
        </div>
        <button type="submit" class="btn btn-primary" @click="createAccount">Submit</button>
    </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore()
let firstName = ref('')
let lastName = ref('')
let passwordField = ref('')
let confirmationPasswordField = ref('')
let userEmailField = ref('')
let isLoggedIn = ref(false)

function createAccount() {
    const newUser = {
        userName: firstName.value,
        userLastName: lastName.value,
        userPassword: passwordField.value,
        userEmail: userEmailField.value,
        isUserLoggedIn: true,
        userContacts: [],
        userTasks: [],
    }
    store.commit('addNewUser', newUser)
    store.commit('setNewUser', newUser.userEmail)
    router.push({ name: 'contact' })
}


</script>

<style scoped>
.multi-colored {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(45deg, #ff0000, #1c20da, #f9ec19);
}

.form-control:focus {
    background-color: lightgray;
}

.form-label {
    color: #fff;
}
</style>