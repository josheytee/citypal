<template>
  <Modal id="btnModal" trigger="login">
    <template v-slot:title>
      Here might be a page title
    </template>
    <template v-slot:body>
      <form action="">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Full name</span>
            <input type="text" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="">
          </label>
          <label class="block">
            <span class="text-gray-700">Email address</span>
            <input type="email" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="john@example.com">
          </label>
          <button class="btn-primary">Login</button>
        </div>
      </form>
    </template>
  </Modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
  // @Prop() readonly toggleModal!: boolean;
  public toggleModal: boolean = false;
}
</script>

