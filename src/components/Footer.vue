<script setup></script>

<template>
  <div class="footer">
    <div class="number">
      <p>(416) 396-6675</p>
    </div>
    <div class="links">
      <a href="">Contact Us</a>
      <a href="">Careers With Us</a>
      <a href="">Cookies Preferences</a>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: black;
}

p {
  color: #ffffff;
}

.links {
  display: flex;
  justify-content: space-between;
  position: relative;
  font-size: 12px;
}

.links a {
  flex-grow: 1;
  text-align: left;
  padding: 10px;
  color: white;
}
</style>