<template>
  <div class="search_container">
    <form @submit.prevent="callApi()">
      <h2 class="search_header">Input a City To See Results</h2>
      <div class="inputs">
        <input
          class="search_box"
          type="text"
          v-model="cityInput"
          placeholder="Search for a city"
          aria-label="Insert a city to search for."
        />
        <button type="submit" class="submit-btn" aria-label="Submit.">
          <fa icon="search" class="search-btn" />
        </button>
        <button class="clear-btn" @click="clearApi()">Clear</button>
      </div>
      <div class="error" v-if="error">Error: {{ error }}</div>
    </form>
  </div>

  <WeatherCard
    :weatherData="wData"
    :city="cityInput"
    v-show="data_loaded"
    :clouds="clouds_url"
    :loaded="data_loaded"
    :temper="temperature"
    :feels="feels"
    :max="max"
    :min="min"
  />
</template>

<script>
import WeatherCard from "./WeatherCard.vue";
import axios from "axios";
const apiKey = "yNLQgjrUkJ8AgQsoSbiUNg==9X2ieMDwXwQL1kaz";
export default {
  name: "SearchBar",
  data() {
    return {
      cityInput: "",
      wData: [],
      clouds_url: "",
      data_loaded: false,
      temperature: null,
      feels: null,
      max: null,
      min: null,
    };
  },
  methods: {
    callApi() {
      axios
        .get(`https://api.api-ninjas.com/v1/weather?city=${this.cityInput}`, {
          headers: {
            "X-Api-Key": apiKey,
          },
        })
        .then((response) => {
          this.wData = response.data;
          console.log(this.wData);
          let clouds_url = "";

          if (this.wData.cloud_pct < 25) {
            clouds_url =
              "https://res.cloudinary.com/lowballd/image/upload/v1679530120/DEV/sunny-svgrepo-com_xx5xpn.svg";
          } else if (this.wData.cloud_pct < 50) {
            clouds_url =
              "https://res.cloudinary.com/lowballd/image/upload/v1679531053/DEV/partly-sunny-outline-svgrepo-com_kc0qso.svg";
          } else if (this.wData.cloud_pct <= 100) {
            clouds_url =
              "https://res.cloudinary.com/lowballd/image/upload/v1679531413/DEV/cloudy-svgrepo-com_krf9mz.svg";
          }
          if (this.wData == []) {
            this.data_loaded = false;
          } else {
            this.data_loaded = true;
          }
          var ftemp = (this.wData.temp * 9) / 5 + 32;
          var ffeel = (this.wData.feels_like * 9) / 5 + 32;
          var fmax = (this.wData.max_temp * 9) / 5 + 32;
          var fmin = (this.wData.min_temp * 9) / 5 + 32;
          this.max = Math.round(fmax);
          this.min = Math.round(fmin);
          this.feels = Math.round(ffeel);
          this.temperature = Math.round(ftemp);
          console.log(this.temperature);
          console.log(this.feels);
          console.log(this.max);
          console.log(this.min);
        });
    },

    clearApi() {
      this.wData = [];
      this.cityInput = "";
      this.data_loaded = false;
    },
  },

  components: { WeatherCard },
};

// created() {
//   // POST request using axios with set headers
//   const article = { title: "Vue POST Request Example" };
//   const headers = {
//     "Authorization": "Bearer my-token",
//     "My-Custom-Header": "foobar"
//   };
//   axios.post("https://reqres.in/api/articles", article, { headers })
//     .then(response => this.articleId = response.data.id);
// }
</script>

<style lang="scss" scoped>
.search_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.search_header {
  color: #ffffff;
  background-color: #0000005b;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  width: 100%;
  margin-bottom: 0;
}
.inputs {
  text-align: center;
  width: 50rem;
  height: 5rem;
  border: none;
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #0000006a;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:focus {
    background-color: rgba(0, 0, 0, 0.602);
  }
}
.search_box {
  text-align: center;
  width: 50rem;
  height: 5rem;
  border: none;
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #0000006a;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:focus {
    background-color: rgba(0, 0, 0, 0.602);
  }
}
.inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.search-btn {
  color: #ffffff;
  font-size: 2rem;
  border-radius: 1rem;
  margin-left: 0.5rem;
  padding: 1rem;

  transition: all 0.3s ease-in-out;
  background-color: rgba(39, 38, 38, 0.979);
  margin: auto;
}
.submit-btn {
  // create a hover effect that makes the button a little bit bigger and darker
  background-color: rgba(39, 38, 38, 0.979);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.submit-btn:hover {
  // create a hover effect that makes the button a little bit bigger and darker
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}
.clear-btn {
  font-size: 1.5rem;
  border-radius: 1rem;
  margin-left: 0.5rem;
  padding: 1rem;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  padding: 1.2rem;
  font-weight: 700;
  transition: transform 200ms, background 200ms;
}
.clear-btn:hover {
  // create a hover effect that makes the button a little bit bigger and darker

  transform: translateY(-2px);
}
.clear-btn:focus-visible {
  outline: 1px solid #000;
  outline-offset: 1px;
}

.item {
  display: flex;
  align-items: center;
  height: 5rem;
  width: 100vw;
  background-color: transparent;

  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.478);
  }
  p {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    width: 100%;
  }
}
</style>
