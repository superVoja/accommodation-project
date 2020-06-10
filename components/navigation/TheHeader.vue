<template>
  <section>
    <header>
      <TheLogo class="logo" />
      <Navbar class="navbar" />
    </header>
  </section>
</template>
<script>
import TheLogo from '@/components/branding/TheLogo'
import Navbar from '@/components/navigation/Navbar'
import Dropdown from '@/components/navigation/Dropdown'
export default {
  components: {
    TheLogo,
    Navbar,
    Dropdown
  }
}
</script>
<style lang="scss" scoped>
header {
  background-color: #e1e1e1;
  width: 100vw;
  padding: 15px;
  display: flex;
  justify-content: space-between;
}
</style>
