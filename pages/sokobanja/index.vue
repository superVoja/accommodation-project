<template>
    <section>
     <div class="container">
        <div class="about" v-editable="blok">
          <h2 class="about-heading">{{title}}</h2>
          <h4>
            Smeštaj Katarina i Luka toplo dočekuje od 2000. godine.
          </h4>
          <div class="about-content">
            <p class="about-text">
            {{content}}
          </p>
          <div class="image">
          </div>
        </div>
      </div>
     </div>
    </section>
</template>
<script>
export default {
  name: 'medicine',
  layout: 'default',
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/sokobanja/', {
        version: context.isDev ? 'draft' : 'published'
      })
      .then(res => {
        return {
          blok: res.data.story.content,
          title: res.data.story.content.title,
          content: res.data.story.content.content,
          imgOne: res.data.story.content.img_1
        }
      })
  },
  mounted() {
    // this.$storybridge.on(['input', 'published', 'change'], event => {
    //   if (event.action == 'input') {
    //     if (event.story.id === this.story.id) {
    //       this.story.content = event.story.content
    //     }
    //   } else {
    //     window.location.reload()
    //   }
    // })
  }
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
    font-family: $lora-font;

    &:after {
      content: '';
      display: block;
      width: 60px;
      margin: 15px 0 0;
      border-bottom: 3px solid $ascending-color;
    }
  }
  h4 {
    margin-bottom: 1rem;
  }
  .about-content {
    display: flex;
    @include media('<=tablet') {
      //Tablet
    }
    @include media('<=phone') {
      flex-direction: column;
    }
  }
  .about-text {
    color: $font-dark;
    font-family: $ubuntu-font;
    font-size: 16px;
    line-height: 1.6em;
    margin: 0 0 1.6em;
    flex-basis: 50%;
    white-space: pre-line;
  }

  .image {
    max-width: 750px;
    flex-basis: 40%;
    margin-left: 10%;
    @include media('<=phone') {
      margin: 0;
    }
    img {
      width: 100%;
      border-radius: 6px 6px 6px 6px;
      box-shadow: 0px 40px 50px -20px rgba(0, 0, 0, 0.35);
      //opacity: 0.8;
    }
  }
}
</style>
