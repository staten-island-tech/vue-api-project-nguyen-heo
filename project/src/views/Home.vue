<template>
  <div class="home">
    <Forecast/>
  </div>
</template>

<script>
// @ is an alias to /src
import Forecast from '@/components/Forecast'
export default {
  name: 'Home',
  components: {
    Forecast
  },
  data() {
    return {
      
    }
  }
}
</script>
