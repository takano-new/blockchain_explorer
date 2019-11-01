<template>
    <div id="app">
        <nuxt-link :to="{name:'search-result',params:{txids:txid}}">apiアクセス</nuxt-link>
    <input id="txid" v-model="txid"
        type="text"
        class="add-input"
        autofocus="autofocus"
        placeholder="txid"
        @keyup.enter="handleAdd" value="0"
        >
    </div>
</template>

<script>
import {
  mapState, mapActions
} from 'vuex'
export default {
    ...mapActions(['login']),
    data () {
        return {
            txid: ''
        }
    },
    methods: {
        handleAdd: function (e) {
            alert(12)
        },
        searchResult: function (e) {
            alert(23)
        }
    }  
}

</script>