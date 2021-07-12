import axios from "axios";
import Swal from 'sweetalert2'
const task = {
    state:{
        task:[]
    },
    getters:
    {
        allTask(state)
        {
            return state.task;
        }  
    },
    mutations:
    {
        setTask(state,task)
        {
            state.task = task;
        },
        newTask(state,task)
        {
            state.task.unshift(task);
        },
        updateTask(state,updateTask)
        {
            const index = state.task.findIndex(task=>task.id == updateTask.id);
            if(index != -1)
            {
                state.task.splice(index,1,updateTask);
            }
        },
        removeTask(state,id)
        {
            state.task = state.task.filter(task=>task.id != id);
        }
    },
    actions:{
        async fetchTask({ commit })
        {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
                commit('setTask',response.data);
                console.log(response);
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                  });
            }
        },
        async filterTask({ commit },limit)
        {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
                commit('setTask',response.data);
                console.log(response);
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                  });
            }
        },
        async store({ commit },title)
        {
            try {
                const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{
                    title:title,
                    completed:false
                });
                commit('newTask',response.data);
                Swal.fire({
                    icon: 'success',
                    title: 'task added!',
                    showConfirmButton:false,
                    timerProgressBar:true,
                    timer:3000,
                    toast:true,
                    position:'top'
                  });
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                  });
            }
        },
        async updateTask({ commit },task)
        {
            try {
                const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`,{
                    id:task.id,
                    title:task.title,
                    completed:!task.completed
                });
                commit('updateTask',response.data);
                console.log(response);
                Swal.fire({
                    icon: 'success',
                    title: 'task updated!',
                    showConfirmButton:false,
                    timerProgressBar:true,
                    timer:3000,
                    toast:true,
                    position:'top'
                  });
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                  });
            }
        },
        async deleteTask({ commit },id)
        {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
                commit('removeTask',id);
                Swal.fire({
                    icon: 'warning',
                    title: 'task deleted!',
                    showConfirmButton:false,
                    timerProgressBar:true,
                    timer:3000,
                    toast:true,
                    position:'top'
                  });
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                  });
            }
        },
    }
}
export default task;