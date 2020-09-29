<template>
  <div>
    <h1>Luka</h1>
    <RoomList :rooms="loadedRooms"
     
    />
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
