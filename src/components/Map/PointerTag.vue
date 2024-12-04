<template>
    <l-marker :lat-lng="coordinates">
        <l-popup>
        {{name}}
        </l-popup>
    </l-marker>
</template>

<script>
import {
    LMarker,
    LPopup,
  } from "@vue-leaflet/vue-leaflet";
  import "leaflet/dist/leaflet.css";

export default {
    name: 'PointerTag',
    props: {
        coordinates: Array,
        name: String,
        color: String
    },
    components: {
        LPopup,
        LMarker
    }
}

</script>