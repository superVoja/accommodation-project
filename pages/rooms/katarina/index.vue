<template>
  <section>
    <h1>Smestaj katarina</h1>
   <p>Sve smestajne jedinice smetaja Katarina mogu da koriste besplatan parking i WiFi</p>
    <RoomList :rooms="loadedRooms"   />
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
  padding-top: 8rem;
  h1 {
    text-align: center;
    font-size: 2.3rem;
    padding: 1.2rem 1rem;
  }

  p {
    text-align: center;
  }
}
</style>
