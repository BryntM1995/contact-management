<template>
    <div>
        <div class="mb-3 border-bottom border-2">
            <h2 class="pb-3 multi-colored fs-3 text fw-bold text-center">Sign in <i class="bi bi-envelope-check"></i></h2>
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
            <label v-if="!isEmailValidated" class="form-label text-danger">Please, introduce a valid email.</label>
            <label v-if="thisEmailexits" class="form-label text-danger">This email was already used</label>
        </div>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-fingerprint"></i> Password</label>
            <input v-model="passwordField" type="password" class="form-control" placeholder="Ex: Password123" required>
            <label v-if="!isPasswordValidated" class="form-label text-danger">Password must have more than 5 digits</label>
        </div>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-fingerprint"></i> Confirm Password</label>
            <input v-model="confirmationPasswordField" type="password" class="form-control" placeholder="Ex: Password123"
                required>
            <label v-if="!isPasswordValidated" class="form-label text-danger">Password must have more than 5 digits</label>

        </div>
        <button type="submit" class="btn btn-primary" :disabled="!isPasswordConfirmed"
            @click="createAccount">Submit</button>
        <label v-if="allFieldsData" class="form-label text-danger">Please fill all fields.</label>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

let firstName = ref('');
let lastName = ref('');
let passwordField = ref('');
let confirmationPasswordField = ref('');
let userEmailField = ref('');
let allFieldsData = ref(false)
let isEmailValidated = ref(true)
let isPasswordValidated = ref(true)
let thisEmailexits = ref(false)

const isPasswordConfirmed = computed(() => {
    return passwordField.value === confirmationPasswordField.value
        && passwordField.value !== ''
        && confirmationPasswordField.value !== ''
});

function createAccount() {
    areAllfieldsFilled()
    toValidateEmail()
    toValidatePassword()
    toValidateEmailExistance()
    !allFieldsData.value && isEmailValidated.value && isPasswordValidated.value && !thisEmailexits.value && submitData()
}
function submitData() {
    const newUser = {
        userName: firstName.value.toLocaleLowerCase().trim(),
        userLastName: lastName.value.toLocaleLowerCase().trim(),
        userPassword: passwordField.value,
        userEmail: userEmailField.value.toLocaleLowerCase().trim(),
        isUserLoggedIn: true,
        userContacts: [],
        userTasks: [],
    };
    store.dispatch('signNewUser', newUser);
    store.dispatch('setAllUsers', newUser);
    router.push({ name: 'contact' });
}

function areAllfieldsFilled() {
    const formData = [firstName.value,
    lastName.value, passwordField.value,
    confirmationPasswordField.value,
    userEmailField.value]

    allFieldsData.value = formData.includes('');
}
function toValidateEmail() {
    isEmailValidated.value = userEmailField.value.includes('@')
}
function toValidateEmailExistance() {
  const allUsers =  store.getters.getUsers;
  const user = allUsers.find(x => x.userEmail === userEmailField.value)
  console.log(user)
  thisEmailexits.value = user.userEmail === userEmailField.value;
}
function toValidatePassword() {
    isPasswordValidated.value = passwordField.value.length > 5
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