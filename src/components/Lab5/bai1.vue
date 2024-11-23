<template>
    <div class="container">
        <div class="text-center align-middle p-2">
            <p class="p-1">{{ message }}</p>
            <button class="btn btn-success" @click="updateMessage">Thay đổi thông điệp</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Lab5Bai1",
}
</script>

<script setup>
import { ref } from 'vue';
const message = ref('Thông điệp ban đầu');
const updateMessage = () => {
    message.value = 'Thông điệp đã được thay đổi!';
};
</script>

<style scoped>
/* Căn giữa toàn bộ nội dung */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Nội dung cụ thể */
.text-center {
    background-color: white;
    width: 500px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Thêm bóng cho phần nội dung */
    border-radius: 10px;
}

p {
    color: rgb(246, 42, 42);
    font-size: 20px;
    font-weight: bold;
}
</style>
