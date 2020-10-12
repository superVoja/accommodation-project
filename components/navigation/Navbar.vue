<template>
  <nav>
    <ul class="menu-nav">
      
        <nuxt-link tag="li" to="/about"><a>O nama</a></nuxt-link>
        <nuxt-link tag="li" to="/rooms"><a>Smestaj</a></nuxt-link>
        <nuxt-link tag="li"  to="/contact"><a>Kontakt</a></nuxt-link>
      
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'navbar'
}
</script>
<style lang="scss">
nav {
  display: flex;
  align-items: center;
  justify-content: center;

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
    color: $font-light;
    font-family: $ubuntu-font;
    text-align: center;
    border-bottom: 3px solid transparent;
    transition: 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 1.4rem;
    font-weight: 400;
    height: 100%;
  }

  li a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s linear;
    display: inline-block;

    &:active,
    &:hover {
      color: $ascending-color;
    }
  }

  @include media('<=tablet') {
    display: none;
  }
}
</style>
