<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";
import { useStore } from "../store/index.js";
import { useRouter } from "vue-router";

const router = useRouter();
const showModal = ref(false);
const selectedRecordId = ref(0);
const store = useStore();

const toggleModal = (id) => {
  showModal.value = !showModal.value;
  selectedRecordId.value = id;
};
</script>

<template>
  <div class="title">
    <h1>MovieMania</h1>
    <div class="cart">
      <button @click="router.push('/cart')">Cart</button>
    </div>
    <div v-if="store.movies" class="tiles">
      <div v-for="movie in store.movies" class="tile">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`"
          @click="toggleModal(movie.id)"
        />
      </div>
    </div>
  </div>
  <Modal v-if="showModal" :id="selectedRecordId" @toggleModal="toggleModal()" />
</template>

<style scoped>
.title {
  position: relative;
  text-align: center;
  font-size: 25px;
  background-color: black;
  color: white;
}

.cart {
  display: flex;
  justify-content: center;
  height: 50px;

  background-color: rgb(0, 0, 0);
  padding: 7px;
}

button {
  cursor: pointer;
  border: 1;
  border-radius: 10px;
  font-weight: 600;
  margin: 0 10px;
  width: 150px;
  padding: 12px 0;
  box-shadow: 0 0 20px rgba(214, 214, 214, 0.7);
  transition: 0.5s;
  background-color: rgb(98, 98, 98);
  color: white;
}

button:hover {
  background-color: #3e3e3e;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-image: linear-gradient(#000000 0%, #848484 35%, #000000 100%);
  padding-top: 40px;
}

img {
  width: 200px;
}
</style>