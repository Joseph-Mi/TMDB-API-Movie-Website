<script setup>
import { useStore } from "../store/index.js";
import { ref } from "vue";
import Header from "../components/Header.vue";
import { useRouter } from "vue-router";

const movies = ref(false);
const store = useStore();
const router = useRouter();

const remove = (movie) => {
  const index = store.cart.indexOf(movie);
  store.removeFromCart(index);
};

movies.value = store.cart;
console.log(store.cart);
</script>

<template>
  <Header />
  <div class="all">
    <button class="backButton" @click="router.push('/purchase')">Back</button>
    <div class="buy">
      <div class="movieGrid" v-for="movie in store.cart">
        <h1 class="movieName">{{ movie.title }}</h1>
        <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
        <button @click="remove(movie)">Remove</button>
      </div>
    </div>

    <!-- add remove button -->
  </div>
</template>

<style scoped>
* {
  background-color: black;
  color: white;
  
}
.buy {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.movieName {
  width: 18vw;
}
img {
  height: 32vw;
  width: 18vw;
  margin: 3vw
}
.movieGrid {
  display: grid;
}
button {
  width: 8vw;
  height: 1.5vw;
  border: 20px;
  background-color: #5c5c5c;
  cursor: pointer;
  margin-bottom: 15vh;
}
.backButton{
  border: 1;
  border-radius: 10px;
  font-weight: 600;
  margin: 0 10px;
  width: 150px;
  height: 50px;
  padding: 12px 0;
  box-shadow: 0 0 20px rgba(214, 214, 214, 0.7);
  transition: 0.5s;
}
</style>
