<template>
  <div class="row" style="justify-content: center;">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 header mt-5 mb-5">
    </div>
    <div class="col-10 col-sm-10 col-md-8 col-lg-6">
      <b-button class="m-1" v-scroll-to="'#uppdrag'">Skippa backstory</b-button>
    </div>
    <div class="col-10 col-sm-10 col-md-8 col-lg-6 m-5">
      <b-card class="envelope" title="Bakgrund" img-src="http://vamers.com/wp-content/uploads/2017/12/Vamers-Gaming-A-New-Walking-Dead-Game-Is-Coming-From-Payday-Developer-Overkill-02.jpg" img-alt="Image" img-top tag="article">
        Infektionen började i Danmark. De första bilderna som spred sig på nätet blev snabbt avfärdade som fejk. Först några dagar efter att viruset brutit ut så började världen ta hotet allvar. Då var det dock för sent, hela Danmark var smittat och zombies började
        röra sig över gränserna.
        <br>
        <br> Infektionen var snabb och dödlig när den rörde sig genom centrala Europa. Den rörde sig långsammare norrut, men fortfarande snabbt nog att vara en stor fara. Sverige, Norge och Finland är de enda länderna i Europa som fortfarande inte är helt
        utplånade av viruset. Än.

      </b-card>
    </div>
    <div class="col-10 col-sm-10 col-md-8 col-lg-6 m-5" id="uppdrag">
      <b-card class="envelope" title="Uppdrag" img-src="https://i.ytimg.com/vi/MYwo1EwcN1s/maxresdefault.jpg" img-alt="Image" img-top tag="article">
        The infection started in China. The first videos and photos that quickly spread across the web were all dismissed at a ploy, China trying to bait other countries to bring there militaries into some trap. By the time people started believing it, it had
        spread to across all of Asia.
        <br>
        <br> Within days it had reached Europe. Martial law was declared. USA has closed it's borders and international flights. However, (in the USA) most people still go about their daily lives as usual. The status quo has not been shaken. Yet.
      </b-card>
    </div>
    <div class="col-10 col-sm-10 col-md-8 col-lg-6 m-5">
      <b-jumbotron>
        <h5>Choose a filter to fuck your friends</h5>
        <div class="mt-4">
          <b-button class="m-1" href="/fuck_filter">Colorblind</b-button>
          <b-button class="m-1" href="/ass_filter">Monochrome</b-button>
          <b-button class="m-1" href="/hinken_filter">Heatvision</b-button>
        </div>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {}
    },
    created() {},
    methods: {}
  }
</script>

<style lang="scss">

</style>
