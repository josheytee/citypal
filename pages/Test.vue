<template>
 <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="/img/erin-lindford.jpg" alt="Woman's Face">
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
        Erin Lindford
      </p>
      <p class="text-gray-500 font-medium">
        Product Engineer
      </p>
    </div>
    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
    layout: 'Main',
})
export default class Test extends Vue{ 
    firstName = "hello" 
    head(){
        return { 
            title: "Hello"
        }
    }
}

</script>

<!DOCTYPE html>
<html>
<head>
  <title>Simple Calculator</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>
</head>
<body>
  <div id="calculator">
    <!-- Modify elements addend1, addend2, and total -->
    <input id="addend1" type="number" v-model="addend1" /> + <input id="addend2" v-model="addend2" type="number" /> = <span id="total">{{total}}</span>
  </div>
  <script>
    var vm = new Vue({
      // Modify Vue object
      data:{
        addend1: 0,
        addend2: 0,
      },
      computed: {
        total: function (){
          return this.addend1 + this.addend2;
        }
      }
    });

    // Example case
    vm.addend1 = 10;
    vm.addend2 = 10;
    
    setTimeout(() => console.log(document.getElementById("addend1").value + " + " + 
                                 document.getElementById("addend2").value + " = " +
                                 document.getElementById("total").innerText));
  </script>
</body>
</html>

