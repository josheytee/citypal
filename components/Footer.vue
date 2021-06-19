<template>
  <section class="mx-auto my-2 w-5/6 grid grid-col-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
      <div class="flex flex-col">
        <h2 class="font-bold">About Citypal</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis harum magnam assumenda quasi sequi magni in accusantium molestiae temporibus labore?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis harum magnam assumenda quasi sequi magni in accusantium molestiae temporibus labore?</p>
      </div>
      <div>
        <h2 class="font-bold">Site Map</h2>
        <div class="flex flex-col">
            <a href="">link 1</a>
            <a href="">link 1</a>
        </div>
        <div>
            <h2 class="font-bold">Social links</h2>
            <div class="flex flex-row">
              <a href="">link 1</a>
              <a href="">link 1</a>
              <a href="">link 1</a>
              <a href="">link 1</a>
            </div>
        </div>
      </div>
      <div class="flex flex-col">
        <h2 class="font-bold">Contact</h2>
        <address>
            Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet.
        </address>
        <a href="" class="font-bold">a@kb.com</a>
        <a href="" class="font-bold">08038110422</a>
      </div>
  </section>
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

export default class Footer extends Vue {
    // name = 'Footer'
    // title = 'main Footer'
}

</script>