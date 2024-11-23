<template>
    <div>
      <h2 class="text-center">Tạo bài viết mới</h2>
        <div>
          <label>Tiêu đề:</label>
          <input v-model="title" placeholder="Tiêu đề bài viết" type="text" />
        </div>
        <div>
          <label>Tác giả:</label>
          <input v-model="author" placeholder="Tên tác giả" type="text" />
        </div>
        <div>
          <label>Nội dung:</label>
          <textarea v-model="content" placeholder="Nội dung bài viết"></textarea>
        </div>
        <button @click="submitPost">Đăng bài</button>
    </div>
  </template>
  
  <script>
  export default {
      name:"Lab5Bai4",
  }
  </script>
  <script setup>
  import { ref } from "vue";
  
  // eslint-disable-next-line no-undef
  const emit = defineEmits(['add-post'])
  
  const title = ref('')
  const author = ref('')
  const content = ref('')
  
  function submitPost(){
      if(title.value && author.value && content.value){
          const newPost = {
              title: title.value,
              content: content.value,
              author:author.value
          }
  
          //gửi sự kiện "add-post" với dữ liệu của bài viết
          emit('add-post',newPost)
  
          //reset fields
          title.value=''
          content.value=''
          author.value=''
      }
  }
  </script>
  <style>
  input, textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>