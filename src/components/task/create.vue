<template>
  <div class="row mb-4 mt-5">
      <div class="col-md-12">
      <h2>Create task</h2>
      <form @submit.prevent="saveTask" class="row">
          <div class="col-md-6">
              <input type="text" class="form-control" v-model="title">
              <div class="form-text text-danger">
                  {{ message_error }}
              </div>
          </div>
          <div class="col-md-auto">
              <button type="submit" value="create" class="btn btn-dark">
                  create
                  <span v-if="loading" class="spinner-border spinner-border-sm"></span>
              </button>
          </div>
      </form>
  </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    name:"create",
    setup()
    {
        const title = ref("");
        const message_error = ref("");
        const store = useStore();
        const loading = ref(false);
        async function saveTask()
        {
            if(title.value == "")
            {
                message_error.value = "title is required!";
            }
            else
            {                
                message_error.value = "";
                loading.value = true;
                await store.dispatch('store',title.value)
                title.value = "";
                loading.value = false;
            }
        }
        return {saveTask,title,message_error,loading}
    }
}
</script>

<style>

</style>