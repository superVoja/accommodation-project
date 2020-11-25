<template>
  <nav class="navbar">
    <ul class="menu-nav">

        <nuxt-link tag="li" to="/about"><a>O nama</a></nuxt-link> 
        <nuxt-link tag="li" to="/sokobanja"><a>Sokobanja</a></nuxt-link>
        <nuxt-link tag="li" to="/medicine"><a>Zdravstvo</a></nuxt-link>
        <nuxt-link tag="li" to="/rooms"><a>Smeštaj</a></nuxt-link>
        <nuxt-link tag="li"  to="/contact"><a>Kontakt</a></nuxt-link>
      
    </ul>
  </nav>
</template>
<script>
import Dropdown from '@/components/navigation/Dropdown'
export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>
<style lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  //background: #fff;
  height: 100%;
  z-index: 99;
  /* &::before {
    content: '';
    width: 300px;
    height: 1px;
    background: $main-color;
    position: absolute;
    top: 0;
  } */

  .menu-nav {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 100%;
  }

  .menu-nav li {
    padding: 10px 20px;
    //color: inherit;

    text-align: center;
    border-bottom: 3px solid transparent;
    transition: 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    height: 100%;

    &.nuxt-link-active,
    .nuxt-link-exact-active {
      color: $ascending-color;
    }
  }

  li a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 500;
    font-family: $ubuntu-font;
    color: inherit;
    transition: all 0.2s linear;
    display: inline-block;

    &:hover {
      color: $ascending-color;
    }
  }

  @include media('<=tablet') {
    display: none;
  }
}
</style>
