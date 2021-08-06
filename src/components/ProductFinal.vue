<template>
  <ProductForm />
  <Products :products="products" />
</template>

<script>
// import ProductDetails from '../components/ProductDetails.vue'
import axios from "axios";
import Products from "../components/Products.vue";
import ProductForm from "../components/ProductForm.vue";
// import { response } from 'express';
export default {
  name: "ProductFinal",
  data() {
    return {
      products: [],
    };
  },
  components: {
    // ProductDetails,
    Products,
    ProductForm,
  },
  created() {
    this.getproducts();
  },
  methods: {
    getproducts() {
      // axios.get(vm.url).then((response)=>{
      //   vm.productss = response.data.count
      //   console.log('response')
      // })
      console.log(localStorage.accessToken);
      var vm=this
      axios({
        method: "GET",
        url: vm.$BaseUrl + "products",
        headers: { token: localStorage.accessToken },
      })
        .then(function (response) {
          vm.products = response.data.products;
          //handle success
          
          console.log(response.data.products);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    },
  },
};
</script>

<style>
</style>