<template>
  <li class="menu-item" @mouseover="isOpen = true" @mouseleave="isOpen = false">
    <nuxt-link class="menu-link" to="/rooms">{{title}}</nuxt-link>
    <svg viewBox="0 0 1030 638" width="10px">
      <path
        d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
        fill="#e1e1e1"
      />
    </svg>
    <transition name="fade" appear>
      <ul class="sub-menu" v-show="isOpen">
        <li class="menu-item" v-for="(item, i) in items" :key="i">
          <nuxt-link class="menu-link" :to="item.link">{{item.title}}</nuxt-link>
        </li>
      </ul>
    </transition>
  </li>
</template>
<script>
export default {
  name: 'dropdown',
  props: ['title', 'items'],
  data() {
    return {
      isOpen: false
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-item svg {
  width: 10px;
  margin-left: 10px;
}

.menu-item .sub-menu {
  position: absolute;
  background-color: #e1e1e1;
  color: #000;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  border-radius: 0px 0px 16px 16px;

  .menu-link {
    color: #000;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
