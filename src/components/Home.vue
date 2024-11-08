<template>
  <div class="d-flex flex-column align-items-center">
    <h1 class="text-center">Home Page</h1>
    
    <div class="position-relative d-inline-block text-center my-3">
      <img src="../assets/hinh.png" class="img-fluid">
      <div class="position-absolute top-0 end-0 bg-dark text-white p-2 rounded">
        BAO LY.
      </div>
    </div>

    <div class="text-center my-3">
      <h2 class="w3-text-light-grey">Nguyễn Thị Bảo Ly</h2>
      <hr style="width:200px" class="w3-opacity mx-auto">
      <p style="color: black; font-size: larger;">
        Tổng hợp các trang bài lab của môn SOF308.
      </p>
    </div>

    <div class="row w-100">
      <div class="col-8">
        <!-- Left Column Content -->
      </div>
      <div class="col-4">
        <!-- Right Column Content -->
      </div>
    </div>

    <footer class="w-100 text-center p-3 mt-4" style="background-color: black;">
      <p style="color: white">
        <i class="bi bi-c-circle"></i> Copyright by Bao Ly
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>

</style>
