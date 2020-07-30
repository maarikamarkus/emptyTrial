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
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    Items,
    Footer
  },
  
  data() {
    return {
      items: []
    }
  },

  async created() {
      let res = await axios.get('http://localhost:3000/todo');
      this.items = res.data;
  },
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  width: 500px;
  left: 50%;
  margin-left: -250px;
  position: relative;
  color: #086972;
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
