<script>
/* eslint-disable no-trailing-spaces */
</script>
<template lang='pug'>
  #app
    #nav
      router-link(to='/Cities') Cities
      ||
      router-link(to='/')  Home
    div(v-if='!error')
      router-view
    div(v-else)
      .container.text-left
        .alert.alert-danger(role='alert')
          | Something went wrong <br/>
          | {{ error }} <br/>
          a.btn.btn-secondary.mt-1(href='#' @click='clearError()') Back to home
    .d-flex.justify-content-center.m-3
      i.wi.wi-day-sunny
</template>
<style lang="scss">
@import './styles/weather-icons.min.css';
#nav {
  text-align: center;
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
<script>
export default {
  methods: {
    clearError() {
      this.$router.replace('/');
      this.error = null;
    },
  },
  errorCaptured(err) {
    this.error = err;
  },
  data() {
    return {
      error: null,
    };
  },
};
</script>
