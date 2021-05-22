<template>
  <the-header> </the-header>
  <the-list> </the-list>
</template>

<script>

 import TheHeader from './components/TheHeader.vue'
 import TheList from './components/TheList.vue'

export default {
  name: 'App',
  components: {
    TheHeader, TheList
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');

  body {
    font-family: 'Spartan', sans-serif;
    font-weight: 500;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    background-color: hsl(180, 52%, 96%);
    color: hsl(180, 14%, 20%);
    overflow-x: hidden;
    display: flex;
    justify-content: center;
  }

</style>
