<template>
    <i v-if=task.completed class="bi bi-check-all" @click="updateTask(task)" style="font-size:22pt">
    </i>
    <i v-else class="bi bi-check" @click="updateTask(task)" style="font-size:22pt"></i>   
    <span class="spinner-border spinner-border-sm" v-if="loading"></span>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex'
export default {
    name:"Update",
    props:['task'],
    setup(){
        const store = useStore();
        const loading = ref(false)
        async function updateTask(task)
        {
            loading.value = true;
            await store.dispatch("updateTask",task)
            loading.value = false;
        }
        return {updateTask,loading}
    }
}
</script>

<style>

</style>