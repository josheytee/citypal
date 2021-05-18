<template>
  <div>
    <Nav/>
    <nuxt/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Nav from '@/components/Nav.vue';

@Component({
  components:{
    Nav
  }
})

export default class Main extends Vue{}
</script>

