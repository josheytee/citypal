<template>
  <Modal id="loginModal" trigger="login">
    <template v-slot:title>
      Login
    </template>
      <form action="">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Email address</span>
            <input type="email" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="john@example.com">
          </label>
          <label class="block">
            <span class="text-gray-700">Password</span>
            <input type="password" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="">
          </label>
          <div class="block">
                <div class="mt-2">
                  <div>
                    <label class="inline-flex items-center">
                      <input type="checkbox" class="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500">
                      <span class="ml-2">Remember Me</span>
                    </label>
                  </div>
                </div>
              </div>
          <button class="btn-primary">Login</button>
        </div>
      </form>
  </Modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {

}
</script>

