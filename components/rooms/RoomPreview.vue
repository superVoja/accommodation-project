<template>
  <nuxt-link :to="id" tag="li"  >
    <div class="card" :style="{ backgroundImage: 'url(' + thumbnail + ')' }">
      <div class="content">
        <h2 class="title">{{title}}</h2>
        <p class="preview-text">{{previewText}}</p>
      </div>
    </div>
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
a {
  text-decoration: none;
  color: $font-dark;
}
.card {
  height: 350px;
  min-width: 180px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15);

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      rgba(25, 61, 78, 1) 0,
      rgba(23, 54, 69, 0) 100%
    );
    transform: translateY(-50%);
    transition: transform calc(var(--d) * 2) var(--e);
  }
  &:hover,
  &:focus {
    transform: scale3d(1.006, 1.006, 1);

    &::after {
      opacity: 1;
    }
  }

  .content {
    font-family: $ubuntu-font;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    transition: all 1s ease-in-out;

    .title {
      font-size: 1.3rem;
      font-weight: bold;
      line-height: 1.2;
    }
    .preview-text {
      font-size: 1rem;
      font-weight: bold;
      line-height: 1.2;
    }
  }
}
</style>
