<template>
  <div class="contact-form">
    <div class="form-heading">
      <h1>Pišite nam</h1>
    </div>
    <form method="POST" class="input-form" @submit.prevent="submit">
      <div class="input-wrap validate-input" data-validate="Name is required.">
        <input 
          type="text" 
          class="input"
          name="name" 
          placeholder="Ime i Prezime" 
          v-model="$v.name.$model"
        />
        <div>
           <span class="error" v-if="!$v.name.required && $v.name.$dirty" data-placeholder="NAME"></span>
        </div>
      </div>
      <div class="input-wrap validate-input" data-validate="Valid email is required: ex@adc.xyz">
        <input
          type="email"
          placeholder="Email Adresa"
          class="input"
          name="email"
          autocomplete="off"
          v-model.trim="$v.email.$model"
        />
        <div >
          <span class="error" v-if="!$v.email.required && $v.email.$dirty"   data-placeholder="EMAIL"></span>
        </div>
      </div>
      <div class="checkbox validate-input">
        <p>Izaberite Smeštaj:</p>
        <ul>
          <li v-for="(feature, index) in features" :key="index">
            <input type="checkbox" :value="feature" v-model="$v.selected.features.$model">
            <label>{{feature}}</label>
          </li>
        </ul>
      </div>
      <div class="input-wrap validate-input" data-validate="Message is required.">
        <textarea
          cols="30"
          rows="10"
          placeholder="Vaša poruka"
          class="input"
          name="message"
          v-model.trim="$v.message.$model"
        ></textarea>
        <div>  
          <span class="error" data-placeholder="MESSAGE" v-if="!$v.message.required && $v.message.$dirty"></span>
        </div>
      </div>
      <div class="error-message">
        <p class="typo__p" v-if="submitStatus === 'OK'">Hvala Vam! Očekujte odgovor u najkraćem mogućem roku.</p>
        <p class="typo__p" v-show="submitStatus === 'ERROR'">Molimo vas da popunite formular</p>
      </div>
      <button class="button" type="submit" :disabled="submitStatus ==='PENDING'">Pošalji poruku</button>
      
    </form>
  </div>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'
export default {
  data() {
    return {
      name: null,
      email: null,
      message: null,
      features: ['Smeštaj Katarina', 'Smeštaj Luka'],
      submitStatus: null,
      selected: {
        features: []
      }
    }
  },
  methods: {
    submit() {
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
        selected: this.selected.features
      }
      console.log('Submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        console.log(data)
        axios.post('submit', data, () => {
          console.log('send')
          console.log(data)
        })
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)

        this.name = ''
        this.email = ''
        this.message = ''
        this.selected.features = null
        this.$v.$reset()
      }
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
    },
    selected: {
      features: {
        required
      }
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
.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form-heading {
    font-family: $lora-font;
    font-size: 1.7rem;
    padding: 2rem;
  }
}

/* FORM STYLING */
.input-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 490px;
  font-family: $ubuntu-font;
  @include media('<=phone') {
    width: 280px;
  }
  .checkbox {
    width: 100%;
    margin-bottom: 2rem;
    p {
      padding: 1rem 0;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }
    li {
      margin-right: 35px;
    }
  }
  .input-wrap {
    width: 100%;
    position: relative;
    border-bottom: 2px solid $main-color;

    margin-bottom: 4rem;
  }
  .input {
    display: block;
    width: 100%;
    padding: 0.2rem;
    line-height: 1.2;
    color: $font-dark;
    font-size: 17px;
  }

  textarea.input {
    min-height: 115px;
    padding-top: 13px;
    padding-bottom: 13px;
  }

  .button {
    border-color: $ascending-color;
    background-color: $ascending-color;
    color: $font-dark;
    border-radius: 7px;
    box-shadow: 0 5px #818f87;
    padding: 10px 30px 10px 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    border: none;
    text-align: center;

    cursor: pointer;

    &:hover {
      background-color: lighten($color: $ascending-color, $amount: 5);
    }
  }
}

/* ERROR INPUT STYLING */
.error-message {
  //padding: 1rem;
  height: 35px;
  transition: all 1s ease-in;
}
.error::before {
  content: 'This field is required!';

  position: absolute;
  top: 0;
  right: 10px;
  max-width: 80%;

  border-bottom: 1px solid $error-color;
  border-radius: 2px;
  padding: 4px 25px 4px 10px;

  transform: translateY(-50%);

  pointer-events: none;

  color: $error-color;
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
  color: $error-color;
  font-size: 16px;
  top: 25%;
  transform: translateY(-50%);
  right: 4px;
  font-family: 'Montserrat';
}
.error:hover::before {
  visibility: visible;
  opacity: 1;
}
</style>
