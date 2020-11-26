<template>
  <div class="contact-info">
    <div class="address info">
      <h4>
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" />Adresa:
      </h4>
      <p>
        Apartmani u Sokobanji,
        <br />Kneza Miloša 2, 18230 Sokobanja,
        <br />Srbija
      </p>
    </div>
    <div class="phone info">
      <h4>
        <font-awesome-icon :icon="['fas', 'phone']" />Telefon:
      </h4>

      <div class="phone-content">
        <p>Smeštaj Katarina <br>
      +381 63 887 18 51</p>
      <p>Smeštaj Luka <br>
      +381 63 247 221</p>
      </div>
    </div>
    <div class="email info">
      <h4>
        <font-awesome-icon :icon="['fas', 'envelope']" />Email:
      </h4>
      <p>kontakt@apartmaniusokobanji.rs</p>
    </div>
    <div class="map info">
      <h4>Mapa:</h4>
      <!-- 
      <gmap-map :center="center" :map-type-id="mapTypeId" :zoom="5">
        <gmap-marker
          v-for="(item, index) in markers"
          :key="index"
          :position="item.position"
          @click="center = item.position"
        />
      </gmap-map> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Info'
  /* data() {
     return {
      center: { lat: -3.350235, lng: 111.995865 },
      mapTypeId: 'terrain',
      markers: [
        { position: { lat: -0.48585, lng: 117.1466 } },
        { position: { lat: -6.9127778, lng: 107.6205556 } }
      ]
    } 
  } */
}
</script>
<style lang="scss" scoped>
.contact-info {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: $ubuntu-font;

  @include media('<=phone') {
    border-right: none;
  }
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
}
.phone-content {
  display: flex;
}
p {
  padding: 5px 2px;
}
h4 {
  padding: 5px 2px;
}
/* GOOGLE MAP */

.vue-map-container {
  height: 350px;
  max-width: 992px;
  width: 350px;

  @include media('<=phone') {
    max-width: 280px;
  }
}
</style>
