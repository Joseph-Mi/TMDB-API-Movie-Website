<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
  <div class="view">
    <title>MovieMania</title>
    <h2>Purchases</h2>
  </div>
  <div class="buy">
    <div v-for="movie in store.cart">
      <h1>{{ movie.title }}</h1>
    </div>
  </div>
</template>

<style scoped>
* {
  background-color: black;
  color: white;
}

.buy {
  display: grid;
  position: relative;
  grid-template-columns: repeat(5, 1fr);
}

img {
  height: 250px;
}
</style>
