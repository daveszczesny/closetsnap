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

    <div class="home-page-content">


        <div class="main-image-container">
            <img src="../assets/Subject.png" />
        </div>
    

        <div class="home-page-text">
            <span class="home-page-small-header">
                <h1>Unleash the Potential of</h1>
            </span>
            <span class="home-page-large-header">
                <h1>Your Style</h1>
            </span>
        </div>

    </div>

    <div style="display: flex; justify-content: center; margin-top: 3vh;">
        <img src="../assets/separation_line.png" />

    </div>
</template>



<script lang="ts">



</script>


<style>
/* Mobile devices (portrait and landscape) */
@media only screen and (min-device-width: 32px) and (max-device-width: 480px) {


    h1 {
        font-size: 43px;
    }


    .home-page-small-header{
        display: flex;
        justify-content: center;
        margin-top: 3vh;
    }


    .home-page-small-header h1{
        font-size: 30px;
    }

    .home-page-large-header {
        display: flex;
        justify-content: center;
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
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 101%;
        z-index: -1;
        overflow: hidden;
    }

    .bg-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-30%, -14%);
        z-index: -1;
        width: 120vh;
        height: 120vh;
    }


    .bg-overlay svg {
        width: 100%;
        height: 100%;
    }

}

/* Ipads and tablets (portrait and landscape) */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px){


    h1 {
        font-size: 60px;
    }


    .big_header {
        display: flex;
        justify-content: center;
    }


    .small_header h1 {
        font-size: 50px;
    }


    .main-image-container{
        grid-row: 1/3;
        grid-column: 1/1;
    }

    .main-image-container img {
        width: 250px;
    }

    .top_header {
        margin-top: 10vh;
    }

    .top_header h1{
        margin-left: 5vh;
    }

    .h1_float_right {
        float: right;
        margin-right: 5vh;
    }


    .svg-container {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 101%;
        z-index: -1;
        overflow: hidden;
    }

    .bg-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-40%, -10%);
        z-index: -1;
        width: 200vh;
        height: 200vh;
    }


    .bg-overlay svg {
        width: 100%;
        height: 100%;
    }

    .home-page-content{
        display: grid;

        grid-gap: 20px;

    }

    .home-page-text{
        margin-top: 35vh;
        grid-row: 1/3;
        grid-column: 2/80;

        margin-left: 10vh;
    }

    .home-page-small-header{
        margin: 10px 20px 20px 20px;
    }

    .home-page-small-header h1{
        font-size: 30px;
    }

    .home-page-large-header h1{
        font-size: 45px;
        margin-left: 7vh;
    }

}

/* Desktops and Laptops */
@media only screen and (min-device-width: 1025px) {


h1 {
    font-size: 60px;
}


.big_header {
    display: flex;
    justify-content: center;
}


.small_header h1 {
    font-size: 50px;
}


.main-image-container{
    grid-row: 1/3;
    margin-left: 100%;
}

.main-image-container img {
    width: 250px;
}

.top_header {
    margin-top: 10vh;
    margin-left: 30%;

}

.top_header h1{
    margin-left: 5vh;
}

.h1_float_right {
    margin-left: 55%;
    margin-top: 10vh;
}


.svg-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 101%;
    z-index: -1;
    overflow: hidden;
}

.bg-overlay {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-40%, -10%);
    z-index: -1;
    width: 300vh;
    height: 300vh;
}


.bg-overlay svg {
    width: 100%;
    height: 100%;
}

.home-page-content{
    display: grid;

    grid-gap: 20px;

}

.home-page-text{
    margin-top: 35vh;
    grid-row: 1/3;
    grid-column: 12/80;

    margin-left: 10vh;
}

.home-page-small-header{
    margin: 10px 20px 20px 20px;
}

.home-page-small-header h1{
    font-size: 30px;
}

.home-page-large-header h1{
    font-size: 45px;
    margin-left: 7vh;
}

}

</style>