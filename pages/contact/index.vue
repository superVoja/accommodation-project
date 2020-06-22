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
  height: 100vh;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
