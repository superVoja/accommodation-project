<template>
  <section>
    <div class="container">
      <div class="contact-info">
        <div class="address info">
          <h4>
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />Adresa:
          </h4>
          <p>
            Slobodan Smestaj,
            <br />Ive Andrica 36, 18230 Sokobanja, 
            <br />Srbija
          </p>
        </div>
        <div class="phone info">
          <h4>
            <font-awesome-icon :icon="['fas', 'phone']" />Telefon:
          </h4>
          <p>+381 62 123 456 </p>
        </div>
        <div class="email info">
          <h4>
            <font-awesome-icon :icon="['fas', 'envelope']" />Email:
          </h4>
          <p>support@example.com</p>
        </div>
        <div class="map info">
            <h4>Mapa:</h4>
            <gmap-map :center="center" :map-type-id="mapTypeId" :zoom="5">
      <gmap-marker
        v-for="(item, index) in markers"
        :key="index"
        :position="item.position"
        @click="center = item.position"
      />
    </gmap-map>
        </div>
      </div>
      <div class="contact-form">
        <div class="form-heading">
          <h1>Pisite nam</h1>
        </div>
        <form action class="input-form" @submit.prevent="submit">
          <div class="input-wrap validate-input" data-validate="Name is required">
            <input type="text" class="input" placeholder="Name" v-model.trim="$v.name.$model" />

            <div v-if="$v.name.$dirty">
              <span class="error" v-if="!$v.name.required"></span>
            </div>
          </div>
          <div
            class="input-wrap validate-input"
            data-validate="Valid email is required: ex@adc.xyz"
          >
            <input
              type="email"
              placeholder="Email"
              class="input"
              name="email"
              autocomplete="off"
              v-model.trim="$v.email.$model"
            />
            <div v-if="$v.email.$dirty">
              <span class="error" v-if="!$v.email.required"></span>
            </div>
          </div>
          <div class="input-wrap validate-input" data-validate="Message is required.">
            <textarea
              name
              id
              cols="30"
              rows="10"
              placeholder="Message"
              class="input"
              v-model.trim="$v.message.$model"
            ></textarea>
            <div v-if="$v.message.$dirty">
              <span class="error" v-if="!$v.message.required"></span>
            </div>
          </div>
          <button class="button" type="submit">Posalji poruku</button>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      name: null,
      email: null,
      message: null,
      center: { lat: -3.350235, lng: 111.995865 },
      mapTypeId: 'terrain',
      markers: [
        { position: { lat: -0.48585, lng: 117.1466 } },
        { position: { lat: -6.9127778, lng: 107.6205556 } }
      ]
    }
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    message: {
      required
    }
  },
  methods: {
    submit() {
      console.log('submit')
    }
  }
}
</script>
<style lang="scss" scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  box-shadow: 0 0 0 30px white inset !important;
}
input,
textarea {
  outline: none;
  border: none;
  background: transparent;
}
section {
  height: calc(100vh - 153px - 60px);
}
.container {
  width: 100%;
  height: 100%;
  display: flex;

  .contact-info {
    flex-basis: 50%;
    max-width: 50%;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  p {
    padding: 5px 2px;
  }
  h4 {
    padding: 5px 2px;
  }
}
.vue-map-container {
  height: 350px;
  max-width: 992px;
  width: 450px;
}
.contact-form {
  flex-basis: 50%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 590px;
}
.form-heading {
  font-family: 'Playfair Display';
  font-size: 2.2rem;
}
.input-wrap {
  width: 100%;
  position: relative;
  border-bottom: 2px solid #adadad;
  margin-bottom: 4rem;
}

.input {
  display: block;
  width: 100%;
  padding: 0.2rem;
  line-height: 1.2;
  color: #818f87;
  font-family: 'Larsseit';
  font-size: 17px;
}
textarea.input {
  min-height: 115px;
  padding-top: 13px;
  padding-bottom: 13px;
}
.error::before {
  content: 'This field is required!';

  position: absolute;
  top: 0;
  right: 10px;
  max-width: 80%;

  border: 1px solid #c80000;
  border-radius: 2px;
  padding: 4px 25px 4px 10px;

  transform: translateY(-50%);

  pointer-events: none;

  color: #c80000;
  font-size: 10px;
  line-height: 1.4;
  text-align: left;
  visibility: hidden;

  opacity: 0;

  transition: opacity 0.4s;
}

.error::after {
  content: '!';
  display: block;
  position: absolute;
  color: #c80000;
  font-size: 16px;
  top: 25%;
  transform: translateY(-50%);
  right: 4px;
  font-family: 'Larsseit';
}
.error:hover::before {
  visibility: visible;
  opacity: 1;
}
.button {
  background: #818f87;
  color: #fff;
  border-radius: 7px;
  box-shadow: 0 5px #818f87;
  padding: 15px 40px 15px 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  border: none;
  text-align: center;

  font-family: 'Playfair Display';
  cursor: pointer;
}
</style>
