<template>
  <div>
    <div class="row" style="justify-content: center;">



      <a-scene arjs='sourceType: webcam; detectionMode: mono; trackingMethod: best;'>

        <!-- here is the marker -->
        <a-marker preset='kanji'>

          <!-- use your gltf model -->
          <a-entity scale="1 1 1" gltf-model="url(/static/gltf/tiki_treasure/scene.gltf)"></a-entity>

        </a-marker>

        <a-marker preset='hiro'>

          <!-- use your gltf model -->
          <a-entity scale="0.3 0.3 0.3" position="0 0 0" gltf-model="url(/static/gltf/capoeira_oldman/scene.gltf)" animation-mixer="clip: mixamo.com;" fbx-model="src: url(/static/fbx/Capoeira.fbx);"></a-entity>
          <a-text position="0 3.5 0" value="Det är Fredag mina bekanta!"></a-text>

        </a-marker>



        <a-entity camera></a-entity>



      </a-scene>



    </div>
  </div>
</template>




















<script src="https://github.com/mrdoob/three.js/blob/master/examples/js/libs/inflate.min.js">

</script>

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
