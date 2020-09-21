<template>
  <section>
    <div id="slider">
      <transition-group tag="div" :name="transitionName" class="slides-group">
        <div v-if="show" :key="current" class="slide" :class="slides[current].className">
          <p>Smestaj u Sokobanji</p>
          <nuxt-link to="/rooms">Vidi Smestaj</nuxt-link>
        </div>
      </transition-group>
      <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">&#10094;</div>
      <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">&#10095;</div>
    </div>
    <div id="rooms-section">
      <nuxt-link to="/rooms/katarina" class="room-btn">Smestaj Katarina</nuxt-link>
      <nuxt-link to="/rooms/luka" class="room-btn">Smestaj Luka</nuxt-link>
    </div>
  </section>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicDom from "prismic-dom" //importing the Dom
import PrismicConfig from "./../prismic.config.js";
export default {
    async asyncData( params, error, req) {
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req});
    let rooms = {};
    const results = await api.getByUID("room", params.uid
      
    );
    rooms = results.results[0]
    console.log(rooms)
  },

  data() {
    return {
      current: 0,
      direction: 1,
      transitionName: 'fade',
      show: false,
      slides: [
        { className: 'slide-1' },
        { className: 'slide-2' },
        { className: 'slide-3' }
      ]
    }
  },
  methods: {
    slide(dir) {
      this.direction = dir
      dir === 1
        ? (this.transitionName = 'slide-next')
        : (this.transitionName = 'slide-prev')
      var len = this.slides.length
      this.current = (this.current + (dir % len) + len) % len
    },

  },
  mounted() {
    this.show = true
  }
}
</script>

<style lang="scss" scoped>
/* FADE IN */
.fade-enter-active {
  transition: opacity 1s ease-in;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
  opacity: 0;
}
.slide-next-leave-to {
  transform: translate(-100%);
  opacity: 1;
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
  opacity: 0;
}
.slide-prev-leave-to {
  transform: translate(100%);
  opacity: 1;
}

/* SLIDES CLASSES */

.slide-1 {
  background-image: url('~assets/images/slide_1.JPG');
}

.slide-2 {
  background-image: url('~assets/images/slide_2.JPG');
}

.slide-3 {
  background-image: url('~assets/images/slide_3.JPG');
}

/* SLIDER STYLES */

#slider {
  width: 100%;
  height: 100vh;
  position: relative;
}

.slide {
  z-index: 1;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-size: cover;

  p {
    color: $main-color;
    font-weight: 700;
    font-size: 2.2rem;
    letter-spacing: 1.2rem;
    text-transform: uppercase;
    text-shadow: 3px 3px 0px #000;
  }

  a {
    margin-top: 30px;
    text-decoration: none;
    color: $main-color;
    font-size: 1.8rem;
    text-transform: uppercase;

    padding: 5px 10px;
    border: 2px solid $main-color;

    &:hover {
      text-shadow: 0px 0px 1px #000;
    }
  }

  &:before {
    content: '';
    background-image: linear-gradient(
      to top,
      rgba(239, 239, 239, 255),
      rgba(239, 239, 239, 0)
    );
    position: absolute;
    height: 30vh;
    right: 0;
    bottom: 0;
    left: 0;
  }
}

.btn {
  z-index: 10;
  cursor: pointer;
  border: 3px solid $main-color;
  color: $main-color;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}

/* Rooms Section */
#rooms-section {
  padding: 60px 0 60px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  a {
    padding: 100px 200px;
    border: 1px solid #000;
    text-align: center;

    color: $font-color;
    text-decoration: none;
    margin-right: 10px;

    &:hover {
      box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    }
  }
}
</style>
