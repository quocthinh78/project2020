<template>
  <div id="app">

      <nav id="experience" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link :to="{ name: 'home',}">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about', }">About</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contact', }">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'service', }">Service</router-link>
          </li>
          <router-link :to="{ name: 'user', params: { userId: 123 , id:1234} }">User</router-link>
          <li class="nav-item">
            <router-link to="/users">DashBoard</router-link>
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
<style>
  #app {
    padding-bottom: 700px;
  }
</style>

