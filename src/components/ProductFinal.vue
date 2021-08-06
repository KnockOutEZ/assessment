<template>
    <ProductForm/>
  <Products :customers='customers'/>
</template>

<script>
// import ProductDetails from '../components/ProductDetails.vue'
import axios from 'axios';
import Products from '../components/Products.vue'
import ProductForm from '../components/ProductForm.vue'
// import { response } from 'express';
export default {
name:'ProductFinal',
data(){
    return{
        url:'http://3.1.103.18/products',
        customers:[]
    }
},
components:{
    // ProductDetails,
    Products,
    ProductForm
},
methods:{
  getCustomers(){
    var vm = this
      axios.get(vm.url).then((response)=>{
        vm.customers = response.data.count
        
      })
    }
}
}
</script>

<style>

</style>