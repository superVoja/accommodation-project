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
  //background-color: #e1e1e1;
  position: fixed;
  width: 100vw;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  z-index: 99;

  .logo {
    z-index: 999;
  }
}
</style>
