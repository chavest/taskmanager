<template>
  <div class="container mt-3">
      <div class="text-center" v-if="loading">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="row g-3" v-else>
          <h1>Task managment</h1>
            <Create />
            <hr>  
            <Filter />
          <div class="col-md-4" v-for="(task,index) in tasks" :key="index">
              <div class="card">
                  <div class="card-body d-flex justify-content-between align-items-center" :class="{ 'bg-light':task.completed }">
                      <div>
                          <del v-if="task.completed">{{ task.title }}</del>
                          <div v-else>{{ task.title }}</div>
                      </div>
                      <div class="d-flex align-items-center">
                          <Update :task=task></Update>
                          <Delete :id="task.id"></Delete>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import Filter from "../components/task/Filter.vue";
import Create from "../components/task/create.vue";
import Update from "../components/task/update.vue";
import Delete from "../components/task/delete.vue";
export default {
    name:"task",
    components:{
        Filter,
        Create,
        Update,
        Delete
    },
    setup(){
        const store = useStore();
        const tasks = computed(()=>store.getters.allTask)
        const loading = ref(false);
        async function fetchTask()
        {
            loading.value = true;
            await store.dispatch('fetchTask');
            loading.value = false;
        }
        fetchTask()
        return { tasks,loading }
    }
}
</script>

<style>

</style>