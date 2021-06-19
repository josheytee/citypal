<template>
  <div> 
    <t-modal ref="modal">hello world</t-modal>
    <button @click="$refs.modal.show()" type="button">Show modal</button>
    <button @click="$refs.modal.hide()" type="button">Hide modal</button>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";


@Component({
  components: {}
})
export default class Login extends Vue {}
</script>
