<template>
  <splide>
    <!-- <splide-slide>
      <img src="image01.jpg">
    </splide-slide> -->
    <splide-slide>
      <img src="~/assets/img/12.jpeg" style="width:500px">
    </splide-slide>
    <splide-slide>
      <img src="~/assets/img/12.jpeg" style="width:500px">
    </splide-slide>
    <!-- <splide-slide>
      <img src="image03.jpg">
    </splide-slide> -->
  </splide>
</template>


<script>
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

// import { Splide, SplideSlide } from '@splidejs/vue-splide';

  export default {
    name: 'Testimonials',
    title: 'Centered slides + Auto slides per view',
    components: {
      Splide,
      SplideSlide,
    },
    data() {
		  return {
			  options: {
			  	rewind : true,
				  width  : 800,
				  perPage: 1,
				  gap    : '1rem',
			  },
		  };
	  },
  }
</script>