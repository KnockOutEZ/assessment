<template>
  <div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex">
      <h1 class="text-3xl">Users</h1>
    </div>
    <div class="px-3 py-4 flex justify-center">
      <table class="w-full text-md bg-white shadow-md rounded mb-4">
        <tbody>
          <tr class="border-b">
            <th class="text-left p-3 px-5">Sl</th>
            <th class="text-left p-3 px-5">Title</th>
            <th class="text-left p-3 px-5">Sku</th>
            <th class="text-left p-3 px-5">Price</th>
            <th></th>
          </tr>
          <tr  v-for="(product,index) in products" :key="product.id" class="border-b hover:bg-orange-100 bg-gray-100">
            <td class="p-3 px-5">
              {{index + 1}}
            </td>
            <td class="p-3 px-5">
              {{product.title}}
            </td>
            <td class="p-3 px-5">
              {{product.sku}}
            </td>
            <td class="p-3 px-5">
              {{product.unit_price}} {{product.currency}}
            </td>
            <td class="p-3 px-5 flex justify-end">
              <button
                type="button"
                class="
                  mr-3
                  text-sm
                  bg-blue-500
                  hover:bg-blue-700
                  text-white
                  py-1
                  px-2
                  rounded
                  focus:outline-none
                  focus:shadow-outline
                "
              >
                Edit</button
              ><button @click="Ondelete(product.id)"
                type="button"
                class="
                  text-sm
                  bg-red-500
                  hover:bg-red-700
                  text-white
                  py-1
                  px-2
                  rounded
                  focus:outline-none
                  focus:shadow-outline
                "
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- component
<div class="flex flex-col h-min w-56 p-1 border-box bg-white rounded xl my-2">
        <div class="flex rounded flex-col w-ful w-full h-48 bg-gray-200 image">
            <br>
            <div class="bg-red-500 text-white w-1/4 text-center rounded-r-xl">
                NEW
            </div>
        </div>
        <div class="flex border-box p-1 flex-col">
            <p class="text-sm text-gray-500">Category</p>
            <p>Product Name</p>
            <p>$58.<span class="text-sm">00</span></p>
            <a class="text-center text-sm bg-blue-500 rounded py-2 text-white mt-2">View Item</a>
        </div>
    </div> -->
</template>

<script>
import axios from "axios";

export default {
  name: "Products",
  data(){
    return{
    }
  },
  methods:{
    Ondelete(id){
      const deleteConfirm = window.confirm("Are you sure you want to delete this product?")
      if(deleteConfirm){
        axios({
        method: "Delete",
        url: "http://3.1.103.18/products/" + id,
        headers: { token: localStorage.accessToken },
      })
        .then(function (response) {
          
          //handle success
          getproducts()
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      }
    }
  },
  props:{
    products:{
      type:Array
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: grid;
  place-items: center;
}
</style>