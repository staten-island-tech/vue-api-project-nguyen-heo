<template>
<div>
<h1>{{this.currentWeather.current.condition.text}}</h1>
<h1>{{this.currentWeather.current.temp_f}}</h1>
<h1>Feels like: {{this.currentWeather.current.feelslike_f}}</h1>
<h1>{{this.currentWeather.current.precip_in}} inches of rain</h1>
<h1>{{this.forecast.forecast.forecastday[4]}}</h1>
</div>
</template>

<script>

export default {
  name: "Forecast",
  data() {
    return {
      currentWeather: '',
      forecast: '',
      icons: {
        
      }
    } 
},
created: function(){
  this.fetchCurrent();
  this.fetchForecast();
},
  methods: {
    fetchCurrent: async function() {
  try {
    const res = await fetch('http://api.weatherapi.com/v1/current.json?q=11201&key=e277c86a24ab4ea59c0170555210911')
    const data = await res.json()
    this.currentWeather = data
  } catch (error) {
    console.log(error)
  }
},
  fetchForecast: async function() {
    try {
    const res = await fetch('http://api.weatherapi.com/v1/forecast.json?q=11201&key=e277c86a24ab4ea59c0170555210911&days=7')
    const data = await res.json()
    this.forecast = data
    } catch (error) {
      console.log(error)
    }
  }
  }
}
</script>

<style>

</style>