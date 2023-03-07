<template>
<div id="why-us" class="w-screen h-full pt-24 pb-32 lg:mt-12  ">
    <div class=" py-12  flex flex-col justify-center items-center">
        <div class="flex lg:ml-10 ml-4 lg:w-870px mb-6  ">
            <div>
                <img src="../assets/image/message.7453cdb.svg" alt="">
            </div>
            <div class="ml-4">
                <h2 class="font-InterExtraBold lg:text-3xl	text-xl	">- Кто <span class="text-light-purple">мы?</span></h2>
                <h2 class="font-InterExtraBold lg:text-3xl text-xl">
              - Мы команда разработчиков,<br>
              помогающие ученикам вступить в мир IT!
                </h2>
            </div>
        </div>
        <div class="mx-auto mb-5 lg:w-20 lg:my-8 lg:h-2 w-10 h-1 bg-light-purple"></div>
        <div class="lg:max-w-xl max-w-md px-5 lg:ml-20 text-base ml-5">
            <h3 class="lg:text-base font-SFRegular text-light-gray">
                Мы поощряем стремление становиться профессионалами в сфере программирования! Мы не только обучаем, но также подготавливаем к будущему трудоустройству!
            </h3>
        </div>
    </div>
</div>
</template>


<script>

export default {
    name: "WhoWeAreBlock",
}
</script>

<style>
#why-us {
    position: relative;
    background: url(../assets/bg/why-us.8097bb6.svg) no-repeat;
    background-size: 100%;
    display: block;
}
@media only screen and (max-width: 1280px){
    #why-us {
    position: relative;
    background: url(../assets/bg/why-us.8097bb6.svg) no-repeat center;
    background-size: cover;
    }
}

</style>