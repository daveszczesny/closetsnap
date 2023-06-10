<template>
    <div class="top_header">
        <h1>From Wardrobe</h1>
    </div>
    <div class="h1_float_right">
        <h1>to Web</h1>
    </div>

    <div class="main-image-container">
        <img src="../assets/image_home_page1.png" />
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

    <div class="images">
        <img src="../assets/image_home_page2.png" />
        <img src="../assets/image_home_page3.png" />
        <img src="../assets/image_home_page4.png" />
    </div>



</template>



<script lang="ts">


</script>


<style>

.images {
    display: flex;
    justify-content: space-between;
    margin-top: 4vh;
}


.images img:first-child {
    margin-right: auto;
    margin-left: auto;
}

.images img {
    width: 100px;
    height: 200px;
    flex: 1;
    margin-left: 10px;
}

.big_header {
    display: flex;
    justify-content: center;
}

.small_header {
    margin-top: 3vh;
    display:flex;
    justify-content: center;
}

.small_header h1{
    font-size: 30px;
}

.main-image-container img {
    margin-top: 4vh;
    width: 174px;
    height: 263px;
}

.top_header {
    margin-top: 10vh;
}

.h1_float_right {
    float: right;
}
</style>