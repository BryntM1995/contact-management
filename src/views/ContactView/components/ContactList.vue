<template>
    <div class="container">
        <div class="row row-cols-3">
            <div class="col " v-for="person in apiData" :key="person.id">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="person.avatar"
                                class="img-fluid rounded-start border border-start-0 m-2 rounded-circle border border-4  border-primary-subtle"
                                alt="Avatar">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title text-truncate" :title="person.first_name"><i class="bi bi-person-vcard-fill"></i> {{ `${person.first_name}
                                                                    ${person.last_name}` }}</h5>
                                <p class="card-text text-truncate" :title="person.email"><i class="bi bi-envelope-fill"></i>{{ ` Email: ${person.email}` }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import defineProps from 'vue';

export default {
    props: {
        apiData: Array,
    },
}
</script>

<style>
.card {
    background-color: lightskyblue;
    border: ridge black 2px;
    min-width: 33%;
    transition: 0.8s;
}

.img-fluid {
    border: ridge lightseagreen 5px !important;

}

@media (max-width: 800px) {
    .card {
        height: 280px;
    }
}

.card:hover {
    background-color: rgb(102, 102, 243);
}</style>