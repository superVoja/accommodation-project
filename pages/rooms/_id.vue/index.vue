<template>
    <div id="room" v-editable="blok">
      <div class="content">
        <h1>{{title}}</h1>
        <h3>Smestaj </h3>
        <p>{{content}}</p>
      </div>
<div class="images">
<CoolLightBox 
      :items="items" 
      :index="index"
      loop
      @close="index = null">
    </CoolLightBox>

<div class="image" v-for="(image, imageIndex) in items" :key="imageIndex" :style="{ backgroundImage: 'url(' + image + ')' }" @click="index = imageIndex"></div>
</div>
</div>
</template>
<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  components: {
    CoolLightBox
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/rooms/' + context.params.id, {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      .then(res => {
        return {
          blok: res.data.story.content,
          title: res.data.story.content.title,
          content: res.data.story.content.content,
          items: [
            res.data.story.content.image_1,
            res.data.story.content.image_2,
            res.data.story.content.image_3,
            res.data.story.content.image_4,
            res.data.story.content.image_5,
            res.data.story.content.image_6,
            res.data.story.content.image_7,
            res.data.story.content.image_8,
            res.data.story.content.image_9,
            res.data.story.content.image_10,
            res.data.story.content.image_11,
            res.data.story.content.image_12
          ],
          index: null
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
  },
  methods: {
    setIndex(index) {
      this.index = index
    }
  }
}
</script>
<style lang="scss" scoped>
#room {
  height: 100%;
  width: 100%;
  padding-top: 10rem;
  padding-bottom: 8rem;
  padding-left: 4rem;
  padding-right: 4rem;
  display: flex;

  //align-items: center;
  //justify-content: center;
}
.content {
  padding: 0 2rem;

  h1 {
    padding: 2rem 0;
    position: relative;

    &::after {
      content: '';
      height: 3px;
      width: 40px;
      background-color: $ascending-color;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  h3 {
    padding: 1rem 0;
  }
}
.images {
  width: 100%;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
.image {
  cursor: pointer;
  width: 300px;
  height: 300px;
  background-position: center;
  background-size: cover;
}
</style>
