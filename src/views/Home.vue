<template lang='pug'>
  .home
    h2.title
      i.wi.wi-day-sunny.mr-2
      | Open weather browser
    .container.justify-content-md-center.mt-3
      ul.list-group
        a.list-group-item.list-group-item-action(
          v-for='city in cities'
          @click='selectCity(city)'
          :key='city.id'
          :class = '{ active : selectedCity === city }'
          href='#'
        )
          .row.text-left
            .col-5
              b {{ city.name }}
            .col {{ get(city, 'weather[0].description') || 'Not yet loaded' }}
            .col.text-right
              | {{ readableTemp(get(city, 'main.temp_min')) }} -
              | {{ readableTemp(get(city, 'main.temp_max')) }} °C
</template>

<script>
// @ is an alias to /src
/* eslint-disable comma-dangle */
/* eslint-disable no-return-assign */
import _ from 'lodash';
import cities from '@/store/cities.module';

export default {
  name: 'home',
  components: {
  },
  created() {
    this.get = _.get;
  },
  mounted() {
    this.requestWeathers();
  },
  methods: {
    readableTemp(strTemp) {
      const number = Number(strTemp);
      if (typeof number !== 'number' || Number.isNaN(number)) return strTemp;
      return Math.round(number * 10) / 10;
    },
    selectCity(city) {
      this.$router.push({ path: `/details/${city.id}` });
    },
    requestWeathers() {
      if (!this.cities) return;
      this.isLoading = true;
      const citiesIds = cities.map(item => item.id).join(',');
      const url = `group?id=${citiesIds}`;
      this.$http.get(url)
        .then((resp) => {
          const mergeCities = _.values(
            _.merge(
              _.keyBy(resp.data.list, 'id'),
              _.keyBy(this.cities, 'id')
            )
          );
          this.cities = mergeCities;
        })
        .finally(() => this.isLoading = false);
    }
  },
  data() {
    return {
      cities,
      selectedCity: null,
      isLoading: false,
      focusedCityData: null,
    };
  }
};
</script>
