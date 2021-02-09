<template>
    <section>
     <div class="container">
        <div class="content">
            <div>
                <h1>Sokobanja Zeleno Srce srbije</h1>
                <h3>Odgovori na večito pitanje, šta je to u Sokobanji što pozitivno utiče na naše zdravlje, stvarnost ili zabluda?</h3>
                    <p>Mnogi su bili u Sokobanji, mnogi nisu, ali ogromna većina ljudi u Srbiji  zna za Sokobanju zahvaljujući ovoj Nušićevoj krilatici. Ostaje pitanje, šta je to navelo Nušića da napiše ovakav tekst, da li je on stvarno imao osećaj da ga boravak u Sokobanji podmlaćuje i zašto? Činjenica je da veliki broj gostiju u Sokobanji navodi da ima isti osećaj nakon boravka u Sokobanji, da se osećaju svežije, da imaju više snage i energije, da su im zdravstvene tegobe manje ili potpuno nestale, jednostavno da im je boravak jako prijao. Veliki broj plućnih bolesnika navodi da nakon boravka u Sokobanji, provedu celu zimu bez većih zdravstvenih problema, dok u slučajevima kada preskoče da dođu u Sokobanju budu u nekoliko navrata u bolnici zbog pogoršanja. Ne treba ni pričati o broju dece kojima je boravak u Sokobanji pomogao da eliminišu svoje tegobe sa disanjem. Koliko je taj klimatski faktor značajan govori i činjenica da je na teritoriji opštine Sokobanja davne 1934.g. započeta gradnja Sanatorijuma Ozren, a u cilju lečenja obolelih od tuberkuloze pluća. Tada je formirana specijalna komisija sastavljena od vrhunskih lekara tog doba iz Austrije i Jugoslavije čiji je zadatak bio da na području stare Jugoslavije nađe destinaciju koja ima klimatske uslove slične Davosu u Švajcarskoj. Posle višegodišnjeg rada izbor je bio Ozren, u Sokobanji. Razloga ima na pretek, ali prvo nešto malo o Sokobanji.</p>
                    <p>
                      Sokobanja je mesto na nadmorskoj visini od oko 400 metara, nalazi se u Sokobanjskoj kotlini oivičena planinskim vencima sa svih strana. Izložena je delovanju dveju važnih vazdušnih struja, sa jedne strane iz Timočke krajine i Karpata, a sa druge iz Pomoravlja. Njihovo međusobno delovanje jako utiče na klimatske prilike u Sokobanji. U svakom  slučaju, mnogim ljudima, pre svega plućnim bolesnicima boravak u Sokobanji jako prija, te se zbog toga i beleži visoka posećenost Sokobanje. U prošlom veku Sokobanju su uglavnom posećivali bolesnici tražeći lek za svoje zdravstvene probleme, penzioneri u želji da sačuvaju i unaprede svoje zdravlje. U novije doba se situacija delom menja sa činjenicom da Sokobanju posećuje sve veći broj mladih i zdravih ljudi sa željom da  boravkom u njoj preveniraju potencijalne zdravstvene probleme u budućnosti, da unaprede svoje zdravstveno stanje, da uživaju u turističkim potencijalima Sokobanje i njenoj ponudi ( spa i wellnes turizam,aqua park,turističko ugostiteljski sadržaji).  Ovogodišnja rekordna posećenost Sokobanje pokazuje da su njeni potencijali ogromni, priroda je bila izdašna prema Sokobanji, ostaje da Sokobanjčani urade sve što je u njihovoj mogućnosti da se taj prirodni potencijal iskoristi.
                      Na kraju ovog prvog dela teksta samo informacija da ćemo probati da damo odgovor na sva ova pitanja, ali želimo da ova priča bude interaktivna sa ljudima koji posećuju i vole Sokobanju, da nam prenesu svoje utiske i iskustva i da daju svoje mišljenje o pomenutoj temi. U narednim tekstovima, koje ćemo objavljivati jednom nedeljno probaćemo da damo odgovor na gore zadata pitanja a svako dobronameran može da se uključi u dijalog koji kao krajnji cilj ima da se unaprede turistički potencijali Sokobanje.


                     <span>
                       dr Milovan Šarović - specijalista za bolesti pluća
                     </span>
                    </p>
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

    color: #000;
    font-family: 'Lora', serif;
    position: relative;
    padding: 1rem 0;
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
    line-height: 1.7;
  }
  h3 {
    padding: 2rem 0;
  }
  span {
    display: block;
    padding: 1rem 0;
    font-weight: 900;
    font-style: italic;
  }
  .image {
    //max-width: 750px;
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
