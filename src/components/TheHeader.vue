<template>
    <div class="header">
        <div class="wrapper" :style="{backgroundImage:`url(${bgImage[0]})`}"> 

        </div>
    </div>
</template>

<script>
export default {

    computed: {
        bgImage() {
        return this.$store.getters.header
      }

    }


}
</script>

<style scoped>

    .header {
        height: 20vh;
        width: 100vw;
        background-color:  hsl(180, 29%, 50%);
        


    }

    .wrapper {
        background-size: cover;
        background-position: top;
        width: 100%;
        padding: 10vh;
    }

</style>