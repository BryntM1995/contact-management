<template>
    <AddButton></AddButton>
    <TaskList> </TaskList>
</template>

<script setup>
import TaskList from './components/TaskList.vue'
import AddButton from './components/AddButton'
import { defineComponent  } from 'vue'
defineComponent({
    components: {
        TaskList,
        AddButton
    },
})

</script>