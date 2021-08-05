<template>
  <div class="my-8 container mx-auto" data-aos-duration="1000" data-aos="fade-down">
    <StatisticsCard/>
  </div>
  <div class="my-8 container mx-auto" data-aos="zoom-in">
    <Graph/>
  </div>
</template>

<script>
import Graph from './Graph.vue'
import StatisticsCard from './StatisticsCard.vue'
import AOS from "aos";
import "aos/dist/aos.css";

export default {
name:'Statistics',
created() {
    AOS.init();
  },
components:{
    Graph,
    StatisticsCard,
}
}
</script>

<style >

</style>