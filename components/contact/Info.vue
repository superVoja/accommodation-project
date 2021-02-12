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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1114964079356!2d21.873338715777148!3d43.64584856092354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47543a5411af944d%3A0x3bd6a519e7f1bd65!2sKneza%20Milo%C5%A1a%202%2C%20Sokobanja!5e0!3m2!1sen!2srs!4v1612781568354!5m2!1sen!2srs" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
