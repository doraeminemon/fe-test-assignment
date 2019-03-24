<template lang="pug">
  NetworkableComponent(
    :url='`forecast?id=${id}`'
    :callback='resp => requestWeatherCallback(resp)'
  )
    template(v-slot:component)
      .text-left(v-if='data && get(data, `city.name`) && get(data, `list[0].weather[0].icon`)')
        h3
          | {{ data.city.name }}
          img(:src='getIconFromCode(data.list[0].weather[0].icon)')
        h4 {{ get(data, 'list[0].weather[0].description') }}
        p Feels like {{ get(data, 'list[0].main.temp') }}°C
        p {{ `${get(data, 'list[0].main.temp_min')} - ${get(data, 'list[0].main.temp_max')}` }}
        p {{ data }}
</template>
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
