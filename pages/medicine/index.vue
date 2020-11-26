<template>
    <section>
     <div class="container">
        <div class="content">
            <div>
                <h1>Zdravstveni turizam</h1>
            <p>Lečenje u Sokobanji obavlja se, na osnovu utvrdjenih indikacija, kupanjem u toploj, blago radioaktivnoj vodi i inhalacijom, prema uputu i pod nadzorom lekara. Sokobanjski vazduh, sam po sebi, je lek za obolele od astme.

            Termalni izvori Sokobanje spadaju medju najradioaktivnije u ovom delu Evrope. Ukupno je sest glavnih, cija se temperatura vode krece od 28-45 stepeni. Obzirom da je izbijanje radioaktivnih gasova na citavoj teritoriji Banje veliko, svaki posetilac je izlozen blagoj inhalaciji, sto veoma korisno utice na diasjne organe i ceo organizam.</p>


            <h3>Specijalna bolnica za plucne i ocne bolesti i tuberkulozu "Ozren"</h3>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa esse explicabo quaerat asperiores, dicta sit dignissimos nihil alias aut iusto id nam numquam ab, rem sed saepe totam non voluptatum!</p>

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
  height: 100vh;
  max-width: 1360px;
  padding: 40px 20px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}
.content {
  padding-top: 6rem;
  display: flex;

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
    flex-basis: 40%;
    margin-left: 10%;

    img {
      width: 100%;
      border-radius: 6px 6px 6px 6px;
      box-shadow: 0px 40px 50px -20px rgba(0, 0, 0, 0.35);
      //opacity: 0.8;
    }
  }
}
</style>
