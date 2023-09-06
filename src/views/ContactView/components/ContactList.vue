<template>
<h1>hello</h1>
</template>

<script setup>

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