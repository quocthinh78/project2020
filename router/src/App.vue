<template>
  <div id="app">
      <nav id="experience" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active mr-5">
            <router-link :to="{ name: 'login',}">Đăng nhập</router-link>
          </li>
          <li class="nav-item active">
            <router-link :to="{ name: 'register'}">Đăng kí</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view class="view one"></router-view>  
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>

