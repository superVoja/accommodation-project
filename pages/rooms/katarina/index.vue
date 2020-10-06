<template>
  <section>
    <h1>Smestaj katarina</h1>
    <RoomList :rooms="loadedRooms"
     
    />
   
  </section>
</template>
<script>
import RoomList from '@/components/rooms/RoomList'

export default {
  components:{
RoomList,
  },
  computed:{
    loadedRooms(){
      return this.$store.getters.loadedRooms.filter(room=>room.slug.startsWith("katarina")).map(bp => {
        
        return {
          
          id:bp.slug,
          title: bp.content.title,
          thumbnail: bp.content.thumbnail,
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
