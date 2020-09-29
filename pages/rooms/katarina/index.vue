<template>
  <div>
    <h1>Katarina</h1>
    <RoomList :rooms="loadedRooms"
     
    />
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
import RoomList from '@/components/rooms/RoomList'
export default {
  components:{
RoomList
  },
  computed:{
    loadedRooms(){
      return this.$store.getters.loadedRooms.filter(room=>room.slug.startsWith("katarina")).map(bp => {
        
        return {
          
          id:bp.slug,
          title: bp.content.title
        }
      })
      
    }
  }

 
  
}
</script>
