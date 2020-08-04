<template>
  <header>
    <TheLogo class="logo" />
    <Navbar class="navbar" /><MenuButton@toggle="$nuxt.$emit('menuToggle')" />
  </header>
</template>
<script>
import TheLogo from '@/components/branding/TheLogo'
import Navbar from '@/components/navigation/Navbar'
import Dropdown from '@/components/navigation/Dropdown'
import MenuButton from '@/components/navigation/MenuButton'
export default {
  components: {
    TheLogo,
    Navbar,
    Dropdown,
    MenuButton
  }
}
</script>
<style lang="scss" scoped>
header {
  background: linear-gradient(
    to bottom,
    rgba(28, 28, 28, 0.7) 0,
    rgba(28, 28, 28, 0) 100%
  );
  padding-bottom: 50px;
  position: fixed;
  width: 100%;
  //display: grid;
  //grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  z-index: 99;

  .logo {
    z-index: 999;
  }
}
</style>
