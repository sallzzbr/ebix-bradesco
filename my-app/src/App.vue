<template>
  <v-app>
    <Header/>
    <!-- <router-view></router-view>
    <Footer/> -->
  </v-app>
</template>

<script>
import Header from './components/shared/Header.vue'
//import Footer from './components/shared/Footer.vue'

export default {
  name: 'App',
  components: {
    Header
    //Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
