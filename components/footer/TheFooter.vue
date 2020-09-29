<template>
  <footer class="footer">
    <div class="rooms">
      <ul>
        <span class="heading">Smestaj</span>
        <li>
          <nuxt-link to="/rooms/katarina">Smestaj Katarina</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/rooms/luka">Smestaj Luka</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="about">
      <ul>
        <span class="heading">Informacije</span>
        <li>
          <nuxt-link to="/about">O nama</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">O Sokobanji</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="contact">
      <span class="heading">Kontakt</span>
      <p>
        Solobodan smestaj
        <br />Ulica: Ive Andrica 36
        <br />Sokobanja, Srbija
      </p>
      <ul class="phone-list">
        <li>
          <span>Smestaj Katarina</span>
          <a href="#" class="non-hover">062 123 45 67</a>
        </li>

        <li>
          <span>Smestaj Luka</span>
          <a href="#" class="non-hover">062 123 45 67</a>
        </li>
      </ul>
    </div>
    <div class="social">
      <span class="heading">Pratite nas</span>
      <ul class="social-list">
        <li>
          <a href="#" class="non-hover">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
        </li>
        <li>
          <a href="#" class="non-hover">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>

        <li>
          <a href="#" class="non-hover">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: $secondary-color;
  padding: 25px 40px;
  text-align: center;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  align-items: center;
  .heading {
    color: $font-light;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  span {
    text-align: center;
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  li {
    padding: 5px 2px;
  }

  a {
    text-decoration: none;
    color: $font-light;
    border-bottom: 3px solid transparent;
    transition: 0.4s;
    &:hover {
      border-bottom-color: $ascending-color;
    }
  }
  a.non-hover {
    border: none;
  }
  @include media('<=tablet') {
    grid-template-columns: 1fr 1fr;
  }
  @include media('<=phone') {
    grid-template-columns: 1fr;
  }
}

.phone-list {
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5px;
    width: 140px;
    padding: 15px 10px 0 0;
  }

  span {
    font-weight: bolder;
    font-size: 14px;
    margin-bottom: 4px;
    width: 100%;
  }
}
.social-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
