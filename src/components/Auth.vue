<template>
  <!-- Auth Modal -->
  <!-- use :class="{hidden: !modal}" to call alias -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    id="modal"
    :class="{ hidden: !authModalShow }"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block
        sm:p-0
      "
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >

      <div
        class="
          inline-block
          align-bottom
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8
          sm:align-middle
          sm:max-w-lg
          sm:w-full
        "
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div
              class="modal-close cursor-pointer z-50"
              @click="toggleAuthModal"
            >
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition"
                href="#"
                :class="{
                  'hover:text-white text-white bg-blue-600': tab === 'login',
                  'hover:text-blue-600': tab === 'registration',
                }"
                @click.prevent="tab = 'login'"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition"
                href="#"
                :class="{
                  'hover:text-white text-white bg-blue-600':
                    tab === 'registration',
                  'hover:text-blue-600': tab === 'login',
                }"
                @click.prevent="tab = 'registration'"
                >Register</a
              >
            </li>
          </ul>

          <!-- Login Form -->
          <vee-form
            v-show="tab === 'login'"
            :validation-schema="loginschema"
            @submit="login"
          >
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <vee-field
                name="email"
                type="email"
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
                placeholder="Enter Email"
              />
              <ErrorMessage class="text-red-600" name="email" />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <vee-field
                name="password"
                type="password"
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
                placeholder="Password"
              />
              <ErrorMessage class="text-red-600" name="password" />
            </div>
            <button @click="onLinkClicked()"
              type="submit"
              class="
                block
                w-full
                bg-purple-600
                text-white
                py-1.5
                px-3
                rounded
                transition
                hover:bg-purple-700
              "
            >
              <span @click="toggleAuthModal">Submit</span>
            </button>
          </vee-form>
          <!-- Registration Form -->
          <vee-form
            v-show="tab === 'registration'"
            :validation-schema="schema"
            @submit="register"
          >
            <!-- Name -->
            <div class="mb-3">
              <label class="inline-block mb-2">Name</label>
              <vee-field
                name="name"
                type="text"
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
                placeholder="Enter Name"
              />
              <ErrorMessage class="text-red-600" name="name" />
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <vee-field
                name="email"
                type="email"
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
                placeholder="Enter Email"
              />
              <ErrorMessage class="text-red-600" name="email" />
            </div>
            <!-- Age
            <div class="mb-3">
              <label class="inline-block mb-2">Age</label>
              <vee-field name="age" type="number"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded" />
              <ErrorMessage class="text-red-600" name="age"/>
            </div> -->
            <div class="mb-3">
              <label class="inline-block mb-2">Company</label>
              <vee-field
                name="company"
                type="text"
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
                placeholder="Enter company"
              />
              <ErrorMessage class="text-red-600" name="company" />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <vee-field
                name="password"
                type="password"
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
                placeholder="Password"
              />
              <ErrorMessage class="text-red-600" name="password" />
            </div>
            <!-- Confirm Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Confirm Password</label>
              <vee-field
                name="confirm_password"
                type="password"
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
                placeholder="Confirm Password"
              />
              <ErrorMessage class="text-red-600" name="confirm_password" />
            </div>
            <!-- Country -->
            <div class="mb-3">
              <label class="inline-block mb-2">User Type</label>
              <vee-field
                as="select"
                name="isSupplier"
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
              >
                <option value="true">Supplier</option>
                <option value="false">Company User</option>
              </vee-field>
              <ErrorMessage class="text-red-600" name="isSupplier" />
            </div>
            <!-- TOS -->
            <div class="mb-3 pl-6">
              <vee-field
                name="tos"
                value="1"
                type="checkbox"
                class="w-4 h-4 float-left -ml-6 mt-1 rounded"
              />
              <label class="inline-block">Accept terms of service</label>
            </div>
            <ErrorMessage class="text-red-600" name="tos" />
            <button
              type="submit"
              class="
                block
                w-full
                bg-purple-600
                text-white
                py-1.5
                px-3
                rounded
                transition
                hover:bg-purple-700
              "
            >
              <span @click="toggleAuthModal">Submit</span>
            </button>
          </vee-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import axios from "axios";

export default {
  name: "Auth",
  data() {
    return {
      tab: "login",
      loginschema: {
        email: "required|min:3|max:20|email",
        password: "required|min:5|max:20",
      },
      schema: {
        name: "required|min:3|max:100|alpha_spaces",
        email: "required|min:3|max:20|email",
        company: "required",
        password: "required|min:5|max:20",
        confirm_password: "required|confirmed:@password",
        isSupplier: "required",
        tos: "required",
      },

      isAuthenticated:this.$store.state.isAuthenticated
    };
  },
  computed: {
    ...mapState(["authModalShow"]),
  },
  methods: {
    ...mapMutations(["toggleAuthModal"]),

    register(value) {
      console.log(value);
      var vm = this
      axios({
        method: "post",
        url: this.$BaseUrl + 'users/signup',
        data: value,
        headers: { "Content-Type": "application/json","Access-Control-Allow-Origin": "*", },
      })
        .then(function(response) {
          //handle success
          console.log(response);
          localStorage.refreshToken = response.data.refresh_token
          localStorage.accessToken = response.data.access_token 
          vm.$store.commit('toggleAuthenticated')
          vm.isAuthenticated = true
          vm.onLinkClicked()
        })
        .catch(function(response) {
          //handle error
          console.log(response);
        });

        
    },
    login(value) {
      console.log(value);
      var vm = this
      axios({
        method: "post",
        url: this.$BaseUrl + 'users/login',
        data: value,
        headers: { "Content-Type": "application/json","Access-Control-Allow-Origin": "*", },
      })
        .then(function(response) {
          //handle success
          // this.$router.push({
          //       path: '/search',
          //   })
          console.log(response);
          localStorage.refreshToken = response.data.refresh_token
          localStorage.accessToken = response.data.access_token 
          vm.$store.commit('toggleAuthenticated')
          vm.isAuthenticated = true
          vm.onLinkClicked()
        })
        .catch(function(response) {
          //handle error
          console.log(response);
        });
    },
    onLinkClicked() {
  if(this.isAuthenticated=== true) {
    // If not authenticated, add a path where to redirect after login.
    this.$router.push({ name: 'Dashboard' });
  }
}
  },
};
</script>

<style>
div {
  color: black;
}
</style>
