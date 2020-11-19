<template>
  <section>
    <div class="container">
      <Info />
      <Form />
    </div>
  </section>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
import Info from '@/components/contact/Info'
import Form from '@/components/contact/Form'
export default {
  name: 'contact',
  layout: 'default',
  components: {
    Info,
    Form
  }
}
</script>
<style lang="scss" scoped>
section {
  padding: 6rem 0;
  background-attachment: fixed;
  @include media('<=tablet') {
    height: 100%;
    //margin-top: 6rem;
  }
}
.container {
  width: 100%;
  height: 100%;
  display: grid;
  background-attachment: fixed;
  grid-template-columns: 1fr 1fr;
  @include media('<desktop') {
    grid-template-columns: 1fr;
  }
  padding-top: 8rem;
}
</style>
