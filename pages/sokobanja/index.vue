<template>
    <section>
     <div class="container">
        <div class="about" v-editable="blok">
          <div class="about-heading">
            <h1>{{heading}}</h1>
          <h3>
            {{subheadingOne}}
          </h3>
          </div>
          <div class="about-content">
            <p>
            {{textOne}}
          </p>
          <div class="image" :style="{ backgroundImage: 'url(' + imageOne + ')' }">
            
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
          heading: res.data.story.content.main_heading,
          subheadingOne: res.data.story.content.subheading_one,
          textOne: res.data.story.content.text_one,
          imageOne: res.data.story.content.image_one,
          subheadingTwo: res.data.story.content.subheading_two,
          textTwo: res.data.story.content.text_two,
          imageTwo: res.data.story.content.image_two
        }
      })
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], event => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
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
  margin: 6rem 0;
  display: flex;
  flex-direction: column;

  h1 {
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
  h3 {
    margin-bottom: 1rem;
    max-width: 560px;
  }

  .about-content {
    display: flex;
    @include media('<=tablet') {
      //Tablet
    }
    @include media('<=phone') {
      flex-direction: column;
    }
    p {
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
      background-size: cover;
      background-position: center;
      @include media('<=phone') {
        margin: 0;
      }
    }
  }
}
</style>
