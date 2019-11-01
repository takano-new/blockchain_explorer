<template>
    <div id="app">
        <h1>Nuxt API Test</h1>
        <div class="itemContainer">           
            {{items}}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from './index'
export default {  
    data () {
        return {
            txid: ''
        }
    },
    async asyncData({ store,route }) {
        if (store.getters['items'].length) {
            return
        }
        await store.dispatch('fetchItems', {
          content: {"type":"traverse","conditions":{"txid":route.params.txids}}
        })
    },
    computed: {
        ...mapGetters(['items'])
    }
}
</script>
 
<style scoped>
.itemContainer{
    display: flex;
}
</style>