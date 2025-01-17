<template>
  <ClientOnly>
    <div class="map-container">
      <LMap :zoom="zoom" :center="center" :options="mapOptions">
        <LTileLayer :url="url" :options="layerOptions" />
        <LMarker v-for="marker in importantPlaces" :icon="importantIcon" :lat-lng="marker.latLng" :key="marker.popup">
          <LPopup>
            <a :href="marker.link" :style="!marker.link && 'color: black;'" target="_blank">{{ marker.text }}</a>
          </LPopup>
        </LMarker>
        <LMarker v-for="marker in markers" :lat-lng="marker.latLng" :key="marker.popup">
          <LPopup>
            <a :href="marker.link" :style="!marker.link && 'color: black;'" target="_blank">{{ marker.text }}</a>
          </LPopup>
        </LMarker>
      </LMap>
    </div>
  </ClientOnly>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Marker } from '../utils/latLng'

// @ts-ignore
const isClient = process.isClient
let Icon: { new(arg0: { iconRetinaUrl: any; iconUrl: any; iconSize: number[] }): any; Default: { prototype: any; mergeOptions: (arg0: { iconRetinaUrl: any; iconUrl: any; iconSize: number[]; shadowUrl: null }) => void } }

if (isClient) {
  Icon = require('leaflet').Icon

  // @ts-ignore
  type D = Icon.Default & {
    _getIconUrl?: string
  }

  delete (Icon.Default.prototype as D)._getIconUrl
  Icon.Default.mergeOptions({
    iconRetinaUrl: require('../assets/img/map/blue-icon-2x.png'),
    iconUrl: require('../assets/img/map/blue-icon.png'),
    iconSize: [35, 35],
    shadowUrl: null,
  })
}

export default Vue.extend({
  components: {
    LMap: () => import('vue2-leaflet').then((m) => m.LMap),
    LTileLayer: () => import('vue2-leaflet').then((m) => m.LTileLayer),
    LMarker: () => import('vue2-leaflet').then((m) => m.LMarker),
    LPopup: () => import('vue2-leaflet').then((m) => m.LPopup),
  },
  props: {
    center: Object,
    importantPlaces: Array as PropType<Marker[]>,
    markers: Array as PropType<Marker[]>,
    zoom: { type: Number, default: 10 },
  },
  data() {
    return {
      url: 'https://api.mapbox.com/styles/v1/martinriviere/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      bounds: null,
      mapOptions: {
        dragging: true,
        scrollWheelZoom: false,
      },
      layerOptions: {
        attribution:
          "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
        accessToken:
          'pk.eyJ1IjoibWFydGlucml2aWVyZSIsImEiOiJjazBubXBvczQwMWRpM2hwcGV4c3pubHJ1In0.qtYexkvHKigcd_hgl4Q9jA',
        id: 'ckhjdog8f4a2719kzj5z4kib3',
        tileSize: 512,
        zoomOffset: -1,
      },
      importantIcon: new Icon({
        iconRetinaUrl: require('../assets/img/map/red-icon-2x.png'),
        iconUrl: require('../assets/img/map/red-icon.png'),
        iconSize: [35, 35],
      }),
    }
  },
})
</script>

<style lang="scss" scoped>
.map-container {
  height: 400px;
}
</style>
