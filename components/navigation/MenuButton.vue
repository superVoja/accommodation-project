<template>
  <div id="menu-btn" role="button" @click="$nuxt.$emit('toggle')" :class="{'active' : isOpen}">
    <span>Menu</span>
    <button type="button" class="burger-btn">
      <span class="burger-bar burger-bar--1"></span>
      <span class="burger-bar burger-bar--2"></span>
      <span class="burger-bar burger-bar--3"></span>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  created() {
    this.$nuxt.$on('toggle', () => {
      this.isOpen = !this.isOpen
    })
    this.$nuxt.$on('close', () => {
      this.isOpen = false
    })
  }
}
</script>
<style lang="scss" scoped>
#menu-btn {
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
  color: $font-color;
  button:focus {
    outline: none;
  }

  .burger-btn {
    position: relative;
    height: 30px;
    width: 32px;
    display: block;
    z-index: 60;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

    .burger-bar {
      background-color: $font-color;
      position: absolute;
      top: 50%;
      right: 6px;
      left: 6px;
      height: 2px;
      width: auto;
      margin-top: -1px;
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
        background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .burger-bar--1 {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
    }
    .burger-bar--2 {
      transform-origin: 100% 50%;
      transform: scaleX(0.8);
    }
    .burger-btn:hover .burger-bar--2 {
      transform: scaleX(1);
    }

    .burger-bar--3 {
      transform: translateY(6px);
    }
  }

  @include media('>=tablet') {
    display: none;
  }
}
#menu-btn:hover .burger-bar--2 {
  transform: scaleX(1);
}
#menu-btn.active .burger-btn {
  transform: rotate(-180deg);
}

#menu-btn.active .burger-bar--1 {
  transform: rotate(45deg);
}

#menu-btn.active .burger-bar--2 {
  opacity: 0;
}

#menu-btn.active .burger-bar--3 {
  transform: rotate(-45deg);
}
</style>
