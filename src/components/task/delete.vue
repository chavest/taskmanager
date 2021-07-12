<template>
    <i class="bi bi-trash-fill" @click="deleteTask" style="font-size:22pt">
    </i> 
    <span class="spinner-border spinner-border-sm" v-if="loading"></span>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex'
export default {
    name:"Delete",
    props:['id'],
    setup(props){
        const store = useStore();
        const loading = ref(false)
        async function deleteTask()
        {
            loading.value = true;
            await store.dispatch("deleteTask",props.id)
            loading.value = false;
        }
        return {deleteTask,loading}
    }
}
</script>

<style>

</style>