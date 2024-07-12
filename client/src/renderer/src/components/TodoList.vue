<template>
  <el-row>
    <el-col :span="24" :offset="0" class="todo-list-container">
      <h1 class="todo-list-title">OussTodos</h1>
      <TodoForm :submitTodo="createTodo"></TodoForm>
      <el-table :data="todos" class="todo-table">
        <el-table-column prop="title" label="Title" width="350"></el-table-column>
        <el-table-column fixed="right" label="Operations" width="240">
          <template #default="scope">
            <el-space wrap>
              <el-switch v-model="scope.row.completed" @change="updateTodo(scope.row)" />
              <el-popconfirm
                confirm-button-text="Yes"
                cancel-button-text="No"
                icon="el-icon-info"
                title="Are you sure you want to delete this todo?"
                @confirm="deleteTodo(scope.row)"
                @cancel="cancelDelete"
              >
                <template #reference>
                  <el-button size="default" type="danger">Delete</el-button>
                </template>
              </el-popconfirm>
            </el-space>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import axios from 'axios';
import TodoForm from './TodoForm.vue';

interface Todo {
  id?: number | string;
  title: string;
  completed: boolean;
}

const todos = ref([]);

onMounted(async () => {
  await loadTodos();
});

const loadTodos = async () => {
  const { data } = await axios.get("http://localhost:8000/todos");
  todos.value = data;
};

const createTodo = async (todo: Todo) => {
  const { data } = await axios.post("http://localhost:8000/todos", {
    title: todo.title,
    completed: todo.completed
  });
  
  ElMessage({ message: "Todo created successfully", type: "success" });
  await loadTodos();
};

const updateTodo = async (todo: Todo) => {
  const { data } = await axios.patch(`http://localhost:8000/todos/${todo.id}`, {
    title: todo.title,
    completed: todo.completed
  });
  
  ElMessage({ message: "Todo updated successfully", type: "success" });
  await loadTodos();
};

const deleteTodo = async (todo: Todo) => {
  const { data } = await axios.delete(`http://localhost:8000/todos/${todo.id}`);
  
  ElMessage({ message: "Todo deleted successfully", type: "success" });
  await loadTodos();
};

const cancelDelete = () => {
  ElMessage({ message: "Delete cancelled", type: "info" });
};
</script>

<style scoped>
.todo-list-container {
  text-align: center;
}

.todo-list-title {
  font-family: monospace;
    font-size: 36px;
  font-weight: bold;
  color: #3366cc; /* Couleur bleue attrayante */
  text-align: center;
  margin-bottom: 20px;
}

.todo-table {
  margin-top: 20px;
}
</style>
