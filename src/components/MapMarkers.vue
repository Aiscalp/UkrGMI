<template>
  <div style="height: 800px; width: auto">
    <l-map ref="map" v-model:zoom="zoom" :center="[48.3794, 31.1656]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 6,
    };
  },
};
</script>

<style></style>
