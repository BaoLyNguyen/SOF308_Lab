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
              <a class="nav-link active" href="/lab3/bai3"
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
    <div align="center" class="container row p-0" style="width: 1320px">
      <div
        id="carouselExampleIndicators"
        class="carousel slide p-0"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../assets/banner1.jpg"
              class="d-block"
              alt="..."
              width="1320px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/banner2.jpg"
              class="d-block"
              alt="..."
              width="1320px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/banner3.jpg"
              class="d-block"
              alt="..."
              width="1320px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <section class="row" style="background-color: white">
      <aside class="col-4">
        <div>
          <h3 class="text-info mt-2">Chuyên mục</h3>
          <ul class="list-group">
            <li
              class="list-group-item bg-info d-flex justify-content-between align-items-center"
            >
              <a class="nav-link" href="#">Chế độ tập</a>
              <span class="badge bg-primary rounded-pill">12</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
              <span class="badge bg-primary rounded-pill">15</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <a class="nav-link" href="#">Cảm nang cuộc sống</a>
              <span class="badge bg-primary rounded-pill">99</span>
            </li>
          </ul>
          <div class="container mt-3 nhom4">
            <div
              style="
                background-color: #f3f3f3;
                width: 415px;
                margin-left: -12px;
                margin-top: -8px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
              "
            >
              <h3 class="text-info mt-2 pt-2 ps-2">Bài viết nổi bật</h3>
              <hr
                style="color: rgba(0, 0, 0, 0.777); width: 415px"
                class="mb-0"
              />
            </div>
            <div class="nhom5">
              <div class="p-2 d-flex flex-row align-items-start nhom">
                <img
                  class="rounded-circle"
                  src="../../assets/spinach_300x300.jpg"
                  alt="Spinach"
                  style="width: 50px; height: 50px; margin-right: 10px"
                />
                <div>
                  <h6><strong>Lợi ích khi ăn rau mỗi ngày</strong></h6>
                  <div>
                    <p>
                      Tiêu thụ rau xanh hàng ngày sẽ giúp tăng cường thị lực,
                      kiểm soát cân nặng, ngăn ngừa ung thư...
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-2 d-flex flex-row align-items-start nhom">
                <img
                  class="rounded-circle"
                  src="../../assets/orange_300x300.jpg"
                  alt="Orange"
                  style="width: 50px; height: 50px; margin-right: 10px"
                />
                <div>
                  <h6><strong>9 tác dụng tuyệt vời của quả cam</strong></h6>
                  <div>
                    <p>
                      Cam tự hào về khả năng chống lão hóa mạnh mẽ nhờ hàm lượng
                      chất chống oxy hóa cao...
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-2 d-flex flex-row align-items-start nhom">
                <img
                  class="rounded-circle"
                  src="../../assets/sesameoil_300x300.jpg"
                  alt="Sesame Oil"
                  style="width: 50px; height: 50px; margin-right: 10px"
                />
                <div>
                  <h6><strong>10 công dụng bất ngờ từ dầu dừa</strong></h6>
                  <div>
                    <p>
                      Dầu dừa như một loại kem dưỡng ẩm tự nhiên cho cơ thể,
                      giúp việc sản xuất collagen trong các tế bào...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <article class="col-8">
        <h3 class="text-info mt-2">Tất cả bài viết</h3>
        <div>
          <div class="row p-2">
            <div class="col-6 b">
              <div class="p-2 flex-row align-items-start nhom2">
                <div
                  style="
                    background-color: #f3f3f3;
                    width: 407px;
                    margin-left: -8px;
                    margin-top: -16px;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                  "
                >
                  <h4 class="mt-2 pt-2 ps-2">
                    <a href="/lab3/bai4" class="text-decoration-none text-dark"
                      >Phương pháp tập Pilates giúp phục hồi chấn thương cột
                      sống</a
                    >
                    <i class="bi bi-chat-left-fill"></i>16
                  </h4>
                  <hr
                    style="color: rgba(0, 0, 0, 0.777); width: 407px"
                    class="mb-0"
                  />
                </div>
                <img
                  class="img-fluid pt-2"
                  src="../../assets/tap-piltes.jpg"
                  alt="Pilates"
                />
                <p>
                  Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo
                  dai, các bài tập Pilates còn có khả năng trị đau lưng, là giải
                  pháp hữu hiệu để phục hồi chấn thương cột sống.
                </p>
              </div>
              <div class="mt-2 p-2 flex-row align-items-start nhom2">
                <div
                  style="
                    background-color: #f3f3f3;
                    width: 407px;
                    margin-left: -8px;
                    margin-top: -16px;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                  "
                >
                  <h4 class="mt-2 pt-2 ps-2">
                    Tập Pilates có thể cải thiện sức khỏe tim mạch của bạn
                    <i class="bi bi-chat-left-fill"></i>5
                  </h4>
                  <hr
                    style="color: rgba(0, 0, 0, 0.777); width: 407px"
                    class="mb-0"
                  />
                </div>
                <img
                  class="img-fluid pt-2"
                  src="../../assets/tim-mach.jpg"
                  alt="Pilates"
                />
                <p>
                  Tập Pilates không chỉ giúp bạn có một cơ thể khỏe mạnh và linh
                  hoạt mà còn có nhiều lợi ích cho sức khỏe tim mạch. Bài viết
                  này sẽ tìm hiểu sâu hơn về tác động tích cực của việc tập
                  Pilates đối với sức khỏe tim mạch...
                </p>
              </div>
            </div>
            <div class="col-6 b">
              <div class="p-2 flex-row align-items-start nhom2">
                <div
                  style="
                    background-color: #f3f3f3;
                    width: 407px;
                    margin-left: -8px;
                    margin-top: -16px;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                  "
                >
                  <h4 class="mt-2 pt-2 ps-2">
                    Đây là những gì 1 giờ Tập Pilates có thể làm cho cơ thể của
                    bạn
                    <i class="bi bi-chat-left-fill"></i>8
                  </h4>
                  <hr
                    style="color: rgba(0, 0, 0, 0.777); width: 407px"
                    class="mb-0"
                  />
                </div>
                <img
                  class="img-fluid pt-2"
                  src="../../assets/tap-pilates1.jpg"
                  alt="Pilates"
                />
                <p>
                  Được thiết kế để xây dựng cơ bắp săn chắc, khỏe mạnh hơn bài
                  tập này đã trở thành một cái tên quen thuộc nhờ có rất nhiều
                  người nổi tiếng theo dõi.<br /><br />
                </p>
              </div>
              <div class="mt-2 p-2 flex-row align-items-start nhom2">
                <div
                  style="
                    background-color: #f3f3f3;
                    width: 407px;
                    margin-left: -8px;
                    margin-top: -16px;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                  "
                >
                  <h4 class="mt-2 pt-2 ps-2">
                    EATCLEAN: Nên Và Không Nên Ăn Những Thực Phẩm Nào?
                    <i class="bi bi-chat-left-fill"></i>3
                  </h4>
                  <hr
                    style="color: rgba(0, 0, 0, 0.777); width: 407px"
                    class="mb-0"
                  />
                </div>
                <img
                  class="img-fluid pt-2"
                  src="../../assets/eat-clean.png"
                  alt="Pilates"
                />
                <p>
                  Chúng ta luôn chủ động lựa chọn thực phẩm sạch và duy trì lối
                  sống lành mạnh. Vậy chế độ ăn Eat Clean nên và không nên ăn
                  những gì trong thực đơn hằng ngày để cân bằng tháp dinh dưỡng
                  cho cơ thể? <br /><br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Phân trang -->
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true"><i class="bi bi-arrow-left"></i></span>
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true"
                  ><i class="bi bi-arrow-right"></i
                ></span>
              </a>
            </li>
          </ul>
        </nav>
      </article>
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
  name: "Lab3Bai3",
};
</script>

<style>
.navbar-nav .nav-link.active {
  color: #28a745; /* Bootstrap's green color */
  border-bottom: 3px solid #28a745;
}

/* Optional: Change icon color for active item */
.navbar-nav .nav-link.active i {
  color: #28a745;
  border-bottom: 2px solid #28a745;
}
.nhom4 {
  border: 1px solid rgba(0, 0, 0, 0.175);
  border-radius: 10px;
}
.nhom5 {
  background-color: white;
  width: 415px;
  margin-left: -12px;
}
.nhom2 h4 a:hover {
  color: brown !important;
  text-decoration: underline !important;
}
</style>
