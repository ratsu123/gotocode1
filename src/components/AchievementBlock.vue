<template>
  <div class="bg-white w-full ">
    <div class="container flex flex-col justify-between pt-14 pb-11 sm:flex-row mx-auto">
      <div class=" ">
        <h3
          class="font-InterExtraBold lg:w-full md:w-72 text-center text-pale-black leading-none mb-5 text-3xl sm:text-left  lg:text-4xl ">
          Наши достижения<br>за 2 года работы</h3>
        <p class="text-light-gray text-base lg:text-lg sm:text-left text-center">Мы фокусируемся на качестве!</p>
        <my-line class=" my-6 lg:w-20 lg:h-2 bg-light-purple w-10 h-1 sm:mx-0 mx-auto"></my-line>
      </div>

      <div class="grid md:grid-cols-2 grid-cols-1 mx-auto gap-4 md:gap-2 sm:pl-12 md:-mr-5">
        <div class="flex flex-col" v-for="a in $static.achievement.edges" :key="a.node.id">
          <div class="flex space-x-5 mb-4 h-auto">
            <div>
              <g-image class="w-10 h-10" :src="a.node.image"></g-image>
            </div>
            <div class="flex flex-col">
              <div class="font-InterExtraBold text-xl lg:text-3xl leading-7">{{ a.node.count }}</div>
              <div class="text-light-gray lg:text-base text-base">{{ a.node.title }}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>
<static-query>
query Achievements  {
  achievement: allAchievement(order:ASC) {
    edges {
      node{
        image
        count
        title
        id
      }
    }
  }
}
</static-query>



<script>
import LineEl from './UI/LineEl.vue'
export default {
  components: { LineEl },
  name: "AchievementBlock",

}
</script>

<style>
</style>