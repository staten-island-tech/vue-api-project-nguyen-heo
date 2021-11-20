<template>
  <h1>{{this.weather.current.condition.text}}</h1>
</template>

<script>

export default {
  name: "Forecast",
  data() {
    return {
      weather: '',
      icons: {
        
      }
    } 
},
created: function(){
  this.fetchData();
},
  methods: {
    fetchData: async function() {
  try {
    const res = await fetch('http://api.weatherapi.com/v1/current.json?q=11201&key=e277c86a24ab4ea59c0170555210911')
    const data = await res.json()
    this.weather = data
    console.log(this.weather)
  } catch (error) {
    console.log(error)
  }
}
  }
}
</script>

<style>

</style>