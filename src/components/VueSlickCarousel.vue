<template>
  <div class="container mx-auto bg-red-500">
    <button @click="ShowPrev" class="mt-20">prev</button>
    <VueSlickCarousel v-bind="setings" ref="carusel" class="w-72 mx-4">
      <div v-for="p in this.$static.programs.edges" :key="p.node.id">
        <div class="v-carousel-item w-full flex-col mt-10 flex items-center">
          <div>
            <g-image
              class="mx-auto mt-4"
              :src="p.node.image"
              width="40px"
              height="40px"
            />
            <h2
              id="direction-title"
              class="text-center font-i-sb text-2xl mt-4"
              style="color: #404056"
            >
              {{ p.node.title }}
            </h2>
            <h3
              id="direction-description"
              class="text-center font-m-r text-base"
              style="color: #989898"
            >
              {{ p.node.description }}
            </h3>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { ref } from "vue";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  setup() {
    const setings = {
      arrows: false,
      dots: true,
      dotsClass: "slick-dots custom-dot-class",
      edgeFriction: 0.35,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    let carusel = ref();
    function ShowPrev() {
      carusel.value.prev();
    }
    return {
      setings,
      ShowPrev,
      carusel,
    };
  },
};
</script> 

<static-query>
query {
  programs: allPrograms{
    edges{
      node{
        id
        title
        description
        image
      }
    }
  }
}
</static-query>