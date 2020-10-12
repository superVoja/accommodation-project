<template>
  <header>
    <TheLogo class="logo" />
    <Navbar class="navbar" /><TheMenuButton@toggle="$nuxt.$emit('menuToggle')" />
  </header>
</template>
<script>
import TheLogo from '@/components/branding/TheLogo'
import Navbar from '@/components/navigation/Navbar'
import TheMenuButton from '@/components/navigation/TheMenuButton'
export default {
  components: {
    TheLogo,
    Navbar,
    TheMenuButton
  }
}
</script>
<style lang="scss" scoped>
header {
  background: linear-gradient(
    to bottom,
    rgba(25, 61, 78, 0.7) 0,
    rgba(23, 54, 69, 0) 100%
  );

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  //height: 4.5rem;
  //display: grid;
  //grid-template-columns: 1fr 1fr;

  z-index: 99;

  .logo {
    z-index: 999;
  }
}
</style>
