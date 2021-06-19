<template>
  <section>
    <button @click="toggleModal = !toggleModal">show modal</button>
    <section
      v-if="toggleModal"
      class="fixed overflow-x-hidden overflow-y-auto inset-0"
    >
      <div class="absolute inset-0 z-40 opacity-25 bg-black text-white">login component</div>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Login from "@/components/Login.vue";

@Component
export default class Nav extends Vue {
  // @Prop() readonly toggleModal!: boolean;
  public toggleModal : boolean = false;
}
</script>

