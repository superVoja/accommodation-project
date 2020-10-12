<template>
  <section>
    <article>
      <div class="container">
        <h1 class="heading">O nama</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia voluptatibus voluptate perspiciatis, nobis culpa similique sed maxime aut molestias quis voluptatem voluptas aliquid, accusantium nulla odit rerum accusamus? Veritatis.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia voluptatibus voluptate perspiciatis, nobis culpa similique sed maxime aut molestias quis voluptatem voluptas aliquid, accusantium nulla odit rerum accusamus? Veritatis.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia voluptatibus voluptate perspiciatis, nobis culpa similique sed maxime aut molestias quis voluptatem voluptas aliquid, accusantium nulla odit rerum accusamus? Veritatis.</p>
      </div>
      <div class="container">
        <h2 class="sub-heading">U nasoj blizini</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia voluptatibus voluptate perspiciatis, nobis culpa similique sed maxime aut molestias quis voluptatem voluptas aliquid, accusantium nulla odit rerum accusamus? Veritatis.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia voluptatibus voluptate perspiciatis, nobis culpa similique sed maxime aut molestias quis voluptatem voluptas aliquid, accusantium nulla odit rerum accusamus? Veritatis.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia voluptatibus voluptate perspiciatis, nobis culpa similique sed maxime aut molestias quis voluptatem voluptas aliquid, accusantium nulla odit rerum accusamus? Veritatis.</p>
      </div>
    </article>
  </section>
</template>
<style lang="scss" scoped>
section {
  min-height: 100vh;
}
.container {
  width: 100%;
  max-width: 1360px;
  padding: 40px 20px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}

article {
  padding: 4rem 0;

  .heading {
    font-size: 40px;
    line-height: 1em;
    max-width: 560px;
    margin: 1em 0 1.6em;
    color: $font-dark;

    &:after {
      content: '';
      display: block;
      width: 60px;
      margin: 15px 0 0;
      border-bottom: 3px solid $font-dark;
    }
  }

  p {
    color: $font-dark;
    font-family: $ubuntu-font;
    font-size: 16px;
    line-height: 1.6em;
    margin: 0 0 1.6em;
  }
  .sub-heading {
    font-size: 30px;
    line-height: 1em;
    max-width: 560px;
    margin: 1em 0 1.6em;
    color: $font-dark;

    &:after {
      content: '';
      display: block;
      width: 60px;
      margin: 15px 0 0;
      border-bottom: 3px solid $font-dark;
    }
  }
}
</style>
