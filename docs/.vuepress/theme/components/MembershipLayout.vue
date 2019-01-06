<template>
<b-container fluid class="home-layout">
    <b-row>
        <b-col sm="3">
            <Content slot-key="toc" slot="toc"/>
        </b-col>
        <b-col sm="9">
            <Content slot-key="default" slot="default"/>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import { Layout } from 'bootstrap-vue/es/components';
export default {
    components: { Layout },
    name: 'MembershipLayout'
}
</script>
