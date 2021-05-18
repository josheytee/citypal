<template>
  <main>
    <div class="bg-landing">
      <Nav />
      <!-- <Carousel /> -->
      <section class="text-white container mx-auto bg-opacity-25 w-1/2 rounded-md my-5">
        <h2 class="text-lg font-bold">Everything Rental, Think Citypal</h2>
        <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magni ipsa esse facilis laudantium maxime culpa eaque vero laborum voluptas!</p>
        <p class="text-sm">Secure your home with citypal, African first rental company</p>
      </section>

      <div class="container mx-auto bg-white bg-opacity-25 w-1/2 rounded-md">
        <section class="flex flex-row gap-10 justify-evenly p-3">
          <div class="flex flex-row items-center bg-white rounded-md">
            <div class="w-30 h-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div class="flex flex-col">
              <small class="p-1"> What kind of property do you want?</small>
              <input
                type="text"
                class="p-1 rounded"
                placeholder="What kind of property do you want?"
              />
            </div>
          </div>
          <select name="" id="" class="rounded w-36 p-2">
            <option value="">may</option>
          </select>
          <button type="submit" class="p-2 bg-primary  w-36 rounded">
            Search
          </button>
        </section>
      </div>

    </div>
    <section class="p-4 bg-gray-200">
      <h1 class="text-center font-bold p-2 text-lg md:text-3xl text-primary">How we Operate.</h1>
      <div class="flex items-center justify-center mt-5">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <!-- 1 card -->
            <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                    <!-- svg  -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                </div>
                <div class="mt-8">
                    <p class="text-xl font-semibold my-2">App Development</p>
                    <div class="flex space-x-2 text-gray-400 text-sm">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae qui similique quo neque distinctio placeat nobis suscipit culpa aspernatur sunt velit adipisci illo incidunt fugit blanditiis, provident quod id autem?</p> 
                    </div>
                </div>
            </div>

            <!-- 2 card -->
            <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                    <!-- svg  -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <div class="mt-8">
                    <p class="text-xl font-semibold my-2">Web Design</p>
                    <div class="flex space-x-2 text-gray-400 text-sm">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusantium saepe optio laborum explicabo nesciunt? Ut non perspiciatis facere veritatis.</p>
                    </div>
                </div>
            </div>

            <!-- 3 card -->
            <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                    <!-- svg  -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </div>
                <div class="mt-8">
                    <p class="text-xl font-semibold my-2">Leading Page</p>
                    <div class="flex space-x-2 text-gray-400 text-sm">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eaque, libero odio fugiat repellendus ullam neque nulla dolore quod consequatur, est voluptate. Laborum odio ex iusto sapiente nulla aperiam inventore.</p> 
                    </div>
                  
                </div>
            </div>

            <!-- 4 card -->
            <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
                    <!-- svg  -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                </div>
                <div class="mt-8">
                  <p class="text-xl font-semibold my-2">Business Compare</p>
                  <div class="flex space-x-2 text-gray-400 text-sm">
                      
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quo vel at cumque explicabo, optio eius quasi doloremque consequuntur, alias repudiandae quisquam perspiciatis voluptas quae dolorem harum nisi fugit error?</p> 
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>

    <section class=" w-1/2 mx-auto flex flex-col" >
      <h1 class="text-center font-bold p-2 text-xl md:text-3xl text-primary">Featued Appartment</h1>
      <p class="text-center mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur eaque enim, pariatur quas voluptas quos minus hic? Excepturi veritatis iure consectetur esse numquam assumenda distinctio quae! Alias vitae error eum.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="flex flex-col gap-2">
          <div class="w-full h-48 relative">
            <img src="~assets/img/place.jpg" alt="" class="h-full rounded-t-md object-cover	w-full" srcset=""> 
            <div class=" text-white flex justify-between items-baseline w-full absolute bg-gradient-to-t from-gray-300 -bottom-0 p-2">
                <h3 class="font-bold text-xl">N 500,000</h3>
                <span class=" w-12 h-12">
                  <img src="~assets/img/12.jpeg" class="rounded-full w-full h-full object-cover" alt="">
                </span>
            </div>
          </div>
          <h3 class="font-bold text-xl">Hello bay if</h3>
          <p>Ibadan, Ibadan North-East, Oyo.</p>
          <div class="flex font-bold text-base"><span>bedroom: 1</span><span>bathroom: 1</span><span>toilet: 1</span></div>
        </div>
       <div class="flex flex-col gap-2">
          <div class="w-full h-48 relative">
            <img src="~assets/img/place.jpg" alt="" class="h-full rounded-t-md object-cover	w-full" srcset=""> 
            <div class=" text-white flex justify-between items-baseline w-full absolute bg-gradient-to-t from-gray-300 -bottom-0 p-2">
                <h3 class="font-bold text-xl">N 500,000</h3>
                <span class=" w-12 h-12">
                  <img src="~assets/img/12.jpeg" class="rounded-full w-full h-full object-cover" alt="">
                </span>
            </div>
          </div>
          <h3 class="font-bold text-xl">Hello bay if</h3>
          <p>Ibadan, Ibadan North-East, Oyo.</p>
          <div class="flex font-bold text-base"><span>bedroom: 1</span><span>bathroom: 1</span><span>toilet: 1</span></div>
        </div>
       <div class="flex flex-col gap-2">
          <div class="w-full h-48 relative">
            <img src="~assets/img/place.jpg" alt="" class="h-full rounded-t-md object-cover	w-full" srcset=""> 
            <div class=" text-white flex justify-between items-baseline w-full absolute bg-gradient-to-t from-gray-300 -bottom-0 p-2">
                <h3 class="font-bold text-xl">N 500,000</h3>
                <span class=" w-12 h-12">
                  <img src="~assets/img/12.jpeg" class="rounded-full w-full h-full object-cover" alt="">
                </span>
            </div>
          </div>
          <h3 class="font-bold text-xl">Hello bay if</h3>
          <p>Ibadan, Ibadan North-East, Oyo.</p>
          <div class="flex font-bold text-base"><span>bedroom: 1</span><span>bathroom: 1</span><span>toilet: 1</span></div>
        </div>
       <div class="flex flex-col gap-2">
          <div class="w-full h-48 relative">
            <img src="~assets/img/place.jpg" alt="" class="h-full rounded-t-md object-cover	w-full" srcset=""> 
            <div class=" text-white flex justify-between items-baseline w-full absolute bg-gradient-to-t from-gray-300 -bottom-0 p-2">
                <h3 class="font-bold text-xl">N 500,000</h3>
                <span class=" w-12 h-12">
                  <img src="~assets/img/12.jpeg" class="rounded-full w-full h-full object-cover" alt="">
                </span>
            </div>
          </div>
          <h3 class="font-bold text-xl">Hello bay if</h3>
          <p>Ibadan, Ibadan North-East, Oyo.</p>
          <div class="flex font-bold text-base"><span>bedroom: 1</span><span>bathroom: 1</span><span>toilet: 1</span></div>
        </div>
       <div class="flex flex-col gap-2">
          <div class="w-full h-48 relative">
            <img src="~assets/img/place.jpg" alt="" class="h-full rounded-t-md object-cover	w-full" srcset=""> 
            <div class=" text-white flex justify-between items-baseline w-full absolute bg-gradient-to-t from-gray-300 -bottom-0 p-2">
                <h3 class="font-bold text-xl">N 500,000</h3>
                <span class=" w-12 h-12">
                  <img src="~assets/img/12.jpeg" class="rounded-full w-full h-full object-cover" alt="">
                </span>
            </div>
          </div>
          <h3 class="font-bold text-xl">Hello bay if</h3>
          <p>Ibadan, Ibadan North-East, Oyo.</p>
          <div class="flex font-bold text-base"><span>bedroom: 1</span><span>bathroom: 1</span><span>toilet: 1</span></div>
        </div>
       <div class="flex flex-col gap-2">
          <div class="w-full h-48 relative">
            <img src="~assets/img/place.jpg" alt="" class="h-full rounded-t-md object-cover	w-full" srcset=""> 
            <div class=" text-white flex justify-between items-baseline w-full absolute bg-gradient-to-t from-gray-300 -bottom-0 p-2">
                <h3 class="font-bold text-xl">N 500,000</h3>
                <span class=" w-12 h-12">
                  <img src="~assets/img/12.jpeg" class="rounded-full w-full h-full object-cover" alt="">
                </span>
            </div>
          </div>
          <h3 class="font-bold text-xl">Hello bay if</h3>
          <p>Ibadan, Ibadan North-East, Oyo.</p>
          <div class="flex font-bold text-base"><span>bedroom: 1</span><span>bathroom: 1</span><span>toilet: 1</span></div>
        </div>
       
        
      </div>
      <a href="" class="btn-primary self-center">see more</a>
    </section>

    <section class=" bg-gray-200" >
      <section class="w-5/6 md:w-1/2 mx-auto flex flex-col " >
        <h1 class="text-center font-bold p-2 text-xl md:text-3xl text-primary">Complete Solution for Owner</h1>
        <p class="text-center mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur eaque enim, pariatur quas voluptas quos minus hic? Excepturi veritatis iure consectetur esse numquam assumenda distinctio quae! Alias vitae error eum.</p>
        <div class="grid  grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-gray-100 flex flex-col gap-2 p-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 rounded-lg w-20 bg-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h3 class="font-bold text-primary">lorem ipsum worrm mdl'c</h3>
            <p class="text-xs text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus id optio non voluptate consequuntur enim cum? Nostrum.
            </p>
          </div>
          <div class="bg-gray-100 flex flex-col gap-2 p-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 rounded-lg w-20 bg-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h3 class="font-bold text-primary">lorem ipsum worrm mdl'c</h3>
            <p class="text-xs text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus id optio non voluptate consequuntur enim cum? Nostrum.
            </p>
          </div>
          <div class="bg-gray-100 flex flex-col gap-2 p-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 rounded-lg w-20 bg-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h3 class="font-bold text-primary">lorem ipsum worrm mdl'c</h3>
            <p class="text-xs text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus id optio non voluptate consequuntur enim cum? Nostrum.
            </p>
          </div>
        </div>
        <a href="" class="btn-primary self-center">Getting Started</a>
      </section>
    </section>

      <section class="w-5/6 md:w-1/2 mx-auto flex flex-col " >
        <h1 class="text-center font-bold p-2 text-xl md:text-3xl text-primary">Complete Solution for Agents</h1>
        <p class="text-center mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur eaque enim, pariatur quas voluptas quos minus hic? Excepturi veritatis iure consectetur esse numquam assumenda distinctio quae! Alias vitae error eum.</p>
        <div class="grid  grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-gray-100 flex flex-col gap-2 p-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 rounded-lg w-20 bg-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h3 class="font-bold text-primary">lorem ipsum worrm mdl'c</h3>
            <p class="text-xs text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus id optio non voluptate consequuntur enim cum? Nostrum.
            </p>
          </div>
          <div class="bg-gray-100 flex flex-col gap-2 p-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 rounded-lg w-20 bg-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h3 class="font-bold text-primary">lorem ipsum worrm mdl'c</h3>
            <p class="text-xs text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus id optio non voluptate consequuntur enim cum? Nostrum.
            </p>
          </div>
          <div class="bg-gray-100 flex flex-col gap-2 p-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 rounded-lg w-20 bg-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h3 class="font-bold text-primary">lorem ipsum worrm mdl'c</h3>
            <p class="text-xs text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus id optio non voluptate consequuntur enim cum? Nostrum.
            </p>
          </div>
        </div>
        <a href="" class="btn-primary self-center">Getting Started</a>
      </section>
      <Testimonials/>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Nav from "@/components/Nav.vue";
import Carousel from "@/components/Carousel.vue";

@Component({
  components: {
    Nav,
    Carousel,
  },
})
export default class Index extends Vue {}
</script>
<style lang="scss" scoped>
</style>