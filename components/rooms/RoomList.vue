<template>
  <section class="room-list">
    <RoomPreview
      v-for="room in rooms"
      :key="room.id"
      :title="room.title"
     :thumbnail="room.thumbnail"
      :id="room.id"
    />
  </section>
</template>
<script>
import RoomPreview from '@/components/rooms/RoomPreview'
export default {
  components: {
    RoomPreview
  },
    props: {
    rooms: {
      type: Array,
      required: true
    }
  },
}
</script>
<style lang="scss" scoped>
.room-list {
  padding-left: 10%;
  padding-right: 10%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 1rem;
}
</style>
