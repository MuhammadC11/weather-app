<template>
  <div class="card_container">
    <h2 class="cityName">{{ city }}</h2>
    <!-- create a div that uses v show when there is a value for cities -->
    <img :src="clouds" alt="clouds" class="cloud_img" />
    <h2 class="current_temperature">{{ weatherData.temp }} ºC</h2>

    <p class="temperature">Feels Like: {{ weatherData.feels_like }} ºC</p>
    <p class="temperature">
      H:{{ weatherData.max_temp }} ºC/ L: {{ weatherData.min_temp }}
    </p>

    <!-- weatherData.temp, weatherData.min_temp, weatherData.max_temp, weatherData.feels_like, weatherData.humidity -->
  </div>
</template>

<script>
export default {
  props: ["weatherData", "city", "temper", "clouds", "loaded"],
  data() {
    return {
      faranheit: this.weatherData.temp,
    };
  },

  methods: {
    convertTemp() {
      var faranheit = (this.weatherData.temp * 9) / 5 + 32;
      this.faranheit = faranheit;
      console.log(this.faranheit);
    },
  },

  created() {
    this.convertTemp();
  },
};
</script>

<style lang="scss" scoped>
.card_container {
  display: flex;
  flex-direction: column;
  background-color: #0000005b;
  width: 50%;
  margin: auto;
  margin-top: 2rem;
  border-radius: 1rem;
}
.cityName {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  width: 100%;
  text-decoration: underline;
  margin-bottom: 0;
}
.temperature {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  width: 100%;
  margin: 0;
}
.current_temperature {
  color: #ffffff;
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  width: 100%;
  margin: 0;
}
.cloud_img {
  width: 10rem;
  height: 10rem;
  margin: auto;
  background-color: white;
  border-radius: 0.5rem;
}
</style>
