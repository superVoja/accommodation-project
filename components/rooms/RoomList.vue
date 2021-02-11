<template>
  <section class="room-list">
    <transition-group name="list" class="list" tag="ul" appear>
    <RoomPreview
      tag="li"
      v-for="(room, index) in rooms"
      :key="room.id"
      :title="room.title"
      :thumbnail="room.thumbnail"
      :id="room.id"
      class="list-item"
      :style="`--i:${index}`"
      :previewText="room.previewText"
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
  .list {
    margin: 0 auto;
  }
}
.list-item {
  list-style: none;
  display: inline-block;
  margin-right: 10px;
  @include media('<=tablet') {
    display: block;
    padding: 0;
    margin-right: 0;
    margin-bottom: 10px;
  }
}
.list-enter-active {
  transition: all calc(var(--i) * 0.4s) ease-in-out;
  //transition-delay: 0.4s;
}
.list-leave-active {
  transition: all 3s ease-in-out;
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
