<template>
  <div>
    <div class="row" style="justify-content: center;" v-if="filter === 0">
      <div v-if="filter === 0" class="col-12 col-sm-12 col-md-12 col-lg-12 header mt-5 mb-5">
        <p class="header-title font-effect-decaying">Zombie Prevention Lab</p>
      </div>

      <div v-if="filter === 0" class="col-11 col-sm-11 col-md-8 col-lg-6">
        <b-button class="m-1" v-scroll-to="'#uppdrag'">Skippa backstory</b-button>

        <b-card class="envelope m-4" title="Bakgrund" img-src="http://vamers.com/wp-content/uploads/2017/12/Vamers-Gaming-A-New-Walking-Dead-Game-Is-Coming-From-Payday-Developer-Overkill-02.jpg" img-alt="Image" img-top tag="article">
          Infektionen började i Danmark. De första bilderna som spred sig på nätet blev snabbt avfärdade som fejk. Först några dagar efter att viruset brutit ut så började världen ta hotet allvar. Då var det dock för sent, hela Danmark var smittat och zombies började
          röra sig över gränserna.
          <br>
          <br> Infektionen var snabb och dödlig när den rörde sig genom centrala Europa. Den rörde sig långsammare norrut, men fortfarande snabbt nog att vara en stor fara. Sverige, Norge och Finland är de enda länderna i Europa som fortfarande inte är
          helt utplånade av viruset. Än.
        </b-card>

        <b-card id="uppdrag" class="envelope m-4" title="Uppdrag" img-src="https://i.ytimg.com/vi/MYwo1EwcN1s/maxresdefault.jpg" img-alt="Image" img-top tag="article">
          Ert uppdrag är att stoppa viruset genom att framkalla ett vaccin. Med hjälp av verktygen och kemikalierna i labbet tillsammans med hemliga ledtrådar lämnade av tidigare forskare.
          <br>
          <br> Verktyg 1: Bild verktyg 1
          <br> Verktyg 2: Bild verktyg 2
          <br>
          <br> Genom att granska ledtrådarna och kartan så kan ni hitta lösningen till vaccinet och rädda de människor som finns kvar. Hinner ni inte i tid så är hoppet ute..
        </b-card>

        <b-jumbotron class="m-4">
          <h5>Get your version here:</h5>
          <div>
            <!-- <b-button class="m-1" href="/fuck_filter">Colorblind</b-button>
              <b-button class="m-1" v-bind:active="filter === 2" v-on:click="filter = 2">Monochrome</b-button>
              <b-button class="m-1" v-bind:active="filter === 3" v-on:click="filter = 3">Heatvision</b-button> -->
            <a href="http://play.google.com/store/apps/details?id=com.google.android.apps.maps"><img class="download" src="/static/images/playstore.svg"></a>
            <a href="itms://itunes.apple.com/us/app/apple-store/id375380948?mt=8"><img class="download" src="/static/images/app-store.svg"></a>
          </div>
        </b-jumbotron>

      </div>
    </div>

    <div class="row" style="justify-content: center;" v-if="filter === 1">
      <iframe class="col-6 col-sm-6 col-md-6 col-lg-6" allow="vr" src="/ass_filter"></iframe>
      <iframe class="col-6 col-sm-6 col-md-6 col-lg-6" allow="vr" src="/ass_filter"></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        filter: 0
      }
    },
    created() {},
    methods: {}
  }
</script>

<style lang="scss">

</style>
