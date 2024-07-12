<template>
  <el-form :model="todoForm" inline class="form-inline" size="default">
    <el-form-item label="Title" prop="title">
      <!-- Ajout de l'événement keydown pour intercepter la touche Entrée -->
      <el-input v-model="todoForm.title" placeholder="Enter Todo..." @keydown.enter.prevent></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, defineProps } from 'vue';
import { ElMessage } from 'element-plus';

const props = defineProps(['submitTodo']);

const todoForm = reactive({
  title: ''
});

const submitForm = () => {
  if (todoForm.title.length > 3) {
    props.submitTodo({
      title: todoForm.title,
      completed: false
    });
    todoForm.title = '';
  } else {
    ElMessage({ message: "Todo title must be at least 4 characters long", type: "error" });
  }
};
</script>

<style scoped>
.form-inline {
  text-align: center;
  margin-top: 20px;
}
</style>
