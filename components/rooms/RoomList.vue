<template>
  <section class="room-list">
    <transition-group name="list" tag="ul" appear>
    <RoomPreview
      v-for="room in rooms"
      :key="room.id"
      :title="room.title"
     :thumbnail="room.thumbnail"
      :id="room.id"
      class="list-item"
    />
    </transition-group>
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
  }
}
</script>
<style lang="scss" scoped>
.room-list {
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 10%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 1rem;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter {
  opacity: 0;
  transform: translate(100%, 0);
}
.list-leave-to {
  opacity: 0;
  transform: translate(-100%, 0);
}
</style>
