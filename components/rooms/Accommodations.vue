<template>
        <section>  
           <div class="heading">
             <h1>Izaberite smeštaj</h1>
           </div>
           <div class="accommodations">
             <figure class="figure figure-katarina">
             <img src="@/assets/images/katarina-thumbnail.jpg" alt="Katarina Thumbnail">
             <figcaption>
               <div>
                  <h2>
               Smeštaj
               <span>Katarina</span>
             </h2>
             <p>Dobrodošli</p>
               </div>
               <nuxt-link to="/rooms/katarina">Vidi Smeštaj</nuxt-link>
             </figcaption>
           </figure>
           <figure class="figure figure-luka">
             <img src="@/assets/images/luka-thumbnail.jpg" alt="Luka Thumbnail">
             <figcaption>
               <div>
                 <h2>
               Smeštaj
               <span>Luka</span>
             </h2>
             <p>Dobrodošli</p>
               </div>
                <nuxt-link to="/rooms/luka">Vidi Smeštaj </nuxt-link>
             </figcaption>
           </figure>
           </div>
        </section>
</template>
<style lang="scss" scoped>
section {
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 4rem;

  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    text-align: center;
    font-size: 2.3rem;
    padding-top: 2rem;
    padding-bottom: 1.2rem;
    position: relative;
    display: inline-block;
    @include media('<=tablet') {
      font-size: 2rem;
    }

    &::after {
      content: '';
      width: 20%;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      background-color: $ascending-color;
    }
  }
}

.accommodations {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  @include media('<=tablet') {
    flex-direction: column;
  }
}

figure {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 320px;
  max-width: 480px;
  max-height: 360px;
  width: 48%;
  background: #3085a3;
  text-align: center;
  cursor: pointer;
}
figure img {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
}
figure figcaption {
  padding: 2em;
  color: $font-light;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
figure figcaption,
figure figcaption a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
figure figcaption a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}
figure h2 {
  word-spacing: -0.15em;
  font-weight: 300;
}
figure span {
  font-weight: 800;
}
figure h2,
figure p {
  margin: 0;
}
figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
}
.figure-luka {
  background: #18a367;
  //border: 3px solid #18a367;
}
.figure-katarina {
  background: #c23b22;
  //border: 3px solid #c70039;
}
figure img {
  height: 390px;
}
figure figcaption {
  padding: 3em;
}
figure figcaption::before,
figure figcaption::after {
  position: absolute;
  content: '';
  opacity: 0;
}
figure figcaption::before {
  top: 50px;
  right: 30px;
  bottom: 50px;
  left: 30px;
  border-top: 1px solid $font-light;
  border-bottom: 1px solid $font-light;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
figure figcaption::after {
  top: 30px;
  right: 50px;
  bottom: 30px;
  left: 50px;
  border-right: 1px solid $font-light;
  border-left: 1px solid $font-light;
  -webkit-transform: scale(1, 0);
  transform: scale(1, 0);
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
}
figure h2 {
  padding-top: 26%;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
}
figure p {
  padding: 0.5em 2em;
  text-transform: none;
  opacity: 0;
  -webkit-transform: translate3d(0, -10px, 0);
  transform: translate3d(0, -10px, 0);
}
figure img,
figure h2 {
  -webkit-transform: translate3d(0, -30px, 0);
  transform: translate3d(0, -30px, 0);
}
figure img,
figure figcaption::before,
figure figcaption::after,
figure p {
  -webkit-transition: opacity 0.45s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}
figure:hover img {
  opacity: 0.7;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
figure:hover figcaption::before,
figure:hover figcaption::after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
figure:hover h2,
figure:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
figure:hover figcaption::after,
figure:hover h2,
figure:hover p,
figure:hover img {
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}
</style>
