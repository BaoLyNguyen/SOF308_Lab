<template>
    <div class="wrap2 row">
      <div class="col-6">
        <h3>Form Đăng Ký Thông Tin</h3>
        <form class="was-validated" action="">
          <div class="mb-3 text-start">
            <label for="uname" class="form-label">Họ và Tên:</label>
            <input type="text" class="form-control" id="uname" placeholder="Nhập họ và tên" required>
            <div class="valid-feedback">Hợp lệ</div>
            <div class="invalid-feedback">Vui lòng điền vào trường này</div>
          </div>
          <div class="mb-3 text-start">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Nhập email" required>
            <div class="valid-feedback">Hợp lệ</div>
            <div class="invalid-feedback">Vui lòng điền vào trường này</div>
          </div>
          <div class="mb-3 text-start">
            <label for="sdt" class="form-label">Số Điện Thoại:</label>
            <input type="text" class="form-control" id="sdt" placeholder="Nhập số điện thoại" required>
            <div class="valid-feedback">Hợp lệ</div>
            <div class="invalid-feedback">Vui lòng điền vào trường này</div>
          </div>
          <div class="mb-3 text-start">
            <label for="pwd" class="form-label">Mật Khẩu:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Nhập mật khẩu" required>
            <div class="valid-feedback">Hợp lệ</div>
            <div class="invalid-feedback">Vui lòng điền vào trường này</div>
          </div>
          <div class="mb-3 text-start">
            <label for="repwd" class="form-label">Xác Nhận Mật Khẩu:</label>
            <input type="password" class="form-control" id="repwd" placeholder="Xác nhận mật khẩu" required>
            <div class="valid-feedback">Hợp lệ</div>
            <div class="invalid-feedback">Vui lòng điền vào trường này</div>
          </div>
          <div class="mb-3 text-start">
            <label class="form-label">Giới Tính:</label>
            <div class="form-check form-check-inline">
              <input type="radio" class="form-check-input" name="gender" id="male" checked>
              <label class="form-check-label" for="male">Nam</label>
            </div>
            <div class="form-check form-check-inline">
              <input type="radio" class="form-check-input" name="gender" id="female">
              <label class="form-check-label" for="female">Nữ</label>
            </div>
          </div>
          <div class="mb-3 text-start">
            <label class="form-label">Ngôn Ngữ:</label>
            <select class="form-select" id="select" name="sellist">
              <option>Tiếng Việt</option>
              <option>Tiếng Anh</option>
            </select>
          </div>
          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="myCheck" required>
            <label class="form-check-label" for="myCheck">Tôi đồng ý với các điều khoản và điều kiện</label>
            <div class="valid-feedback">Hợp lệ</div>
            <div class="invalid-feedback">Tick vào hộp thoại để xác nhận</div>
          </div>
          <button type="submit" class="btn btn-primary custom-btn">Đăng Ký</button>
        </form>
      </div>
      <div class="col-6">
        <h3>Form Đăng Nhập</h3>
        <form class="was-validated  " action="">
          <div class="mb-3 text-start">
            <label for="login-email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="login-email" placeholder="Nhập email" required>
            <div class="valid-feedback">Hợp lệ</div>
            <div class="invalid-feedback">Vui lòng điền vào trường này</div>
          </div>
          <div class="mb-3 text-start">
            <label for="login-pwd" class="form-label">Mật Khẩu:</label>
            <input type="password" class="form-control" id="login-pwd" placeholder="Nhập mật khẩu" required>
            <div class="valid-feedback">Hợp lệ</div>
            <div class="invalid-feedback">Vui lòng điền vào trường này</div>
          </div>
          <div class="btn-group">
            <button type="submit" class="btn btn-primary">Đăng Nhập</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name: "Lab2Bai2"
  }
  </script>
  
  <style>
  .wrap2 {
  background-color: white;
}
form{
    padding: 10px;
    border-radius: 15px;
    border: 1px solid #dee2e6;
}
h3{
    font-weight: bold;
}
  </style>
  