<template>
    <section>
     <div class="container">
        <div class="content">
            <div>
                <h1>Sokobanja Zeleno Srce srbije</h1>
                    <p>Jedno od najposećenijih turističkih mesta u Srbiji je Sokobanja. Smeštena je u sokobanjskoj kotlini na 400 m. nadmorske visine. Kroz Sokobanju protiče reka Moravica. Severno od Sokobanje nalazi se planina Rtanj (1655m), a južno Ozren (1174m), i Devica (1187m), koje su bogate šumom i lekovitim travama. Na lokalitetu Sokobanje nađene su iskopine iz doba neolita i rikske grobnice iz I i II veka. Na rimskim temeljima Turci su podigli amam - prvi i najstariji objekat za lečenje u Sokobanji. Amam je obnovljen odlukom knjaza Miloša 1833. godine. U to vreme u Srbiji je bilo 10 lekara i farmaceuta. U Sokobanji je stalno radio dr.Đoka Novaković - "Pokrštenjak".
                    Kroz vekove Sokobanja menja svoj naziv: zvala se Balnea, Banja, Velika Banja, Akelksinačka Banja, Sokol Banja, a od 1859 godine dobila je ime sokobanja po istorijskom gradu Sokogradu ( srušen 1416 godine).
                    Kao prirodno lečilište Sokobanja poznata je još od doba Rimljana, a prvi pisani podaci o njenoj lekovitosti datiraju iz 1413 god. Konstantin Filozof, 1658 god. Hadži Kalfa, 1663 god. Elvija Celebija, 1737 god. Grof Smetans, a pišu i Vuk Karadžić i Felix Kanić.
                    Umirujuće dejstvo kontinentalne klime, visoka koncentracija kiseonika, ozona i negativnih jona u vazduhu, odsustvo aero zagađenja, malo magle i vetrovitih dana uz povoljan atmosferski pritisak i umerene padavine, prisustvo spelcifičnih elemenata u vazduhu i oligomineralnim vodama (temperature od 28C do 45C koje se koriste za kupanje i inhalacije, uslovi su da Sokobanja predstavlja idealno mesto za banjsko - klimatski tretman različitih bolesti i stanja. Zbog toga je specijalna bolnica "SOKOBANJA" izgrađena baš na ovom mestu. Ova bolnica je naučno nastavna baza pri medicinskom fakultetu u Nišu i jedina ustanova u Sokobanji koja ima odobrenje  Ministarstva Zdravlja za primenu prirodnih faktora u lečenju.</p>
            </div>
            <div class="image">
                <img src="~/assets/images/sokobanja.jpg" alt="Sokobanja Coat of Arms">
            </div>
        </div>
     </div>
    </section>
</template>
<script>
export default {
  name: 'medicine',
  layout: 'default',
  //   asyncData(context) {
  //     return context.app.$storyapi
  //       .get('cdn/stories/about/', {
  //         version: context.isDev ? 'draft' : 'published'
  //       })
  //       .then(res => {
  //         return {
  //           blok: res.data.story.content,
  //           title: res.data.story.content.title,
  //           content: res.data.story.content.content,
  //           imgOne: res.data.story.content.img_1
  //         }
  //       })
  //   },
  mounted() {
    // this.$storybridge.on(['input', 'published', 'change'], event => {
    //   if (event.action == 'input') {
    //     if (event.story.id === this.story.id) {
    //       this.story.content = event.story.content
    //     }
    //   } else {
    //     window.location.reload()
    //   }
    // })
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  //height: 100vh;
  max-width: 1360px;
  padding: 40px 20px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}
.content {
  padding-top: 6rem;
  display: flex;
  @include media('<=phone') {
    flex-direction: column;
  }

  h1 {
    font-size: 40px;
    line-height: 1em;
    max-width: 560px;
    margin: 1em 0 1.6em;
    color: #000;
    font-family: 'Lora', serif;
  }

  p {
    max-width: 600px;
  }
  h3 {
    padding: 2rem 0;
  }
  .image {
    max-width: 750px;
    display: flex;
    align-items: center;
    flex-basis: 40%;
    margin-left: 10%;
    @include media('<=phone') {
      margin: 20px auto;
    }

    img {
      width: 100%;
      border-radius: 6px 6px 6px 6px;
      box-shadow: 0px 40px 50px -20px rgba(0, 0, 0, 0.35);
      //opacity: 0.8;
    }
  }
}
</style>
