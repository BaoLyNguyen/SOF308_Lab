<template>
    <div class="container">
      <div class="text-center p-2">
        <input v-model="userInput" placeholder="Nhập dữ liệu vào đây" />
        <!-- Thay đổi màu chữ dựa trên giá trị -->
        <p>Giá trị bạn nhập: <span :style="{ color: 'red', fontWeight: 'bold' }">{{ userInput }}</span></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Lab5Bai2",
  };
  </script>
  
  <script setup>
  import { ref } from 'vue';
  const userInput = ref('FPL');
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
}
  .text-center {
    background-color: white;
    width: 500px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  p {
    font-size: 18px;
    font-weight: bold;
  }
  </style>
  