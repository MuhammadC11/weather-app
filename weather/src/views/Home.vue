<template>
  <div>
    <img class="bgimg" src="../assets/forest.jpg" alt="" />
    <Title />
    <SearchBar />
  </div>
</template>

<script setup>
import Title from "../components/Title.vue";
import SearchBar from "../components/SearchBar.vue";
</script>

<style lang="scss" scoped>
.bgimg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}
</style>
