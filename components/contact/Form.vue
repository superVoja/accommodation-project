<template>
  <div class="contact-form">
    <div class="form-heading">
      <h1>Pisite nam</h1>
    </div>
    <form action="POST" class="input-form" @submit.prevent="submit">
      <div class="input-wrap validate-input" data-validate="Name is required">
        <input type="text" class="input" placeholder="Name" v-model.trim="$v.name.$model" />

        <div v-if="$v.name.$dirty">
          <span class="error" v-if="!$v.name.required"></span>
        </div>
      </div>
      <div class="input-wrap validate-input" data-validate="Valid email is required: ex@adc.xyz">
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
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      name: null,
      email: null,
      message: null
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
.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form-heading {
    font-family: 'Playfair Display';
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
  @include media('<=phone') {
    width: 280px;
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
    font-family: 'Montserrat';
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