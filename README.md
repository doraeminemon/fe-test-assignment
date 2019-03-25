# Open weather browser

A 2 page front end using Vue to demonstration these features :
- Basic SPA development with Vue and Bootstrap
- Request from remote using Axios and data management using VueX
- Higher level component to abstract stateful views
- Basic unit test

Things are still missing :
- Optimization like CriticalCSS for fast rendering, etc.
- Server side renderer
- Prerendering

## Project setup
```
yarn install
```

- Get API key from OpenWeatherMap
- Set it as VUE_APP_OPEN_WEATHER_API_KEY within a .env file ( .env.local to prevent commit by mistake )

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
