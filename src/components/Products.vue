<template>


<div class="wrapper antialiased text-gray-900 my-10 ">
<div>
    
    <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md">    
    
 <div class="relative px-4 -mt-16">
   <div class="bg-white p-6 rounded-lg shadow-lg">
    <div class="flex items-baseline">
      <span class="bg-green-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>
      <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
    2 baths  &bull; 3 rooms
  </div>  
    </div>
    
    <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>
 
  <div class="mt-1">
    $1800
    <span class="text-gray-600 text-sm">   /wk</span>
  </div>
  <div class="mt-4">
    <span class="text-green-600 text-md font-semibold">4/5 ratings </span>
    <span class="text-sm text-gray-600">(based on 234 ratings)</span>
  </div>  
  </div>
 </div>
  
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
export default {
name:'Products'
}
</script>

<style scoped>
.wrapper{
  display:grid;
  place-items:center
}




</style>