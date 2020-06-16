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
          <a href="#">062 123 45 67</a>
        </li>

        <li>
          <span>Smestaj Luka</span>
          <a href="#">062 123 45 67</a>
        </li>
      </ul>
    </div>
    <div class="social">
      <span class="heading">Pratite nas</span>
      <ul class="social-list">
        <li>
          <a href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
        </li>
        <li>
          <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        </li>
        
        <li>
          <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: #e1e1e1;
  padding: 25px 40px;
  position: fixed;
  left: 0;
  bottom: 0;
  text-align: center;

  display: flex;
  justify-content: space-between;
  align-items: center;

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
  a:hover {
    border-bottom-color: #444;
  }
  a {
    text-decoration: none;
    color: inherit;
    border-bottom: 3px solid transparent;
    transition: 0.4s;
  }
}

.phone-list {
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    display: flex;
    flex-direction: column;
    padding: 15px 10px 0 0;
  }

  span {
    font-weight: bolder;
    margin-bottom: 10px;
  }
}
.social-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
