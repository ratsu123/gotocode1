<template>
  <div class="main h-screen sm:bg-mainbg bg-cover bg-no-repeat bg-mainMobBg">
    <div class="container mx-auto pt-3">
      <div class="flex justify-between py-8 items-center">
        <div class="flex cursor-default text-2xl text-white text-lg    font-InterSemiBold" >
          Goto<span class="text-light-purple">Code</span>
        </div>
        <ul class="sm:flex hidden">
          <li class="px-5 py-2 text-white hover:opacity-75 cursor-pointer    font-SFMedium text-lg" >О нас</li>
          <li class="px-5 py-2 text-white hover:opacity-75 cursor-pointer    font-SFMedium text-lg" >Курсы</li>
          <li class="px-3 py-2 text-white hover:opacity-75 cursor-pointer    font-SFMedium text-lg" >Контакты</li>
        </ul>
      </div>
      <my-line class="w-32 h-2.5 bg-light-purple mb-10 mt-12"></my-line>
      <h1 class=" text-white  lg:text-8xl  lg:mx-0 text-4xl font-InterExtraBold mb-14 "    >
        Учись кодингу. <br>
        Войди в мир<br>
современности.
      </h1>
      <my-button>Оставить заявку</my-button>
    </div>

  </div>
</template>

<script>
export default {
  name: "HeaderBlock",
};
</script>

<style>
</style>