import { LatLngLiteral } from 'leaflet'

export type Marker = { text: string; link?: string; latLng: LatLngLiteral }

export const generateMarker = (text: string, lat: number, lng: number, link?: string): Marker => ({
  text,
  link,
  latLng: {
    lat,
    lng,
  },
})
