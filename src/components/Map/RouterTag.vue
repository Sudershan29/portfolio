<template>
    <l-polyline
        :lat-lngs="coordinates"
        :color="color"
    ></l-polyline>
</template>

<script>
import {
    LPolyline,
  } from "@vue-leaflet/vue-leaflet";
  import "leaflet/dist/leaflet.css";

export default {
    name: 'RouterTag',
    props: {
        coordinates: Array,
        name: String,
        color: String
    },
    components: {
        LPolyline
    }
}

</script>