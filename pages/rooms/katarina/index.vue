<template>
  <section>
    <div class="heading">
      <h1>Smeštaj Katarina</h1>
    </div>
    <p>Sve smeštajne jedinice smeštaja Katarina mogu da koriste besplatan parking i WiFi</p>
    <RoomList :rooms="loadedRooms" />
  </section>
</template>
<script>
import RoomList from '@/components/rooms/RoomList'

export default {
  components: {
    RoomList
  },
  computed: {
    loadedRooms() {
      return this.$store.getters.loadedRooms
        .filter(room => room.slug.startsWith('katarina'))
        .map(bp => {
          return {
            id: bp.slug,
            title: bp.content.title,
            thumbnail: bp.content.thumbnail
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
section {
  padding-top: 6rem;

  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    text-align: center;
    font-size: 2.3rem;
    padding-top: 2rem;
    padding-bottom: 1.2rem;
    position: relative;
    display: inline-block;
    font-family: $lora-font;

    &::after {
      content: '';
      width: 20%;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      background-color: $ascending-color;
    }
  }

  p {
    margin: 2rem auto;
    text-align: center;
    max-width: 300px;
    text-align: center;
  }
}
</style>
