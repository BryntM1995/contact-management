<template>
    <AddButton></AddButton>
    <TaskList> </TaskList>
</template>

<script>
    import TaskList from './components/TaskList.vue'
    import AddButton from './components/AddButton'
    export default {
        name:'task',
        components:{
            TaskList,
            AddButton
        },
    }
</script>