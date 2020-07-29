<template>
  <div id="app">
    <div id="innerApp">
      <Header/>
      <Items :items="items"/>
      <Footer :items="items"/>
    </div>
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
#app {
  width: 500px;
  left: 50%;
  margin-left: -250px;
  position: relative; 
}

#innerApp {
  padding: 7px;
}

@media(max-width: 600px) {
  #app {
    width: 100%;
    left: 0;
    margin-left: 0;
  }
}
</style>
