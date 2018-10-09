<template>
  <div id="aframe">
    <a-scene arjs='sourceType: webcam; detectionMode: mono; trackingMethod: best;'>
      <!-- here is a kanji preset -->
      <a-marker preset='kanji'>
        <a-text position="0.5 1.5 0" value="My name is SPLOOSCH,"></a-text>
        <a-text position="0.5 1.2 0" value="here is a hint!"></a-text>
        <!-- use your gltf model -->
        <a-entity scale="0.15 0.15 0.15" gltf-model="url(/static/gltf/dr._plague/scene.gltf)"></a-entity>
        <a-entity scale="0.6 0.6 0.6" gltf-model="url(/static/gltf/TwoSidedPlane/scene.gltf)"></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
      }
    },
    created() {},
    methods: {}
  }
</script>
<style lang="scss">
  #aframe {
    position:'absolute'; height: '100%'; width: '100%';
  }
</style>