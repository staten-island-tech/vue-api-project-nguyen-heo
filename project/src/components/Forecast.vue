<template>
  <h1>{{weather}}</h1>
</template>

<script>

let forecast = ''

async function test() {
  try {
    const res = await fetch('http://api.weatherapi.com/v1/current.json?q=11201&key=e277c86a24ab4ea59c0170555210911')
    const data = await res.json()
    forecast = data
  } catch (error) {
    console.log(error)
  }
}
test()

export default {
  name: "Forecast",
  data() {
    return {
      weather: forecast.current.condition.text
    }
  }
}
</script>

<style>

</style>