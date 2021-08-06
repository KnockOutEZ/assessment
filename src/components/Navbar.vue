<template>
      <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
     <router-link to="/">
        <a class="text-white font-bold uppercase text-2xl mr-4 hover:text-yellow-400">Techynaf</a>
     </router-link>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <a v-show="isAuthenticated == false" class="px-2 text-white hover:text-yellow-400" @click="toggleAuthModal">
              Login / Register
              </a>
              <a  v-show="isAuthenticated == true" class="px-2 text-white hover:text-yellow-400" @click="toggleAuthModal">
              <p @click="logout()"><span>Logout</span> </p>
              </a>
          </li>
          <!-- <li>
            <a class="px-2 text-white" href="#">Manage</a>
          </li> -->
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name:"Navbar",
    data(){
      return{
      }
    },computed:{
      isAuthenticated(){
        return this.$store.state.isAuthenticated 
      }
    },
    methods:{
        ...mapMutations(['toggleAuthModal']),
        logout() {
          console.log(this.isAuthenticated)
  if(this.isAuthenticated== true) {
    // If not authenticated, add a path where to redirect after login.
    this.$store.commit('toggleAuthenticated')
    this.$router.push({ name: 'Home' });
    localStorage.removeItem("accessToken") 
    localStorage.removeItem("refreshToken")
    // window.location.reload();
  }
},

    }
}
</script>

<style>

</style>