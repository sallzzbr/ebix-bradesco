<template>
  <v-app>
    <Header/>
    <router-view></router-view>
    <client-modal/>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
import ClientModal from './components/ClientModal.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ClientModal
  },
  data () {
    return {
      //
    }
  }
}
</script>
