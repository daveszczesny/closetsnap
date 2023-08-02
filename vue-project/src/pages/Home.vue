<template>
    <div class="svg-container">
        <svg class="bg-overlay" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 2000' fill='#4BB07D'>
            <path
                d='M1790.25 758.43c-83.89-127.72-435-323-545-495-205.29-321.01-400-267-601.54 15.65-196.77 275.94-243.45 319.35-380.45 460.35-155.75 160.29-199.8 254.36-84.44 481.41 84.04 165.4 355.27 293.71 513.44 435.59 212.03 190.19 409.1 435.88 557.69 207.29 258.06-397 415.11-409.44 525.31-572.29 118.15-174.6 168.97-298.59 15-533Z'>
            </path>
        </svg>

    </div>

    <div class="top_header">
        <h1>From Wardrobe</h1>
    </div>
    <div class="h1_float_right">
        <h1>to Web</h1>
    </div>

    <div class="main-image-container">
        <img src="../assets/Subject.png" />
    </div>

    <div class="small_header">
        <h1>Unleash the Potential of</h1>
    </div>
    <div class="big_header">
        <h1>Your Style</h1>
    </div>

    <div style="display: flex; justify-content: center; margin-top: 3vh;">
        <img src="../assets/separation_line.png" />

    </div>
</template>



<script lang="ts">



</script>


<style>
.big_header {
    display: flex;
    justify-content: center;
}

.small_header {
    margin-top: 3vh;
    display: flex;
    justify-content: center;
}

.small_header h1 {
    font-size: 30px;
}

.main-image-container img {
    width: 174px;
}

.top_header {
    margin-top: 10vh;
}

.h1_float_right {
    float: right;
}


.svg-container {
    position:absolute;
    left:0;
    top:0;
    width: 100%;
    height: 101%;
    z-index: -1;
    overflow: hidden;
}

.bg-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-30%, -18%);
    z-index: -1;
    width: 120vh;
    height: 120vh;
}


.bg-overlay svg{
    width: 100%;
    height: 100%;
}

</style>