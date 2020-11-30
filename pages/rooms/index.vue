<template>
  <section class="container">
    <div class="content">
      <h2>Apartmani u Sokobanji</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Optio, voluptatum? Dolores sint minima obcaecati praesentium distinctio? Ipsa commodi exercitationem expedita nisi hic eius facere sint officiis dolorem consequatur. Molestias, repellat.</p>
    <h2>Pogodnosti</h2>
    <p>Sve smeštajne jedinice</p>
    <div class="amenities">
      <img src="@/assets/images/freeParking.png" alt="Free Parcking" title="Besplatan Parking">
      <img src="@/assets/images/freeWiFi.png" alt="Free WiFi" title="Besplatan WiFi">
      <img src="@/assets/images/outdoorSpace.png" alt="Outdoor Space" title="Bašta">
      <img src="@/assets/images/bathroom.png" alt="Bathroom" title="Kupatilo">
      <img src="@/assets/images/airConditioner.png" alt="Air Conditioner" title="Klima">
      <img src="@/assets/images/kitchen.png" alt="Kitchen" title="Kuhinja">
      <img src="@/assets/images/bedroom.png" alt="Bedroom" title="Spavaća Soba">
      <img src="@/assets/images/TV.png" alt="TV" title="TV">
    </div>
    </div>
    <Accommodations/>
  </section>
</template>
<script>
import Accommodations from '@/components/rooms/Accommodations'
export default {
  name: 'rooms',
  layout: 'default',
  components: {
    Accommodations
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  margin-top: 10rem;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2.3rem;
    font-family: $lora-font;
    @include media('<=tablet') {
      font-size: 2rem;
      text-align: center;
    }
  }
  p {
    display: block;
    max-width: 600px;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
    padding-top: 2rem;
    text-align: center;
  }

  .amenities {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 10px;
    @include media('<=tablet') {
      grid-template-columns: 1fr 1fr;
    }
    img {
      padding: 0 1rem;
      width: 100%;
    }
  }
}
</style>
