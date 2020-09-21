<template>
  <nav>
    <ul class="menu-nav">
      
        <nuxt-link tag="li" to="/about"><a>O nama</a></nuxt-link>
      
      <Dropdown title="Smestaj" :items="items" />
      
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
      items: [
        {
          title: 'Smestaj Katarina',
          link: '/rooms/katarina'
        },
        {
          title: 'Smestaj Luka',
          link: '/rooms/luka'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
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
    color: $main-color;
    text-align: center;
    border-bottom: 3px solid transparent;
    transition: 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 1.2rem;
    height: 100%;
  }

  li a {
    text-decoration: none;
    color: inherit;

    &:active,
    &:hover {
      color: $font-color;
    }
  }

  @include media('<=tablet') {
    display: none;
  }
}
</style>
