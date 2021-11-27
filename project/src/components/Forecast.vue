<template>
<div>
  <h1>{{this.currentWeather.location.name}}</h1>
  <div v-for="icon in icons" :key="icon">
    <div v-if="icon.name === currentWeather.current.condition.text">
      <img v-if="currentWeather.current.is_day === 1" :src="icon.dayImage" alt="">
      <img v-else :src="icon.nightImage" alt="">
    </div>
  </div>
  <h1>{{this.currentWeather.current.temp_f}}</h1>
  <h1>Feels like: {{this.currentWeather.current.feelslike_f}}</h1>
  <h1>{{this.currentWeather.current.precip_in}} inches of rain</h1>
  <div v-for="day in this.forecast.forecast.forecastday" :key="day">
    <div v-for="icon in icons" :key="icon">
      <div v-if="icon.name === currentWeather.current.condition.text">
        <img :src="icon.dayImage" alt="">
      </div>
    </div>
    <h1>{{day.date}}</h1>
    <h1>mintemp: {{day.day.mintemp_f}}</h1>
    <h1>maxtemp: {{day.day.maxtemp_f}}</h1>
  </div>
</div>
</template>

<script>

export default {
  name: "Forecast",
  data() {
    return {
      currentWeather: '', 
      forecast: '',
      icons: [
        {
          name: 'Partly cloudy',
          dayImage: require('../assets/weather-icons/sun-cloud.png'),
          nightImage: require('../assets/weather-icons/moon-cloud.png')
        },
        {
          name: 'Cloudy',
          dayImage: require('../assets/weather-icons/cloud.png'),
          nightImage: require('../assets/weather-icons/cloud.png')
        },
        {
          name: 'Sunny',
          dayImage: require('../assets/weather-icons/sun.png'),
          nightImage: require('../assets/weather-icons/sun.png')
        },
        {
          name: 'Overcast',
          dayImage: require('../assets/weather-icons/cloud.png'),
          nightImage: require('../assets/weather-icons/cloud.png')
        },
        {
          name: 'Clear',
          dayImage: require('../assets/weather-icons/sun.png'),
          nightImage: require('../assets/weather-icons/moon.png')
        },
        {
          name: 'Light snow',
          dayImage: require('../assets/weather-icons/snow.png'),
          nightImage: require('../assets/weather-icons/snow.png')
        },
        {
          name: 'Patchy rain possible',
          dayImage: require('../assets/weather-icons/rain-cloud.png'),
          nightImage: require('../assets/weather-icons/rain-cloud.png')
        },
        
      ]
    } 
},
created: function(){
  window.navigator.geolocation.getCurrentPosition(this.success, this.failure);
},
  methods: {
    fetchCurrent: async function(lat, lon) {
  try {
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?q=${lat},${lon}&key=e277c86a24ab4ea59c0170555210911`)
    const data = await res.json()
    this.currentWeather = data
  } catch (error) {
    console.log(error)
  }
},
  fetchForecast: async function(lat, lon) {
    try {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?q=${lat},${lon}&key=e277c86a24ab4ea59c0170555210911&days=3`)
    const data = await res.json()
    this.forecast = data
    } catch (error) {
      console.log(error)
    }
  },
  success: function(position) {
    const { latitude, longitude } = position.coords;
    this.fetchCurrent(latitude, longitude);
    this.fetchForecast(latitude, longitude);
  },
  failure: function() {
    this.fetchCurrent(40.5733, -74.1152)
    this.fetchForecast(40.5733, -74.1152)
  }
  }
}
</script>

<style>

html {
  background-color: burlywood;
}

img {
  width: 50%;
}

</style>