<template>
<div>
  <h1 class="location">{{this.currentWeather.location.name}}</h1>
  <h1 class="today">Today's Forecast</h1>
  <div v-for="icon in icons" :key="icon">
    <div v-if="icon.name === currentWeather.current.condition.text">
      <img v-if="currentWeather.current.is_day === 1" :src="icon.dayImage" alt="">
      <img v-else :src="icon.nightImage" alt="">
    </div>
  </div>
  <h2 class="message">{{this.messages[Math.floor(Math.random() * messages.length)]}}</h2>
  <h1 class="current-temp">{{this.currentWeather.current.temp_f}}°</h1>
  <h1 class="feels-like">Feels like {{this.currentWeather.current.feelslike_f}}° F</h1>
  <h1 class="rain">{{this.currentWeather.current.precip_in}} inches of rain today</h1>
<h1 class="next-days">3-day Forecast</h1>
<div class="three-day-forecast">
  <div v-for="day in this.forecast.forecast.forecastday" :key="day">
    <div v-for="icon in icons" :key="icon">
      <div v-if="icon.name === currentWeather.current.condition.text">
        <img class="forecast-img" :src="icon.dayImage" alt="">
      </div>
    </div>
    <h1 class="date">{{day.date}}</h1>
    <h1 class="min">Minimum temperature: {{day.day.mintemp_f}}°</h1>
    <h1 class="min">Maximum temperature: {{day.day.maxtemp_f}}°</h1>
</div>
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
      ],
      messages: [
        "You look like you would have nine toes.",
        "Who else thinks they faked the moon landing?",
        "You smell nice.",
        "Never stop being you!",
        "You look like a victim of natural selection.",
        "It's not a good day because you look like shit today.",
        "I heard the cold burns off fat, lucky you.",
        "Enjoy the cold weather, shitbag!",
        "You look like a victim.",
        "The Earth is flat. Trust me bro.",
        "You're the Staten Island of your friend group.",
        "You're so full of shit you need a laxative to talk.",
        "I take a shot of vodka everytime I have to look at you.",
        "I did NOT know they made idiots this fat!",
        "You look like you wouldn't be allowed within 30 feet of a school.",
        "Take some time to breathe. Slow down. Appreciate and love yourself for who YOU are.",
        "I don't think they bullied you enough in middle school.",
        "It's okay to make mistakes. Everyone does. No one can blame you.",
        "Don't compare yourself to anyone else. Just focus on being the best version of yourself.",
        "Each day comes bearing its gifts. Untie the ribbon.",
        "Try to be a rainbow in someone else's cloud.",
        "The greatest mistake you can make is to be continually fearing that you'll make one.",
        "Shoot for the ground because then you'll never miss!",
        "I feel like you ate crayons as a kid."
      ],
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
background: linear-gradient(180deg, rgba(157,110,255,1) 0%, rgba(241,111,230,1) 35%, rgba(255,164,0,1) 100%);
background-repeat: round;

}

img {
  width: 30%;
  margin: -50px 0px;
}

.location, .today, .next-days {
  margin-top: 50px;
  font-size: 27px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #2c3e50;
  font-weight: bold;
}

.message {
  font-size: 25px;
  color: #2c3e50;
  font-weight: bold;
}

.current-temp {
  font-size: 25px;
  margin-top: 50px;
  letter-spacing: 1px;
  color: #2c3e50;
  font-weight: bold;
  margin: 10px;
}

.feels-like, .rain {
  margin-top: 50px;
  font-size: 25px;
  letter-spacing: 1px;
  color: #2c3e50;
  font-weight: bold;
  margin: 10px;
}

.next-days {
  padding-top: 70px;
}

.three-day-forecast {
  display: flex;
  padding: 40px;
}

.forecast-img {
  width: 50%;
}

.max, .min {
margin-top: 50px;
font-size: 20px;
letter-spacing: 1px;
font-weight: bold;
margin: 10px;
color: #2c3e50; 
}

.date {
margin-top: 50px;
font-size: 23px;
letter-spacing: 1px;
font-weight: bold;
margin: 10px;
color: #2c3e50; 
}
</style>