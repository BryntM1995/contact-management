<template>
    <div class="loginViewContainer pb-5">
        <div>
            <h1 class="text-light bg-transparent text-center fw-bolder pt-5"> Ready? Getting Started</h1>
        </div>
        <div class="container-fluid w-25 border border-primary p-5 border-4 rounded bg-trasparent mt-5">

            <LogIn v-if="!isNewAccount" />
            <SignIn v-if="isNewAccount" />
            <div class="mt-3 form-check">
                <label class="form-check-label text-light">New account?</label>
                <input v-model="isNewAccount" type="checkbox" class="form-check-input" id="exampleCheck1">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineComponent } from "vue";
import LogIn from './components/Login.vue'
import SignIn from './components/SignIn.vue'

defineComponent({
    components: {
        LogIn,
        SignIn
    }
})

let isNewAccount = ref(false);


</script>

<style scoped >
.loginViewContainer {
    background-repeat: round;
    background-attachment: fixed;
    background-size: cover;
    color: black;
    background-image: url('../../assets/Background.jpg');
}
</style>