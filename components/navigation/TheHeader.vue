<template>
    <section>
        <header>
            <TheLogo class="logo" />
            <nav>
                <ul>
                    <li>
                        <nuxt-link to="/about">o nama</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/rooms">smestaj</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/contact">kontakt</nuxt-link>
                    </li>
                </ul>
            </nav>
        </header>
    </section>
</template>
<script>
import TheLogo from '@/components/branding/TheLogo'
export default {
  components: {
    TheLogo
  }
}
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.logo {
  position: absolute;
  top: 40px;
  left: 7vw;
}
nav {
  position: absolute;
  top: 42px;
  right: 7vw;

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    li {
      padding: 0 0.5rem;
    }

    a {
      text-decoration: none;
      color: #000;
      font-size: 22px;
    }
  }
}
</style>
