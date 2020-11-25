<template>
  <header  :class="{scrolling: scrollPosition > 100}">
    <TheLogo class="logo" />
    <Navbar class="navbar" /><TheMenuButton@toggle="$nuxt.$emit('menuToggle')" />
  </header>
</template>
<script>
import TheLogo from '@/components/branding/TheLogo'
import Navbar from '@/components/navigation/Navbar'
import TheMenuButton from '@/components/navigation/TheMenuButton'
export default {
  name: 'homepageheader',
  components: {
    TheLogo,
    Navbar,
    TheMenuButton
  },
  data() {
    return {
      scrollPosition: null
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleTopBar)
  },
  methods: {
    handleTopBar() {
      this.scrollPosition = window.scrollY
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  background: transparent;
  color: $font-light;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  //height: 4.5rem;
  //display: grid;
  //grid-template-columns: 1fr 1fr;

  z-index: 99;

  .logo {
    z-index: 99;
  }
}
.scrolling {
  background-color: #fff;
  transition: 0.3s ease-in;
  box-shadow: 0 5px 10px hsla(0, 0%, 79.2%, 0.4);
  color: $font-dark;
}
</style>
