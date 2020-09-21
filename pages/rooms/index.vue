<template>
 <section class="container">
  <RoomPreview v-for="room in rooms" :key="room.id"
   :title="room.title"
   :previewText="room.previewText"
   :thumbnailImage="room.thumbnailUrl"
   :id="room.id"/>
 </section>
</template>
<script>
import RoomPreview from '@/components/rooms/RoomPreview'
export default {
  components: {
    RoomPreview
  },
  data() {
    return {
      rooms: [
        {
          title: 'New Room',
          previewText: 'Best room',
          thumbnailUrl:
            'https://88rooms.com/uploads/medias/2014/11/21/slider_mobile_3.jpg',
          id: 'new-room'
        },
        {
          title: 'New New Room',
          previewText: 'Best room',
          thumbnailUrl:
            'https://88rooms.com/uploads/medias/2014/11/21/slider_mobile_3.jpg',
          id: 'new-new-room'
        }
      ]
    }
  }
}
</script>
