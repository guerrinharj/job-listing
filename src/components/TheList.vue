<template>
    <div class="list" :class="{filtered: filtered}">
        <div class="list-wrapper">

            <the-bar v-if="filtered"> </the-bar>

            <div class="item-area" v-for="item in jobs" :key="item"> 
                <list-item
                :logo="item.logo"
                :company="item.company"
                :newer="item.newer"
                :featured="item.featured"
                :position="item.position"
                :info="item.info"
                :categories="item.categories"
                :appear="item.appear"
                > 
                </list-item>
            </div>
            
        </div>
    </div>
</template>

<script>

import ListItem from './ListItem.vue'
import TheBar from './TheBar.vue'


export default {

    components: {
        ListItem, TheBar
    },

    computed: {
        jobs() {
        return this.$store.getters.jobs
      },
        filtered() {
        return this.$store.getters.filtered
      }
    }
    
}
</script>

<style scoped>

    .filtered {
        transform: translateY(-3%)
    }

    .list-wrapper {
        width: 70vw;
        margin:  auto;
    }

    .item-area {
        width: 100%;
    }

@media (max-width: 600px) {

    .list-wrapper {
        width: 90vw;
        margin: 50px auto;
    }


}

</style>