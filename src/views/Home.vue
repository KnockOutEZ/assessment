<template>
    <!-- <Preloader/> -->
  <section class="mb-8 py-20 text-white text-center relative header">
    <div
      class="absolute inset-0 w-full h-full bg-contain introduction-bg"
    ></div>
    <div class="container mx-auto">
      <div class="text-white main-header-content">
        <h1 class="font-bold text-5xl mb-5">LETS BUILD OUR FUTURE!</h1>
        <p class="w-full md:w-8/12 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et
          dolor mollis, congue augue non, venenatis elit
        </p>
      </div>
    </div>

    <!-- <img class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full"
      src="../images/introduction-music.png" /> -->
  </section>
<section class="container mx-auto">
  <section>
    <div  class="grid md:grid-cols-2 mb-10 mt-24">
      <div data-aos-duration="2000" data-aos="fade-right" class="w-3/4 my-auto mx-auto text-left">
        <h1 class="text-3xl font-bold my-5">Top marketing agency & consult your website with us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio
        reprehenderit, minima pariatur accusantium autem tempore accusamus.
        Iusto eum quas sit enim architecto nisi minus a debitis! Suscipit, ad
        esse?Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <img data-aos-duration="2000" data-aos="fade-left" src="../images/about-left-image.png" alt="" />
      </div>
    </div>
  </section>

    <section>
    <div class="grid md:grid-cols-2 mb-10">
      <div>
        <img data-aos-duration="2000" data-aos="fade-right" src="../images/banner-right-image.png" alt="" />
      </div>
      <div data-aos-duration="2000" data-aos="fade-left" class="w-3/4 my-auto mx-auto text-left">
        <h1 class="text-3xl font-bold my-5">Top marketing agency & consult your website with us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio
        reprehenderit, minima pariatur accusantium autem tempore accusamus.
        Iusto eum quas sit enim architecto nisi minus a debitis! Suscipit, ad
        esse?Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </section>
</section>
  <Auth/>
  <br><br><br>
</template>


<script>
// import Preloader from '../components/Preloader.vue'
import AOS from "aos";
import "aos/dist/aos.css";
import Auth from '../components/Auth.vue';

export default {
  name: "Home",
  components:{
    // Preloader
        Auth,
  },
  created() {
    AOS.init();
  },
};
</script>

<style scoped>
.header{
  height: 40vh;
}

a {
  transition: all 0.15s ease;
}
a:hover {
  color: #f59e0b;
  text-decoration: none;
}
.text-orange {
  color: #f59e0b !important;
  fill: #f59e0b !important;
}

.player-scrub,
.player-song-info {
  width: calc(100% - 250px);
}

.top-neg-8 {
  top: -8px;
}
.player-song-info {
  margin-top: -24px;
}

.card-header .fa.text-orange,
.card .card-header .fas.text-orange {
  color: #ff5e3a;
  fill: #ff5e3a;
}

.introduction-bg {
  background-image: url("../images/header.png");
  animation: slide 50s linear infinite;
  will-change: background-position;
  z-index: -1;
  height: 45vh;
}

#playlist li:first-child {
  padding-top: 25px;
}

.upload-dropbox.upload-dropbox-drag {
  color: #fff;
  background-color: #20d862;
  border-color: #20d862;
  border-style: solid;
}

input[type="file"] {
  margin-top: 20px;
}

.progress-bar {
  background-size: 1rem 1rem;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  animation: progress-bar-stripes 1s linear infinite;
}

@keyframes progress-bar-stripes {
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
}

@keyframes slide {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -4000px 0;
  }
}
</style>