<template>
  <nav class="navbar navbar-expand-sm" style="padding-top: 0">
    <div class="container">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">
                <i class="bi bi-house-door-fill"></i> Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/lab1">
                <i class="fa-solid fa-list"></i> Lab 1
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              <i class="fa-solid fa-user"></i> Lab 2
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/lab2/bai1">Bài 1</a></li>
              <li><a class="dropdown-item" href="/lab2/bai2">Bài 2</a></li>
              <li><a class="dropdown-item" href="/lab2/bai3">Bài 3</a></li>
              <li><a class="dropdown-item" href="/lab2/bai4">Bài 4</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              <i class="fa-solid fa-user"></i> Lab 3
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/lab3/bai1">Bài 1</a></li>
              <li><a class="dropdown-item" href="/lab3/bai2">Bài 2</a></li>
              <li><a class="dropdown-item" href="/lab3/bai3">Bài 3</a></li>
              <li><a class="dropdown-item" href="/lab3/bai4">Bài 4</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              <i class="fa-solid fa-user"></i> Lab 5
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/lab5/bai1">Bài 1</a></li>
              <li><a class="dropdown-item" href="/lab5/bai2">Bài 2</a></li>
              <li><a class="dropdown-item" href="/lab5/bai3">Bài 3</a></li>
              <li><a class="dropdown-item" href="/lab5/bai4">Bài 4</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              <i class="fa-solid fa-user"></i> Lab 6
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/lab6/bai1">Bài 1</a></li>
              <li><a class="dropdown-item" href="/lab6/bai2">Bài 2</a></li>
              <li><a class="dropdown-item" href="/lab6/bai3">Bài 3</a></li>
              <li><a class="dropdown-item" href="/lab6/bai4">Bài 4</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              <i class="fa-solid fa-user"></i> Lab 7
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/lab7/bai1">Bài 1</a></li>
              <li><a class="dropdown-item" href="/lab7/bai2">Bài 2</a></li>
              <li><a class="dropdown-item" href="/lab7/bai3">Bài 3</a></li>
              <li><a class="dropdown-item" href="/lab7/bai4">Bài 4</a></li>
            </ul>
          </li>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
    .container .nav-link{
        color: white;
        font-size: 16pt;
    }
</style>
