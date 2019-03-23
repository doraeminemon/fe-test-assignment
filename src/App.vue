<script>
/* eslint-disable no-trailing-spaces */
</script>
<template lang='pug'>
  #app
    #nav
      router-link(to='/Cities') Cities
      ||
      router-link(to='/')  Home
    router-view
    .d-flex.justify-content-center.m-3
      i.wi.wi-day-sunny
</template>

<style lang="scss">
@import './styles/weather-icons.min.css';
#app {
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    padding: 5px;
  }
}
</style>
