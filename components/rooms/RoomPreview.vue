<template>
  <nuxt-link :to="id" tag="li"  >
    <figure class="" :style="{ backgroundImage: 'url(' + thumbnail + ')' }">
						<figcaption>
							<div>
								<h2>{{title}}</h2>
								<p>{{previewText}}</p>
							</div>
							
						</figcaption>			
					</figure>
    
  </nuxt-link>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
figure {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 320px;
  max-width: 480px;
  height: 360px;
  width: 48%;

  text-align: center;
  cursor: pointer;
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: $main-color, $alpha: 0.4);
  }

  &:hover h2 {
    color: #fff;
    -webkit-transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);
    transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);
  }

  &:hover figcaption::before,
  &:hover p {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  // img {
  //   position: relative;
  //   display: block;
  //   min-height: 100%;
  //   max-width: 100%;
  //   opacity: 0.8;
  // }
  figcaption {
    padding: 2em;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.25em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: -webkit-linear-gradient(
        top,
        rgba(72, 76, 97, 0) 0%,
        rgba(72, 76, 97, 0.8) 75%
      );
      background: linear-gradient(
        to bottom,
        rgba(72, 76, 97, 0) 0%,
        rgba(72, 76, 97, 0.8) 75%
      );
      content: '';
      opacity: 0;
      -webkit-transform: translate3d(0, 50%, 0);
      transform: translate3d(0, 50%, 0);
      -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
      transition: opacity 0.35s, transform 0.35s;
    }
  }
  h2 {
    word-spacing: -0.15em;
    font-weight: 300;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    color: $secondary-color;
    -webkit-transition: -webkit-transform 0.35s, color 0.35s;
    transition: transform 0.35s, color 0.35s;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
  }
  p {
    letter-spacing: 1px;
    font-size: 68.5%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 2em;
    width: 100%;
    opacity: 0;
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
  }
}
</style>
