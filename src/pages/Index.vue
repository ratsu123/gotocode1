<template>
<div class="overflow-hidden">
  <button @click="createHero">sss</button>
  <HeaderBlock></HeaderBlock>
  <WhoWeAreBlock></WhoWeAreBlock>
  <AchievementBlock></AchievementBlock>
  <WhyUsBlock></WhyUsBlock>
  <JavascriptBlock></JavascriptBlock>
<!-- <VueSlickCarousel></VueSlickCarousel> -->

</div>

</template>

<script>
import HeaderBlock from '../components/HeaderBlock.vue'
import AchievementBlock from '../components/AchievementBlock.vue'
import WhyUsBlock from '../components/WhyUsBlock.vue'
import VueSlickCarousel from '../components/VueSlickCarousel.vue'
import WhoWeAreBlock from '../components/WhoWeAreBlock.vue'
import Javascript from '../components/JavascriptBlock.vue'
import JavascriptBlock from '../components/JavascriptBlock.vue'

export default {
 components: { AchievementBlock, HeaderBlock, WhyUsBlock, VueSlickCarousel, WhoWeAreBlock, JavascriptBlock, JavascriptBlock }
}
</script>
 

<style>

</style>
