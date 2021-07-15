<template>
  <Modal id="registerModal" trigger="register">
    <template v-slot:title>
      Register
    </template>
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
          <label class="block">
            <span class="text-gray-700">Password</span>
            <input type="text" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="">
          </label>
          <button class="btn-primary">Register</button>
        </div>
      </form>
  </Modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Register extends Vue {
}
</script>

