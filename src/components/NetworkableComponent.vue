<template lang="pug">
  .container(v-if='error')
    .alert.alert-danger(role='alert').text-left
      | Something wrong happened : <br/>
      | {{ error }}
  .container(v-else-if='isLoading')
    .d-flex.justify-content-center(v-if='isLoading')
      .spinner-border(role='status')
        span.sr-only Loading...
  .container(v-else)
    slot(name='component')
</template>
<script>
/* eslint-disable no-return-assign */
export default {
  props: {
    url: {
      type: String,
      required: true,
      default() { return ''; },
    },
    callback: {
      type: Function,
      required: true,
      default() { return () => {}; },
    },
  },
  name: 'NetworkableComponent',
  mounted() {
    this.isLoading = true;
    this.$http.get(this.url)
      .then(resp => this.callback(resp))
      .catch(err => this.error = err)
      .finally(() => this.isLoading = false);
  },
  data() {
    return {
      error: null,
      isLoading: false,
    };
  },
};
</script>
