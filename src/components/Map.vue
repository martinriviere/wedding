<template>
  <div class="map-container">
    <LMap :zoom="zoom" :center="center" :options="mapOptions">
      <LTileLayer :url="url" :options="layerOptions" />
      <LMarker :lat-lng="center" />
    </LMap>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { LMap, LTileLayer, LMarker } from "vue2-leaflet"
// @ts-ignore
import { Icon } from "leaflet"

type D = Icon.Default & {
  _getIconUrl?: string
}

delete (Icon.Default.prototype as D)._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

export default Vue.extend({
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url:
        "https://api.mapbox.com/styles/v1/martinriviere/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      zoom: 10,
      center: [44.729471, -0.421311],
      bounds: null,
      mapOptions: {
        dragging: true
      },
      layerOptions: {
        attribution:
          "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
        accessToken:
          "pk.eyJ1IjoibWFydGlucml2aWVyZSIsImEiOiJjazBubXBvczQwMWRpM2hwcGV4c3pubHJ1In0.qtYexkvHKigcd_hgl4Q9jA",
        id: "ckhjdog8f4a2719kzj5z4kib3",
        tileSize: 512,
        zoomOffset: -1,
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.map-container {
  height: 400px;
}
</style>
