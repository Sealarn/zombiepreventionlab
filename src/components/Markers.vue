<template>
  <div>
    <div class="row row-center">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 header mt-5 mb-5">
        <p class="header-title font-effect-decaying">Markörer</p>
      </div>

      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
        <b-button class="m-4" href="/">Tillbaka</b-button>
      </div>

      <div class="col-sm-4">
        <img class="mark_img" src="/static/images/enigma2.png"/>
      </div>
      <div class="col-sm-3">
        <img class="mark_img" src="/static/images/che1.jpg" />
      </div>
      <div class="col-sm-3">
        <img class="mark_img" src="/static/images/chem1.jpg" />
      </div>
      <div class="col-sm-3">
          <img class="mark_img" src="/static/images/chem2.jpg" />
      </div>
      <div class="col-sm-3">
        <img class="mark_img" src="/static/images/chem3.jpg" />
      </div>
      <div class="col-sm-3">
        <img class="mark_img" src="/static/images/chem4.jpg" />>
      </div>
      <div class="col-sm-3">
        <img class="mark_img" src="/static/images/chem5.jpg" />
      </div>
      <div class="col-sm-3">
        <img class="mark_img" src="/static/images/chem6.jpg" />
      </div>
      <div class="col-sm-3">
        <img class="mark_img" src="/static/images/eng1.jpg" />
      </div>
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
.row-center {
  justify-content: center;
}
.mark_img {
  width: 100%;
}
</style>