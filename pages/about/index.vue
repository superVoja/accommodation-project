<template>
    <section>
     <div class="container">
 <div class="about">
        <h2 class="about-heading">Naša priča</h2>
        <div class="about-content">
          <p class="about-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor aliquid explicabo labore eaque sint laudantium excepturi nisi error fuga, incidunt veniam repellendus corporis nam dolorem magni perspiciatis deserunt. Soluta quas minus numquam labore cupiditate dolorum rem dicta quidem assumenda adipisci!
        </p>
        <div class="image">
          <img src="~/assets/images/gardan_0.jpg" alt="">
        </div>
        </div>
      </div>
     </div>
    </section>
</template>
<script>
export default {
  name: 'about',
  layout: 'default'
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1360px;
  padding: 40px 20px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}

.about {
  padding: 6rem 0;

  .about-heading {
    font-size: 40px;
    line-height: 1em;
    max-width: 560px;
    margin: 1em 0 1.6em;
    color: $font-dark;
    font-family: $ubuntu-font;

    &:after {
      content: '';
      display: block;
      width: 60px;
      margin: 15px 0 0;
      border-bottom: 3px solid $ascending-color;
    }
  }
  .about-content {
    display: flex;
  }
  .about-text {
    color: $font-dark;
    font-family: $lora-font;
    font-size: 16px;
    line-height: 1.6em;
    margin: 0 0 1.6em;
    flex-basis: 60%;
  }

  .image {
    max-width: 750px;
    flex-basis: 40%;

    img {
      width: 100%;
      //opacity: 0.8;
    }
  }
}
</style>
