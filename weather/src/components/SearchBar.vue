<template>
  <div class="search_container">
    <form @submit.prevent="fetchData()">
      <h2 class="search_header">Enter A City To Check The Weather There</h2>
      <div class="inputs">
        <input
          class="search_box"
          type="text"
          v-model="cityInput"
          placeholder="Search for a city"
          aria-label="Insert a city to search for."
        />
        <button
          type="submit"
          class="bingbong"
          aria-label="Submit your birthday."
        >
          <fa icon="search" class="search-btn" />
        </button>
      </div>
    </form>

    <div class="item fruit" v-for="fruit in filteredList()" :key="fruit">
      <p>{{ fruit }}</p>
    </div>
    <div class="item error" v-if="input && !filteredList().length">
      <p>No results found!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let input = ref("");
const fruits = ["apple", "banana", "orange"];
function filteredList() {
  return fruits.filter((fruit) =>
    fruit.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond&family=Raleway:wght@500&family=Source+Sans+Pro&display=swap");
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
}
.search_box {
  text-align: center;
  width: 50rem;
  height: 5rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #0000005b;
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
  font-size: 4rem;
  border-radius: 10rem;
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
