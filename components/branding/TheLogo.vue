<template>
  <div class="logo">
    <nuxt-link to="/" class="brand">
      Smeštaj u Sokobanji
    </nuxt-link>
  </div>
</template>
<style lang="scss" scoped>
.brand {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.4rem;
  text-transform: lowercase;
  color: $ascending-color;
  font-weight: 900;
  text-align: center;
  text-decoration: none;
  //display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;

  @include media('<=tablet') {
    display: none;
  }
}
</style>
