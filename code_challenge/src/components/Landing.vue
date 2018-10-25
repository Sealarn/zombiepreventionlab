<template>
  <div>
    <div class="row" style="justify-content: center;">



      <a-scene arjs='sourceType: webcam; detectionMode: mono; trackingMethod: best;'>

        <!-- here is the marker -->
        <a-marker preset='hiro'>

          <!-- use your gltf model -->
          <a-entity scale="1 1 1" gltf-model="url(/static/gltf/tiki_treasure/scene.gltf)"></a-entity>

        </a-marker>


        <a-entity camera></a-entity>



      </a-scene>



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
