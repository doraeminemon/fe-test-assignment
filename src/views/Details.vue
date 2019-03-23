<template lang="pug">
  .col-md-8.text-left
    template(v-if='selectedCity')
      .d-flex.justify-content-center(v-if='isLoading')
        .spinner-border(role='status')
          span.sr-only Loading...
      div(v-if='focusedCityData')
        h3 {{ focusedCityData.name }}
        p {{ focusedCityData }}
        img(:src='getIconFromCode(focusedCityData.weather[0].icon)')
    template(v-else)
      p Please select a city from the sidebar
</template>
