<template lang='pug'>
  .home
    h2.title.text-center
      i.wi.wi-day-sunny.mr-2
      | Open weather browser
    .container.justify-content-md-center.mt-3
      NetworkableComponent(
        :url='requestWeathersUrl()'
        :callback='requestWeathersCallback'
      )
        template(v-slot:component)
          ul.list-group
            a.list-group-item.list-group-item-action(
              v-for='city in cities'
              @click='selectCity(city)'
              :key='city.id'
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
import { mapState } from 'vuex';
import NetworkableComponent from '@/components/NetworkableComponent.vue';

export default {
  name: 'home',
  components: {
    NetworkableComponent,
  },
  created() {
    this.get = _.get;
  },
  computed: {
    ...mapState('Cities', ['cities']),
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
    requestWeathersUrl() {
      if (!this.cities) throw new Error('Missing cities');
      const citiesIds = this.cities.map(item => item.id).join(',');
      return `group?id=${citiesIds}`;
    },
    requestWeathersCallback(resp) {
      const mergeCities = _.values(
        _.merge(
          _.keyBy(resp.data.list, 'id'),
          _.keyBy(this.cities, 'id')
        )
      );
      this.$store.dispatch('Cities/setCities', { cities: mergeCities });
    },
  },
  data() {
    return {};
  },
};
</script>
