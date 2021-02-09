<template>
    <section>
     <div class="container">
        <div class="content">
            <div>
              <h1>Zdravstveni turizam</h1>
                <p>Mnogima u Srbiji je ime Sokobanja asocijacija za lečenje astme. U bilo koje doba godine na centralnom šetalištu mogu se videti majke sa malom decom, šetaju gradom tražeći lek za bolest svoje dece.
                Mnogima u Srbiji je ime Sokobanja asocijacija za lečenje astme. U bilo koje doba godine na centralnom šetalištu mogu se videti majke sa malom decom, šetaju gradom tražeći lek za bolest svoje dece. Takođe, često sam bio u prilici da razgovaram, sada sa odraslim ljudima koji mi na saznanje da sam iz Sokobanje, kažu kako su kao mali išli u Sokobanju jer su imali probleme sa plućima, i kako im je boravak u Sokobanji puno pomogao. Kao mlad lekar, početkom devedesetih imao sam priliku da sretnem veliki broj ljudi, banjskih gostiju, koji su u vreme najveće krize boravili u Sokobanji zbog svojih zdravstvenih problema. Njihov razlog je bio jednostavan, kada provedu 10-15 dana u Sokobanji, u toku jeseni i zime nemaju značajnije zdravstvene probleme, ne borave u bolnici, nemaju napade gušenja ili su oni manjeg intenziteta.Za njih je to dovoljan razlog za povratak i boravak u Sokobanji.
                Višestruki su pokušaji da se sve stručno objasni. Svakako da svoj uticaj ima inhalacija para iz lekovite vode u banjskom parku koje su bogate radonom. Naučno je potvrđeno blagotvorno dejstvo para radona u malim koncentracijama. Sa druge strane može se primetiti da i pacijentu koji ne koriste prirodne inhalacije imaju poboljšanje. Novija ispitivanja ukazuju na značaj negativnih jona, kojih u banjskoj kotlini ima u izobilju jer se stvaraju u sudaru vazdušnih struja iz Timočke krajine i Pomoravlja. Svojim naelektrisanjem privlače na sebe sve čestice pozitivnog naelektrisanja ( sve organske supstance), vezuju ih u vidu grozdova i takve otežaju toliko da više ne mogu da labde u vazduhu, već padaju na tlo.Na taj način je znatno smanjeno udisanje čestica koje mogu provocirati alerijsku i irititativnu reakciju. Takože se smatra da se energija negativnih jona koristi za brži prenos kiseonika iz pluća u krv, što bitno doprinosi poboljšanju fizičkih mogućnosti. Nije bez značaja da u Sokobanji nema razvijene industrije, samim tim ni značajnijeg zagađenja vazduha, da je okolina bogata šumom sa velikom produkcijom kiseonika, a sa svih strana okružena planinskih vrhovima koji je štite od jakih vetrova. Sve ovo zajedno utiče na činjenicu da je po mnogima Sokobanja rajsko mesto za tretman obolelih od plućnih bolesti, na kraju krajeva zbog toga su i napravljene dve velike bolnice za plućne bolesti, na Ozrenu i Sokobanji.
                Na kraju, ovih dana je u štampi konačno izašao članak o činjenici da veliki broj građana Srbije  ( 5.400 ljudi godišnje ) umire zbog povećane koncentracije sitnih čestica ( PM 10) o kojima sam pisao u prethodnim tekstovima na ovom sajtu. Posle Poljske, BIH,Makedonije i Bugarske po zvaničnim podacima Srbija ima najzagađeniji vazduh u Evropi, 1/3 stanovništva Srbije živi u izrazito zagađenim sredinama. Danas su to Beograd, Užice,Valjevo, a interesantno je da se na toj listi više ne nalaze Bor i Pančevo, delom zbog smanjene industrijske aktivnosti, a delom zbog ugradnje adekvatnih filtera na dimnjacima svojih pogona. U pomenutom članku intervjuisan je dr Zoran Živković iz Valjeva koji se nadovezao se ranija mišljenja i nalaze Tihomira Popovića - nezavisnog konsultanta i eksperta za kvalitet vazduha, kao i Branislave Matić Savićević - nacionalnog korespodenta Ministarstva zdravlja za životnu sredinu i zdravlje pri SZO.  
                </p>
            </div>
            <div class="image">
                <img src="~/assets/images/gardan_0.jpg" alt="">
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
    &:after {
      content: '';
      display: block;
      width: 60px;
      margin: 15px 0 0;
      border-bottom: 3px solid $ascending-color;
    }
  }

  p {
    max-width: 600px;
  }
  h3 {
    padding: 2rem 0;
  }
  .image {
    max-width: 750px;
    flex-basis: 40%;
    margin-left: 10%;
    display: flex;
    align-items: center;
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
