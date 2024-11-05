<template>
  <div class="wrap">
    <h2 class="text-center">BẢNG THÀNH PHẦN DINH DƯỠNG</h2>
  <table class="table table-center text-center table-hover">
      <thead>
          <tr>
            <th rowspan="2">Thành Phần</th>
            <th colspan="2">Giá Trị</th>
          </tr>
          <tr>
            <th>Khối Lượng</th>
            <th>% DV*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Calories</td>
            <td>200 kcal</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Chất Béo</td>
            <td>9 g</td>
            <td>14%</td>
          </tr>
          <tr>
            <td>Chất Béo Bão Hòa</td>
            <td>4 g</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Chất Đạm</td>
            <td>8 g</td>
            <td>16%</td>
          </tr>
          <tr>
            <td>Chất Xơ</td>
            <td>5 g</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Đường</td>
            <td>12 g</td>
            <td>-</td>
          </tr>
          <tr>
            <td rowspan="2">Vitamin</td>
            <td>Vitamin C</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Vitamin D</td>
            <td>10%</td>
          </tr>
        </tbody>
  </table>
  </div>
  
</template>

<script>
export default {
    name:"Lab2Bai1"
}
</script>

<style>
.wrap {
  background-color: white;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2{
  color: red;
}
tr,td, thead tr th{
  border: 1px solid #dee2e6;
}
thead tr th{
  background-color: #FFC107 !important;
  text-align: center;
  vertical-align: middle;
}
tbody tr td{
  text-align: justify;
}


</style>