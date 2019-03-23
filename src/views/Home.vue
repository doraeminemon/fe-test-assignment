<template lang='pug'>
  .home
    h2.title Open weather browser
    .container.mt-3
      .row.justify-content-md-center
        .col-md-4
          ul.list-group
            a.list-group-item.list-group-item-action(
              v-for='city in cities'
              @click='selectCity(city)'
              :key='city.id'
              :class = '{ active : selectedCity === city }'
              href='#'
            ) {{ city.name }}
        .col-md-8
          template(v-if='selectedCity')
            .d-flex.justify-content-center(v-if='isLoading')
              .spinner-border(role='status')
                span.sr-only Loading...
            p {{ focusedCityData }}
</template>

<script>
// @ is an alias to /src
/* eslint-disable comma-dangle */
/* eslint-disable no-return-assign */
import _ from 'lodash';

export default {
  name: 'home',
  components: {
  },
  created() {
    this.debouncedRequestWeather = _.debounce(this.requestWeather, 400);
  },
  watch: {
    selectedCity() {
      this.debouncedRequestWeather();
    },
  },
  methods: {
    selectCity(city) {
      this.selectedCity = city;
    },
    requestWeather() {
      this.isLoading = true;
      this.focusedCityData = '';
      const { name } = this.selectedCity;
      const url = `weather?q=${name}`;
      this.$http.get(url)
        .then(resp => this.focusedCityData = resp.data)
        .catch(err => console.error(err))
        .finally(() => this.isLoading = false);
    }
  },
  data() {
    return {
      cities: [
        { id: 1, name: 'Bangkok' },
        { id: 2, name: 'Bali' },
        { id: 3, name: 'Osaka' },
        { id: 4, name: 'Barcelona' },
        { id: 5, name: 'Hong Kong' },
        { id: 6, name: 'Milan' },
        { id: 7, name: 'Palma de Mallorca' },
        { id: 8, name: 'Pattaya' },
        { id: 9, name: 'Makkah' },
        { id: 10, name: 'Phuket' }
      ],
      selectedCity: null,
      isLoading: false,
      focusedCityData: null,
    };
  }
};
</script>
