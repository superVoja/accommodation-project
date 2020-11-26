<template>
  <div class="menu-container">
    <div v-if="show" class="menu-backdrop" @click="$nuxt.$emit('close')"></div>

    <transition name="MENU">
      <div v-if="show" class="menu" @click="$nuxt.$emit('close')">
        <TheLogo />
        <transition-group name="NAV" tag="ul" appear >
          
            <nuxt-link 
            tag="li"  
            v-for="(link, index) in links"
            :key="link.title"
            :style="`--i: ${index}`"
            :to="link.route">
            <a>{{ link.title }}</a>
            </nuxt-link>
          
        </transition-group>
      </div>
    </transition>
  </div>
</template>
<script>
import TheLogo from '@/components/branding/TheLogo'
export default {
  name: 'TheMenu',
  components: {
    TheLogo
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      links: [
        { title: 'Početna', route: '/' },
        { title: 'O nama', route: '/about' },
        { title: 'Sokobanja', route: '/sokobanja' },
        { title: 'Zdravstvo', route: '/medicine' },
        { title: 'Smeštaj', route: '/rooms' },
        { title: 'Kontakt', route: '/contact' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.menu-backdrop {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
}

.menu {
  z-index: 10;
  height: 100vh;
  width: 100%;
  background-color: lighten($color: $main-color, $amount: 0.5);
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;

  ul {
    list-style: none;
    position: fixed;
    right: 7vw;
    margin: 0;
    padding: 0;

    li {
      padding-top: 0.5rem;
      text-align: right;
    }
    a {
      color: $font-dark;
      font-family: $ubuntu-font;
      text-decoration: none;
      display: block;
      margin-top: 2rem;
      font-size: 1.9rem;
      font-weight: bolder;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
}

/* MENU TRANSITION */
.MENU-enter-active,
.MENU-leave-active {
  transition: all 0.5s ease-out;
}
.MENU-enter,
.MENU-leave-to {
  transform: translateX(100%);
}
/* NAV TRANSITION */
.NAV-leave-active {
  transition: all 0.8s ease-in-out;
}

.NAV-enter,
.NAV-leave-to {
  opacity: 0;
  transform: translateX(50%);
}
.NAV-enter-active {
  transition: all calc(var(--i) * 0.2s) ease-in-out;
  transition-delay: 0.5s;
}
</style>
