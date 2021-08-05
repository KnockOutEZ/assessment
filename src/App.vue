<template>
    <Navbar/>
     <router-view/>
     <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue'

import Footer from './components/Footer.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  components:{
    Navbar,
    Footer,
  },
  created(){
    AOS.init();
  }
}
</script>

<style scoped>
</style>
