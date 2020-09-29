<template>
  <section class="container">
    <nuxt-link to="/rooms/katarina" class="room-btn">Smestaj Katarina</nuxt-link>
    <nuxt-link to="/rooms/luka" class="room-btn">Smestaj Luka</nuxt-link>
  </section>
</template>
<script>
import RoomPreview from '@/components/rooms/RoomPreview'
export default {
  components: {
    RoomPreview
  },
  
}
</script>
<style lang="scss" scoped>
.container {
  margin-top: 6rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>