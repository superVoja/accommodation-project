<template>
  <nuxt-link :to="id">
    <figure class="room-preview">
      <img :src="thumbnail" />
      <h2>{{title}}</h2>
    </figure>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    thumbnail:{
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: $font-dark;
}
.room-preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 36rem;

  img {
    width: 100%;
    height: 20rem;
  }

  h2 {
    color: $font-dark;
    text-align: center;

    font-size: 1.4rem;
  }
}
</style>
