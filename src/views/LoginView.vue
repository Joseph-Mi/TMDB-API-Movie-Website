<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("/purchase");
  } else {
    alert("Invalid username or password!");
  }
  console.log(username.value, password.value);
};
</script>

<template>
  <div class="login">
    <div class="title">
      <h1>MovieMania</h1>
    </div>

    <div class="form">
      <form class="login-container" @submit.prevent="login()">
        <input
          class="username"
          type="text"
          placeholder="Username"
          v-model="username"
        />
        <input
          class="pass"
          type="password"
          placeholder="Password"
          v-model="password"
        />
        <input class="ent" type="submit" value="Login" />
      </form>
    </div>
  </div>

  <div class="backgroud">
    <img
      class="image"
      src="https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg"
      alt=""
    />
  </div>
</template>

<style scoped>
* {
  display: block;
  background-color: black;
  color: white;
}
.title {
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
}
.form {
  display: flex;
  justify-content: center;
}
.image {
  filter: blur(3px);
  width: 97vw;
}
</style>