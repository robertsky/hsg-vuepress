<template>
<b-container fluid class="home-layout">
    <b-row>
        <b-col v-bind:md="sidebarSize" class="sidebar-container" v-if="hideSidebar === false">
            <b-row class="sidebar d-none d-md-flex">
                <b-col class="sidebar-toc">
                    <h3>Table of Contents</h3>
                    <Content slot-key="toc" slot="toc"/>
                </b-col>
                <b-col cols="12" md="auto" class="sidebar-icons">
                    <span class="sidebar-toggle" @click="toggleSidebarState">
                        <font-awesome-icon v-bind:icon="sidebarToggleIconState" />
                    </span>
                </b-col>
            </b-row>
        </b-col>
        <b-col v-bind:cols="contentSize" class="content-container">
            <Content slot-key="default" slot="default"/>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import { Layout } from 'bootstrap-vue/es/components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faToggleOff)
library.add(faToggleOn)
export default {
    name: 'PageLayout',
    components: { Layout, FontAwesomeIcon },
    data: function() {
        return {
            sidebarOpenState: true,
            hideSidebar: false
        }
    },
    computed: {
        contentSize: function() {
            var cSize = '10';
            if (!!this.hideSidebar || !this.sidebarOpenState) {
                cSize = '12';
            }
            return cSize;
        },
        sidebarSize: function() {
            return (!!this.sidebarOpenState) ? '2' : 'auto';
        },
        sidebarToggleIconState: function() {
            return (!!this.sidebarOpenState ? 'toggle-on' : 'toggle-off');
        }
    },
    methods: {
        toggleSidebarState () {
            this.sidebarOpenState = !this.sidebarOpenState;
            var elem = document.querySelector('.sidebar-toc');
            if (this.sidebarOpenState) {
                if (elem.className.length > 0) {
                    elem.className += 'd-none';
                } else {
                    elem.className = 'd-none';
                }
            } else {
                elem.className
            }
            (this.sidebarOpenState) ? removeClass('d-none', elem) : addClass('d-none', elem);
        }
    },
    watch: {
        '$route' (to, from) {
            var elems = document.querySelectorAll('.table-of-contents > ul > li > a');
            for(var i = 0; i < elems.length; i++) {
                elems[i].className = '';
            }
            document.querySelector('.table-of-contents > ul > li > a[href="' + to.hash + '"]').className = 'active';
        }
    }
}

function removeClass( classname, element ) {
    var cn = element.className;
    var rxp = new RegExp( "s?b"+classname+"b", "g" );
    cn = cn.replace( rxp, '' );
    element.className = cn;
}

function addClass( classname, element ) {
    var cn = element.className;
    //test for existance
    if( cn.indexOf( classname ) != -1 ) {
        return;
    }
    //add a space if the element already has class
    if( cn != '' ) {
        classname = ' '+classname;
    }
    element.className = cn+classname;
}

</script>

<style lang="stylus">
.sidebar {
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
}
.content.default h1,.content.default h2,.content.default h3,.content.default h4 {
    padding-top: 70px;
    margin-block-start: -60px;
    margin-top:-60px;
}
.header-anchor {
    display:none;
}
.content.default {
    max-width: 60em;
    margin: 0 auto;
}
.sidebar-icons {
    border-right: thick double darkred;
}
.sidebar-toggle {
    cursor: pointer;
}
.toc li {
    list-style-type: none;
    line-height: 1.7;
}

.toc li a {
    display: inline-block;
}

.toc li a.active {
    font-weight: 600;
    color: #dd083d;
    border-left-color: #dd083d;
}
</style>