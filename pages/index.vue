<template>
  <section>
    <div id="main">
      <div class="overlay"></div>
      <div class="main-content">
        <h1>Smestaj U Sokobanji</h1>
        <h5>Smestaj u samom centru Sokobanje</h5>
        <nuxt-link to="/contact">Rezervisi Smestaj</nuxt-link>
      </div>
    </div>
    <div id="rooms">
      <Accommodations/>
    </div>
  </section>
</template>

<script>
import Accommodations from '@/components/rooms/Accommodations'
export default {
  components: {
    Accommodations
  }
}
</script>

<style lang="scss" scoped>
/* FADE IN */

/* Main Section */

#main {
  height: 100vh;
  width: 100%;
  background-image: url('../assets/images/slide_3.jpg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    background-image: linear-gradient(135deg, #193d4e 0%, #1d394b 100%);
    opacity: 0.7;
  }
  .main-content {
    color: $font-light;
    font-family: $lora-font;
    z-index: 99;
    text-align: center;

    h1 {
      color: $font-light;
      letter-spacing: 4px;
      line-height: 1.5;
      text-transform: uppercase;
      font-size: 4rem;
      font-weight: 700;
    }
    h5 {
      font-size: 1.25rem;
      font-weight: 500;
      padding-top: 2rem;
      padding-bottom: 2rem;
      font-family: $ubuntu-font;
    }
    a {
      color: $font-dark;
      font-family: $ubuntu-font;
      text-decoration: none;
      border-color: $ascending-color;
      background-color: $ascending-color;

      font-weight: 600;
      line-height: 1;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-top: 2rem;
      border-radius: 7px;
      padding-top: 18px;
      padding-right: 32px;
      padding-bottom: 18px;
      padding-left: 32px;

      &:hover {
        background-color: lighten($color: $ascending-color, $amount: 5);
      }
    }
  }
}
/*Rooms Section*/
#rooms {
  width: 100%;
}
</style>
