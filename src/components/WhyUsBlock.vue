<template>
<div class="w-full lg:pt-44 pt-10 bg-almost-white">

    <div class="container max-w-4xl mx-auto">
        <div class="text-center ">
            <div class="mx-auto my-6 w-12 h-1 lg:w-16 lg:h-2 bg-pale-black"></div>
            <h2 class="font-InterExtraBold text-pale-black lg:max-w-none max-w-sm   mx-auto lg:mb-24 mb-10 lg:text-5xl text-3xl">Почему стоит выбрать
                <span class="text-light-purple">нас?</span>
            </h2>
        </div>
        <div class="">
            <div class="flex lg:flex-row flex-col lg:mb-24 items-center ">
                <div id="" class="   mb-6">
                    <img id="firstpic" src="../assets/image/Frame.2d4a588.png" alt="" class=" ">
                </div>
                <div class="text-center max-w-md lg:max-w-none lg:text-left lg:-mt-10 lg:pl-12">
                    <h2 class=" font-InterExtraBold text-pale-black  text-2xl  mb-2 lg:mb-4">Много <span
                            class="text-light-purple">интересных</span> проектов</h2>
                    <div class=" font-SFRegular mb-16 lg:px-0 md:px-6 text-light-gray  text-base">Вы будете разрабатывать
                        ботов для соц.
                        сетей, сайты, игры, проектировать базы данных. За счет чего поймете какая сфера IT вам
                        интересна.
                    </div>
                </div>
            </div>
            <div class="flex lg:flex-row-reverse flex-col lg:mb-24 items-center ">
                <div class=" mb-6">
                    <img src="../assets/image/Group2.bbde665.svg" id="secondpic" class=" " alt="">
                </div>
                <div class="text-center max-w-md lg:max-w-none lg:text-left lg:pr-10">
                    <h2 class=" font-InterExtraBold text-pale-black  text-2xl  mb-2 lg:mb-4"><span class="text-light-purple">Дружелюбная</span> атмосфера </h2>
                    <div class=" font-SFRegular mb-16 lg:px-0 md:px-6 text-light-gray text-base ">Вы познакомитесь и сможете общаться со многими учителями и людьми с общими интересами и целями в любое время.
                    </div>
                </div>
            </div>
            <div class="flex lg:flex-row flex-col justify-between  items-center ">
                <div class=" mb-6">
                    <img src="../assets/image/Group3.0713cc2.png" id="thirdpic" class="" alt="">
                </div>
                <div class="text-center max-w-md lg:max-w-none lg:text-left lg:pl-20">
                    <h2 class=" font-InterExtraBold text-pale-black  text-2xl mb-2 lg:mb-4"><span
                            class="text-light-purple">Качественные</span> знания</h2>
                    <div class="font-SFRegular  mb-16 lg:px-0 md:px-6 text-light-gray text-base">Вы будете разрабатывать
                        ботов для соц.
                        сетей, сайты, игры, проектировать базы данных. За счет чего поймете какая сфера IT вам
                        интересна.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>

import { ref, onMounted } from 'vue'

export default {

    name: "WhyUsBlock",
}
</script>

<style>
#firstpic {
    object-fit: contain;
    width: 700px;
}
#secondpic {
    object-fit: contain;
    width: 750px;
}
#thirdpic {
    object-fit: contain;
    width: 750px;
}
@media only screen and (max-width: 1024px){
#firstpic {
    object-fit: contain;
    width: 240px;
}
#secondpic {
    object-fit: contain;
    width: 270px;
}
#thirdpic {
    object-fit: contain;
    width: 270px;
}
}
</style>