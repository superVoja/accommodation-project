<template>
  <section>
    <h1>Smesataj Luka</h1>
    <RoomList :rooms="loadedRooms"/></section>
</template>
<script>
import RoomList from '@/components/rooms/RoomList'
export default {
  components:{
RoomList
  },
  computed:{
    loadedRooms(){
      return this.$store.getters.loadedRooms.filter(room=>room.slug.startsWith("luka")).map(bp => {
        return {
          id:bp.slug,
          title: bp.content.title
        }
      })
    }
  }

 
  
}
</script>
<style lang="scss" scoped>
section {
  padding-top: 4rem;
  height: 100vh;
}
</style>
