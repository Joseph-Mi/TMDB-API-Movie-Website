<script setup>
import axios from "axios";
import { useStore } from "../store";

const store = useStore();
const props = defineProps(["id"]);

const movie = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: "fbb6ba03bbd1aaeb92c52f989ea8698d",
      region: "US",
      language: "en",
      include_adult: false,
    },
  })
).data;
</script>

<template>
  <Teleport to="body">
    <div class="outer-container" @click.self="$emit('toggleModal')">
      <div class="inner-container">
        <button @click="$emit('toggleModal')">x</button>
        <div v-if="movie">
          <div class="image">
            <img
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            />
          </div>
          <div class="title">
            <h1>{{ movie.title }}</h1>
          </div>

          <div class="info">
            <h2>{{ movie.release_date }}</h2>
            <h2>{{ movie.overview }}</h2>
            <button
              class="button"
              @click="store.addToCart(movie.poster_path, movie.title)"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.title {
  position: relative;
  left: 30%;
  bottom: 35vh
}
.info {
  width: 60%;
  position: relative;
  font-size: small;
  display: flex;
  flex-direction: column;
  left: 30%;
  bottom: 38vh;
}
.outer-container {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000071;
  z-index: 5;
}

.outer-container .inner-container {
  background-color: #000000;
  color: white;
  border-radius: 20px;
  width: clamp(280px, 100%, 900px);
  height: 50vh;
  position: relative;
}

button {
  background: #ffffffa2;
  font-weight: bold;
  border-radius: 50%;
}

.outer-container .inner-container .icon {
  font-size: 1.25rem;
  color: white;
}

img {
  width: 200px;
}

button {
  cursor: pointer;
}

button:hover {
  background-color: #444444;
}
</style>