<template>
<div>
  <div>
    <img src="../assets/weather-icons/sunrise.png" alt="">
    <h1>Sunrise: {{this.currentAstro.astronomy.astro.sunrise}}</h1>
  </div>
  <div>
    <img src='../assets/weather-icons/sunset.png' alt="">
    <h1>Sunset: {{this.currentAstro.astronomy.astro.sunset}}</h1>
  </div>
  <div v-for="icon in moonIcons" :key="icon">
      <div v-if="currentAstro.astronomy.astro.moon_phase === icon.name" >
        <img :src="icon.image" :alt="icon.name">
        <h1>Moon Phase: {{icon.name}}</h1>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Astronomy",
  data() {
    return {
      currentAstro: '', 
      moonIcons: [
        {
          name: 'New',
          image: require('../assets/moon-icons/new.png'),
        },
        {
          name: 'Waxing Crescent',
          image: require('../assets/moon-icons/waxing-crescent.png'),
        },
        {
          name: 'First Quarter',
          image: require('../assets/moon-icons/first-quarter.png'),
        },
        {
          name: 'Waxing Gibbous',
          image: require('../assets/moon-icons/waxing-gibbous.png'),
        },
        {
          name: 'Full',
          image: require('../assets/moon-icons/full.png'),
        },
        {
          name: 'Waning Gibbous',
          image: require('../assets/moon-icons/waning-gibbous.png'),
        },
        {
          name: 'Last Quarter',
          image: require('../assets/moon-icons/third-quarter.png'),
        },
        {
          name: 'Waning Crescent',
          image: require('../assets/moon-icons/waning-crescent.png'),
        },
        
      ],
      sunIcons: [
        {
          name: 'sunrise',
          image: require('../assets/weather-icons/sunrise.png'),
        },
        {
          name: 'sunset',
          image: require('../assets/weather-icons/sunset.png'),
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
    const res = await fetch(`http://api.weatherapi.com/v1/astronomy.json?q=${lat},${lon}&key=e277c86a24ab4ea59c0170555210911`)
    const data = await res.json()
    this.currentAstro = data
  } catch (error) {
    console.log(error)
  }
},
  success: function(position) {
    const { latitude, longitude } = position.coords;
    this.fetchCurrent(latitude, longitude);
  },
  failure: function() {
    this.fetchCurrent(40.5733, -74.1152)
  }
  }
}

</script>

<style>

</style>