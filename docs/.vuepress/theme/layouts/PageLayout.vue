<template>
<b-container fluid class="home-layout">
    <b-row>
        <b-col sm="3">
        </b-col>
        <b-col sm="9">
            <Content/>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import { Layout } from 'bootstrap-vue/es/components';
export default {
    components: { Layout },
    name: 'PageLayout'
}
</script>
