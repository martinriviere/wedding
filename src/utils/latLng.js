export const generateMarker = (text, lat, lng, link) => ({
  text,
  link,
  latLng: {
    lat,
    lng,
  },
})
