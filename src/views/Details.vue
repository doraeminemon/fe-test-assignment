<template lang="pug">
  NetworkableComponent(
    :url='`forecast?id=${id}`'
    :callback='resp => requestWeatherCallback(resp)'
  )
    template(v-slot:component)
      .text-left(v-if='data && get(data, `city.name`) && get(data, `list[0].weather[0].icon`)')
        .row
          img.rounded.col-6.scale-down(:src='getCityImage(data.city.name)' :alt='data.city.name')
          .container.col
            h3.d-inline
              | {{ data.city.name }}
              img(:src='getIconFromCode(data.list[0].weather[0].icon)')
            h4 {{ capitalize(get(data, 'list[0].weather[0].description')) }}
            p Feels like {{ get(data, 'list[0].main.temp') }}°C
            p
              | Low from {{ `${get(data, 'list[0].main.temp_min')}` }}
              | to {{ `${get(data, 'list[0].main.temp_max')}°C` }}
</template>
<style lang="scss" scoped>
  .scale-down {
    object-fit: scale-down;
    object-position: top;
  }
</style>
<script>
/* eslint-disable no-return-assign */
import _ from 'lodash';
import NetworkableComponent from '@/components/NetworkableComponent.vue';

export default {
  components: {
    NetworkableComponent,
  },
  created() {
    this.get = _.get;
    this.capitalize = _.capitalize;
  },
  mounted() {
    if (!this.id) {
      throw new Error('City id is missing!');
    }
    const id = Number(this.id);
    if (typeof id !== 'number' || Number.isNaN(id)) {
      throw new Error('CityID must be integer');
    }
  },
  methods: {
    getCityImage(name) {
      let image = null;
      const images = require.context('../assets/', false, /\.(jpg|png)$/);
      try {
        image = images(`./${name.toLowerCase().replace(/\s/g, '')}.jpg`);
      } catch {
        image = images('./logo.png');
      }
      return image;
    },
    getIconFromCode(code) {
      return `http://openweathermap.org/img/w/${code}.png`;
    },
    requestWeatherCallback(resp) {
      this.data = resp.data;
    },
  },
  data() {
    const id = _.get(this, '$route.params.id') || this.id;
    return {
      id,
      data: {},
    };
  },
};
</script>
