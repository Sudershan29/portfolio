<template>
    <!-- <div style="height: 75vh; width: 205vh;"> -->
    <BContainer style="margin: 0px;">
        <BRow style="height: 75vh; width: 180vh;">
            <l-map
                v-model="zoom"
                v-model:zoom="zoom"
                v-model:minZoom="minZoom"
                v-model:maxZoom="maxZoom"
                v-model:maxBounds="maxBounds"
                :center="[39.0928681411259, -94.57970296506663]"
            >
                <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                ></l-tile-layer>

                <PointerTag
                    v-for:="place in visitedPlaces"
                    :coordinates="place.coordinates" 
                    :name="place.names"
                    :color="place.color"
                />

                <RouterTag
                    v-for:="route in drivenRoutes"
                    :coordinates="route.coordinates"
                    :name="route.name"
                    :color="route.color"
                />
            </l-map>
        </BRow>
    </BContainer>
</template>
<script>
import {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { getVisitedPlaces, getDrivenRoutes, getWantToGoPlaces } from "./mock/api/Locations.js"
import PointerTag from "./components/Map/PointerTag.vue"
import RouterTag from "./components/Map/RouterTag.vue"
import { BContainer, BRow } from 'bootstrap-vue-next';

export default {
    components: {
        LMap,
        PointerTag,
        RouterTag,
        LTileLayer,
        BContainer,
        BRow
        // LPolyline,
    },
    data() {
        return {
        zoom: 5,
        minZoom: 4,
        maxZoom: 10,
        maxBounds: [[58.089224917165296, -156.68439150317212], [12.45100735350961, -36.33555171193504]],
        visitedPlaces: getVisitedPlaces(),
        drivenRoutes: getDrivenRoutes(),
        toGoNext: getWantToGoPlaces
        };
    },
};
</script>