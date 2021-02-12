<template>
  <footer class="footer">
    <div class="rooms">
      <ul>
        <span class="heading">Smeštaj</span>
        <li>
          <nuxt-link to="/rooms/katarina">Smeštaj Katarina</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/rooms/luka">Smeštaj Luka</nuxt-link>
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
          <nuxt-link to="/sokobanja">O Sokobanji</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/medicine">Zdravstvo</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="contact">
      <span class="heading">Kontakt</span>
      <p>
        Apartmani u Sokobanji
        <br />Ulica: Kneza Miloša 2,
        <br />Sokobanja, Srbija
      </p>
      <ul class="phone-list">
        <li>
          <span>Smeštaj Katarina</span>
          <a href="tel:+381638871851" class="non-hover">063 887 18 51</a>
        </li>

        <li>
          <span>Smeštaj Luka</span>
          <a href="tel:+38163247221" class="non-hover">063 247 221</a>
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
  color: $font-light;

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
    padding: 25px 0;
  }

  .about {
    @include media('<=phone') {
      display: none;
    }
  }

  .rooms {
    @include media('<=phone') {
      display: none;
    }
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

  li {
    padding: 0.5rem 1rem;
  }
}
</style>
