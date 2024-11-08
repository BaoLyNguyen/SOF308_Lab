<template>
  <nav class="row p-2" style="background-color: #f0f7ff; padding-top: 0">
    <nav class="navbar navbar-expand-sm" style="padding-top: 0">
      <div class="container">
        <a class="navbar-brand" href="bai1.html">
          <img
            src="../../assets/logo-energy-pilates.png"
            alt="Logo"
            style="width: 150px"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="/lab3/bai3"
                ><i class="fa-solid fa-list"></i> Bài viết</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa-solid fa-film"></i> Video</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa-solid fa-circle-info"></i> Giới thiệu</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fa-solid fa-calendar-days"></i> Sự kiện</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i class="fa-solid fa-user"></i> Tài khoản
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                <li>
                  <a class="dropdown-item" href="#">Đăng ký thành viên</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav d-flex">
            <li class="nav-item"><a class="nav-link">Tiếng Việt</a></li>
            <li class="nav-item"><a class="nav-link">Tiếng Anh</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </nav>
  <div class="container">
    <section class="row " style="background-color: white;">
      <div class="col-8 mt-4">
        <h1 class="text-center text-info" style="font-size: 35px !important; ">Phương pháp tập Pilates giúp phục hồi chấn thương cột
          sống</h1>
          <img class=" w-100" src="../../assets/tap-pilates1.jpg" alt="">
          <p>Tập Pilates có thể vẫn còn khá xa lạ với người Việt, nhưng tại các nước phương Tây thì đây chính là phương pháp tập thể dục giúp duy trì vóc dáng, tăng cường ý chí và cải thiện sự linh hoạt, dẻo dai cho người tập. Đặc biệt, các bài tập Pilates còn có khả năng tăng cường phổi, là giải pháp hữu hiệu để phục hồi chấn thương cột sống. Sau đây hãy cùng tìm hiểu các phương pháp tập luyện này giúp phục hồi chấn thương cột sống nhanh chóng nhé!</p>
    <h4><strong>Pilates giúp phục hồi chấn thương cột sống nhanh chóng</strong></h4>
    <p>Một trong những căn bệnh ngày càng phổ biến, đặc biệt là dân văn phòng, đó là đau lưng, thoát vị đĩa đệm. Tuy nhiên, điều trị không đúng cách có thể dẫn đến nhiều biến chứng nguy hiểm, bao gồm: Ví dụ, điều trị bằng laser không đúng cách hoặc tập yoga không đúng cách có thể khiến bệnh nhân nằm liệt giường.</p>
    <img class="w-100" src="../../assets/tap-piltes.jpg" alt="">
    <h4><strong>Phương pháp tập Pilates Cat Cow</strong></h4>
    <p>Các bước thực hiện:</p>
        <ul>
            <li>Bắt đầu với tư thế 4 điểm: Vai và cổ tay của bạn phải thẳng hàng và vuông góc với thảm, lưng của bạn phải bằng phẳng và xương chậu của bạn phải căn đôi.</li>
            <li>Hít vào, vòng lưng, nâng cằm lên, mở rộng ngực.</li>
            <li>Thở ra, cong xương cụt, nâng cong lưng và đưa cằm về gần khoảng ngực.</li>
            <li>Lặp đi lặp lại động tác từ 5-7 lần.</li>
        </ul>
        <h4><strong>Lời kết</strong></h4>
        <p>Trên đây là phương pháp tập Pilates giúp phục hồi chấn thương cột sống nhanh chóng. Để đạt được kết quả tập luyện như mong muốn, bạn cần duy trì chế độ tập luyện đều đặn, thực hiện đúng động tác, kết hợp cùng chế độ ăn uống khoa học.</p>
      </div>
      <div class="col-4 mt-4">
        
        <h5><strong>Bình luận bài viết tại đây</strong></h5>
        <form class="form">
            <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Nhập bình luận của bạn"></textarea>
            </div>
            <button type="submit" class="btn btn-success">Gửi bình luận</button>
        </form>
        <h5><strong>Danh sách các bình luận</strong></h5>
        <ul class="">
            <li><strong>Bình An:</strong> Bài viết rất hữu ích</li>
            <li><strong>Bình An:</strong> Cảm ơn những chia sẻ bổ ích</li>
        </ul>
      </div>
    </section>
    <footer class="row p-3 text-center" style="background-color: black">
      <p style="color: white">
        <i class="bi bi-c-circle"></i> Copyright by FPT Polytechnic
      </p>
    </footer>
  </div>
</template>

<script>
export default {
    name:"Lab3Bai4"
}
</script>

<style>
.form{
  border: 0;
}
</style>