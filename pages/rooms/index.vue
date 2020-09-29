<template>
  <section class="container">
    <div class="content">
      <h2>Izaberite Smestaj</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, voluptatum? Dolores sint minima obcaecati praesentium distinctio? Ipsa commodi exercitationem expedita nisi hic eius facere sint officiis dolorem consequatur. Molestias, repellat.</p>
    <h2>Pogodnosti</h2>
    <p>Sve smestajne jedinice</p>
    <div class="amenities">
      <img src="" alt="Free Parcking">
      <img src="" alt="Free WiFi">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
    </div>
    </div>
    <Accommodations/>
  </section>
</template>
<script>
import Accommodations from '@/components/rooms/Accommodations'
export default {
  components: {
    Accommodations
  },
  
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  margin-top: 8rem;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2.3rem;
  }
  p {
    display: block;
    width: 600px;
    padding-bottom: 2rem;
    padding-top: 2rem;
    text-align: center;
  }
}
</style>