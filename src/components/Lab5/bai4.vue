<template>
  
  <div class="container">
    <Lab5Bai42 @add-post="addPost"/>

  <Lab5Bai41 :posts="posts"/>
  </div>
</template>

<script>
export default {
    name:"Lab5Bai4",
}
</script>
<script setup>
    import {ref} from 'vue'
    import Lab5Bai41 from './bai41.vue'
    import Lab5Bai42 from './bai42.vue'

    const posts = ref([])

    function addPost(post) {
  // Trigger event to add post (to be implemented in parent)
 posts.value.push(post)
}
</script>

<style scoped>
.container {
    background-color: whitesmoke;
    justify-content: center;
    align-items: center;
}
</style>