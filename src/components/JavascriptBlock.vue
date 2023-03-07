<template>
<div class="w-full bg-bg-black">
    <div class=" max-w-md lg:max-w-screen-lg container mx-auto ">
        <div class="flex lg:flex-row items-center">
            <div id="notebook"></div>
            <div class="py-16 pl-14 ">
                <div class="flex mb-4 ">
                    <div>
                        <img src="../assets/image/star.svg" alt="" class="xl:w-3.5 xl:h-3.5 max-w-full">
                    </div>
                    <div class="pl-3">
                        <h3 class="font-SFBold text-white pt-1 ">
                            Наш курс
                        </h3>
                    </div>
                </div>
                <div class="mb-8">
                    <h2 class="font-InterBold text-5xl text-white">Java Script</h2>
                    <div class="font-InterBold -mt-2 pl-10  text-2xl text-light-purple">course</div>
                </div>
                <div id="notebook-mob" class=""></div>
                <div class="grid grid-cols-2 gap-3.5  ">
                    <div class=" lg:h-20 w-36 rounded-lg bg-grid-black 	py-2">sdsd</div>
                    <div class=" lg:h-20 w-36 rounded-lg bg-grid-black	py-2">sdsd</div>
                    <div class=" lg:h-20 w-36 rounded-lg bg-grid-black	py-2">sdsd</div>
                    <div class=" lg:h-20 w-36 rounded-lg bg-grid-black	py-2">sdsd</div>
                    <div class=" lg:h-20 w-36 rounded-lg bg-grid-black	py-2">sdsd</div>
                    <div class=" lg:h-20 w-36 rounded-lg bg-grid-black	py-2">sdsd</div>
                </div>
            </div>
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: "JavascriptBlock",
}
</script>

<style>
#notebook {

}
    #notebook-mob {
    background-image: url(../assets/image/Course1.53ad987.svg);
    width: 330px;
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
    }
@media only screen and (min-width: 1024px) {
    #notebook {
    background-image: url(../assets/image/Course1.53ad987.svg);
    width: 700px;
    height: 500px;
    background-size: 80%;
    background-repeat: no-repeat;
    }
    #notebook-mob{
        display: none;
    }
}

</style>