<template>
  <nav class="row p-2" style="background-color: #F0F7FF; padding-top: 0;">
                <nav class="navbar navbar-expand-sm" style="padding-top: 0;">
                    <div class="container">
                        <a class="navbar-brand" href="bai1.html">
                            <img src="../../assets/logo-energy-pilates.png" alt="Logo" style="width: 150px;">
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item"><a class="nav-link" href="/lab3/bai3"><i class="fa-solid fa-list"></i> Bài viết</a></li>
                                <li class="nav-item"><a class="nav-link" href="#"><i class="fa-solid fa-film"></i> Video</a></li>
                                <li class="nav-item"><a class="nav-link" href="#"><i class="fa-solid fa-circle-info"></i> Giới thiệu</a></li>
                                <li class="nav-item"><a class="nav-link" href="#"><i class="fa-solid fa-calendar-days"></i> Sự kiện</a></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                        <i class="fa-solid fa-user"></i> Tài khoản
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                                        <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                                        <li><a class="dropdown-item" href="#">Đăng ký thành viên</a></li>
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
            <div align="center" class="container">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="../../assets/banner1.jpg" class="d-block" alt="..." width="1320px">
                        </div>
                        <div class="carousel-item">
                        <img src="../../assets/banner2.jpg" class="d-block" alt="..." width="1320px">
                        </div>
                        <div class="carousel-item">
                        <img src="../../assets/banner3.jpg" class="d-block" alt="..." width="1320px">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
</template>

<script>
export default {
    name:"Lab3Bai1"
}
</script>

<style>
.carousel-control-prev {
  right: -100px;
}
.carousel-control-next {
     
    }
</style>