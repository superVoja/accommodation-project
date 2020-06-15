<template>
  <nav>
    <ul class="menu-nav">
      <li class="menu-item">
        <nuxt-link class="menu-link" to="/about">O nama</nuxt-link>
      </li>
      <Dropdown title="Smestaj" :items="items" />
      <li class="menu-item">
        <nuxt-link class="menu-link" to="/contact">Kontakt</nuxt-link>
      </li>
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

  .menu-nav {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-item {
    padding: 10px 20px;
    color: #000;
    text-align: center;
    border-bottom: 3px solid transparent;
    transition: 0.4s;
    display: flex;
    position: relative;
  }

  .menu-link {
    text-decoration: none;
    color: inherit;
  }
  .menu-item.active,
  .menu-item:hover {
    background-color: #d1d1d1;
    border-bottom-color: #444;
  }
}
</style>
