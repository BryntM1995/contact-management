<template>
    <form>
        <div class="mb-3 border-bottom border-2">
            <label class="multi-colored fs-3 text fw-bold pb-3">Login</label>
        </div>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-envelope-at-fill"></i> Email address</label>
            <input @change="validate" v-model="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Type your Email.." required>
        </div>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-fingerprint"></i> Password</label>
            <input @change="validate" v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Type your Password.."
                required>
        </div>

        <button :disabled="user" type="submit" class="btn btn-primary" @click="">Submit</button>
    </form>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";


const store = useStore();
let email = ref('')
let password = ref('')
let user = ref({})

const users = store.getters['getAllUsers'];
function validate() {
    user.value = users.find(x => x.email === email.value & x.password === password)
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