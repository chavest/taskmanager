<template>
  <div class="row mb-4">
      <div class="col-md-3">
      <h2>Filter</h2>
      <select v-model="limit" class="form-control" @change="filterTask">
          <option value="10" selected>10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
           <option value="200">500</option>
      </select>
  </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex'
export default {
    name:"Filter",
    setup()
    {
        const store = useStore();
        const limit = ref();
        function filterTask()
        {
            store.dispatch('filterTask',limit.value);
        }
        return {filterTask,limit}
    }
}
</script>

<style>

</style>