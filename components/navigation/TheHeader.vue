<template>
  <div class="header">
    <TheLogo />
    <Navbar /><TheMenuButton@toggle="$nuxt.$emit('menuToggle')" />
  </div>
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
.header {
  background: #fff;
  color: $font-dark;
  box-shadow: 0 5px 10px hsla(0, 0%, 79.2%, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  //height: 4.5rem;
  z-index: 99;
}
</style>
