<template lang="pug">
  .container(v-if='!error').text-left
    .d-flex.justify-content-center(v-if='isLoading')
      .spinner-border(role='status')
        span.sr-only Loading...
    div(v-if='data && get(data, `city.name`) && get(data, `list[0].weather[0].icon`)')
      h3
        | {{ data.city.name }}
        img(:src='getIconFromCode(data.list[0].weather[0].icon)')
      h4 {{ get(data, 'list[0].weather[0].description') }}
      p Feels like {{ get(data, 'list[0].main.temp') }}°C
      p {{ `${get(data, 'list[0].main.temp_min')} - ${get(data, 'list[0].main.temp_max')}` }}
      p {{ data }}
  .container(v-else).text-left
    .alert.alert-danger(role='alert')
      | Something wrong happened : <br/>
      | {{ error }}
</template>
<script>
/* eslint-disable no-return-assign */
import _ from 'lodash';

export default {
  created() {
    this.get = _.get;
  },
  mounted() {
    if (!this.id) {
      this.error = 'City id is missing!';
      return;
    }
    this.requestWeather(this.id);
  },
  methods: {
    getIconFromCode(code) {
      return `http://openweathermap.org/img/w/${code}.png`;
    },
    requestWeather(id) {
      this.isLoading = true;
      const url = `forecast?id=${id}`;
      this.$http.get(url)
        .then(resp => this.data = resp.data)
        .catch(err => this.error = err)
        .finally(() => this.isLoading = false);
    },
  },
  data() {
    const id = _.get(this, '$route.params.id') || this.id;
    return {
      id,
      isLoading: false,
      data: {},
      error: null,
    };
  },
};
</script>
