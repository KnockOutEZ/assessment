<template>
<h1></h1>
  <div class="grid md:grid-cols-5 ml-3">
      
      <div>Title <br><input type="text" v-model="title" placeholder=""></div>
      <div>Sku <br><input type="text" v-model="sku" placeholder=""></div>
      <div>Unit Price <br><input type="number" v-model="price" placeholder=""></div>
      <div>Currency <br><input type="text" v-model="currency" placeholder=""></div>
      <div class="grid grid-cols-3">
      <div><br><button class="bg-green-400 rounded-lg w-12 h-8  -mt-3" @click="createProduct">Save</button></div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
name: "ProductForm",
  data() {
    return {
      title: '',
      sku: '',
      price: '',
      currency: '',
    };
  },
  props:{
    getProducts:Function
  },
  methods:{
    createProduct(){
      axios({
        method: "Post",
        url: "http://3.1.103.18/products",
        data: {title: this.title,sku: this.sku,unit_price: this.price,currency: this.currency,supplier_id: localStorage.userID},
        headers: { token: localStorage.accessToken },
      })
        .then(function (response) {
          
          //handle success
          getProducts()
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    }
  }
}
</script>

<style>

</style>