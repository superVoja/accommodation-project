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
  components: {
    Info,
    Form
  }
}
</script>
<style lang="scss" scoped>
section {
  padding: 6rem 0;

  @include media('<=tablet') {
    height: 100%;
    //margin-top: 6rem;
  }
}
.container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @include media('<desktop') {
    grid-template-columns: 1fr;
  }
}
</style>
