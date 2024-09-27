
<template>
    <BCol cols="auto">
        <img :src="getimg(name)" :alt="name" :width="width" :height="height" />
    </BCol>
</template>

<script>
import { BCol } from 'bootstrap-vue-next';
import aws from "@/assets/framework/aws.png"
import mongodb from "@/assets/framework/mongodb.png"
import nodejs from "@/assets/framework/node-js.png"
import rails from "@/assets/framework/rails.png"
import react_js from "@/assets/framework/react-js.png"
import redis from "@/assets/framework/redis.png"
import vue_js from "@/assets/framework/vue-js.svg"
import cpp from "@/assets/framework/cpp.png"
import postgres from "@/assets/framework/postgres.png"
import golang from "@/assets/framework/golang.png"
import globus from "@/assets/framework/globus.png"
import django from "@/assets/framework/django.png"

function getimg(framework) {
    if(framework === 'aws') return aws
    if(framework === 'mongodb') return mongodb
    if(framework === 'rails') return rails
    if(framework === 'node-js') return nodejs
    if(framework === 'react-js') return react_js
    if(framework === 'redis') return redis
    if(framework === 'vue-js') return vue_js
    if(framework === 'cpp') return cpp
    if(framework === 'postgres') return postgres
    if(framework === 'golang') return golang
    if(framework === 'django') return django
    if(framework === 'globus') return globus
}

export default {
    name: 'FrameworkIcon',
    props: {
        name: {
            type: String,
            required: true
        },
        width: {
            type: [String, Number],
            required: true
        },
        height: {
            type: [String, Number],
            required: true
        }
    },
    components: {
        BCol
    },
    setup() {
        return {
            getimg
        }
    }
}
</script>

<style scoped>
img {
    display: block;
}
</style>