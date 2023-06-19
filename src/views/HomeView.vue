<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";
import { useStore } from "../store/index.js";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const movies = (
  await axios.get("https://api.themoviedb.org/3/movie/popular", {
    params: {
      api_key: "fbb6ba03bbd1aaeb92c52f989ea8698d",
      region: "US",
      language: "en",
      include_adult: false,
    },
  })
).data;

store.movies = movies.results.map((movie) => {
  return {
    id: movie.id,
    poster: movie.poster_path,
  };
});
</script>

<template>
  <div class="all">
    <Header></Header>
    <button @click="router.push('/login')">Login</button>

    <Hero></Hero>

    <Footer></Footer>
  </div>
</template>

<style scoped>
.all{
  background-color: black;
  display: grid;
  justify-content: center;
}
button {
  cursor: pointer;
  border: 1;
  border-radius: 10px;
  font-weight: 600;
  margin: 0 10px;
  width: 150px;
  padding: 12px 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  transition: 0.5s;
}
</style>