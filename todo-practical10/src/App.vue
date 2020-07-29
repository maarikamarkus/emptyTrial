<template>
  <div id="app">
    <Header/>
    <Items :items="items"/>
    <Footer :items="items"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Items from './components/Items.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Items,
    Footer
  },
  data() {
    return {items: [{title: "item1", state: false},
                    {title: "item2", state: true}]}
  }
}
</script>

<style>

</style>
