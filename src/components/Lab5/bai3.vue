<template>
<div class="container">
    <div class="div-custom p-1 col-sm-8">
<h1>Thông tin cá nhân</h1>
<form>
<div class="mb-3">
<label>Họ và Tên:</label>
<input v-model="userInfo.name" type="text" class="form-control"
placeholder="Nhập họ và tên" />
</div>
<div class="mb-3">
<label>Tuổi:</label>
<input v-model="userInfo.age" type="number" class="form-control"
placeholder="Nhập tuổi" />
</div>
<div class="mb-3">
<label>Email:</label>
<input v-model="userInfo.email" type="email" class="form-control"
placeholder="Nhập email" />
</div>
</form>
<!-- Hiển thị thông tin ngay sau khi nhập -->
<div class="info-display mt-4 p-3 custom text-white rounded">
<h2>Thông tin đã nhập:</h2>
<p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
<p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
<p><strong>Email:</strong> {{ userInfo.email }}</p>
</div>
</div>
</div>
</template>

<script>
export default {
    name:"Lab5Bai3"
}
</script>
<script setup>
import { reactive } from 'vue';
// Khởi tạo đối tượng thông tin người dùng sử dụng reactive để tạo reactivity
const userInfo = reactive({
name: '',
age: null,
email: ''
});
</script>
<style scoped>
.container {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

form{
    background-color:thistle;
}

.custom{
    background-color: rgb(239, 193, 239);
}

h2{
    color: purple;
}

</style>