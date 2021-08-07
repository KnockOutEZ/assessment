<template>
  <div class="grid md:grid-cols-5 px-10">
    <div>Title <br /><input type="text" v-model="title" placeholder="" /></div>
    <div>Sku <br /><input type="text" v-model="sku" placeholder="" /></div>
    <div>
      Unit Price <br /><input type="number" v-model="price" placeholder="" />
    </div>
    <div>
      Currency <br /><input type="text" v-model="currency" placeholder="" />
    </div>
    <div class="grid grid-cols-3">
      <div>
        <br /><button
          class="bg-green-400 rounded-lg w-12 h-8 -mt-3 text-white"
          @click="createProduct"
        >
          Save
        </button>
      </div>
    </div>
  </div>
  <!-- <Products :products="products"/> -->
  <div class="text-gray-900 bg-gray-200" v-show="products.length > 0">
    <div class="p-4 flex">
      <h1 class="text-3xl">Products</h1>
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
          <tr
            v-for="(product, index) in products"
            :key="product.id"
            class="border-b hover:bg-gray-200 bg-gray-100"
          >
            <td class="p-3 px-5">
              {{ index + 1 }}
            </td>
            <td class="p-3 px-5">
              {{ product.title }}
            </td>
            <td class="p-3 px-5">
              {{ product.sku }}
            </td>
            <td class="p-3 px-5">
              {{ product.unit_price }} {{ product.currency }}
            </td>
            <td class="p-3 px-5 flex justify-end">
              <button
                @click="OnEdit(product.id)"
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
              ><button
                @click="Ondelete(product.id)"
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
</template>

<script>
import axios from "axios";
export default {
  name: "ProductFinal",
  data() {
    return {
      products: [],
      title: "",
      sku: "",
      price: "",
      currency: "",
    };
  },
  components: {},
  created() {
    this.getproducts();
  },
  methods: {
    createProduct() {
      var vm = this;
      axios({
        method: "Post",
        url: "http://3.1.103.18/products",
        validateStatus: false,
        data: {
          title: this.title,
          sku: this.sku,
          unit_price: this.price,
          currency: this.currency,
          supplier_id: localStorage.userID,
        },
        headers: { token: localStorage.accessToken },
      })
        .then(function (response) {
          if (response.status == 400) {
            window.alert(response.data.error);
          } else {
            vm.getproducts();
            vm.title = "";
            vm.sku = "";
            vm.price = "";
            vm.currency = "";
          }
          //handle success
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    },

    Ondelete(id) {
      var vm = this;
      const deleteConfirm = window.confirm(
        "Are you sure you want to delete this product?"
      );
      if (deleteConfirm) {
        axios({
          method: "Delete",
          url: "http://3.1.103.18/products/" + id,
          headers: { token: localStorage.accessToken },
        })
          .then(function (response) {
            //handle success
            vm.getproducts();
            console.log(response);
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          });
      }
    },

    OnEdit(id) {
      var vm = this;
      axios({
        method: "GET",
        validateStatus: false,
        url: vm.$BaseUrl + "products/" + id,
        headers: { token: localStorage.accessToken },
      })
        .then(function (response) {
          if (response.status != 404) {
            vm.title = response.data.product.title;
            vm.sku = response.data.product.sku;
            vm.price = response.data.product.unit_price;
            vm.currency = response.data.product.currency;
          }
          vm.updateProduct(id);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    },

    getproducts() {
      // axios.get(vm.url).then((response)=>{
      //   vm.productss = response.data.count
      //   console.log('response')
      // })
      console.log(localStorage.accessToken);
      var vm = this;
      axios({
        method: "GET",
        validateStatus: false,
        url: vm.$BaseUrl + "products",
        headers: { token: localStorage.accessToken },
      })
        .then(function (response) {
          console.log(response.status);
          if (response.status == 404) {
            vm.products = [];
          } else {
            vm.products = response.data.products;
          }
          console.log(response.data.products);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    },
    updateProduct(id) {
      var vm = this;
      axios({
        method: "Patch",
        url: "http://3.1.103.18/products/" + id,
        data: {
          title: this.title,
          sku: this.sku,
          unit_price: this.price,
          currency: this.currency,
        },
        headers: { token: localStorage.accessToken },
      })
        .then(function () {
          //handle success
          vm.getproducts();
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