<template>
    <div class="container mt-2">
      <h1 class="text-center p-1">Kiến thức sức khỏe cộng đồng</h1>
      <div class="row">
        <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
          <div class="card">
            <img :src="item.image" class="img-fluid" alt="Hình ảnh" />
            <div class="card-body">
              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-text">{{ item.content }}</p>
              <div class="btn-group mx-auto">
                <button class="btn btn-info text-align">Xem chi tiết</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script>
export default {
    name:"Lab6Bai3",
}
</script>
<script setup>
// Import hình ảnh từ thư mục assets
import img1 from '../../assets/orange_300x300.jpg';
import img2 from '../../assets/sesameoil_300x300.jpg';
import img3 from '../../assets/spinach_300x300.jpg';
const items = ([
{ title: '8 loại rau củ quả giàu canxi',
content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi...', image: img1},
{ title: 'Các loại gia vị tốt cho sức khỏe',
content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa hoặc các loại gia vị quen thuộc khác. Với một lượng nhỏ các món ăn sẽ dễ hấp dẫn hơn...',image: img2 },
{ title: '9 loại đậu bổ dưỡng nên dùng nhiều',
content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim...', image:img3 },
]);
</script>
<style scoped>
.container{
    background-color: rgb(243, 243, 243);;
}
</style>