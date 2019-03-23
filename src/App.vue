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
</template>

<style lang="scss">
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
