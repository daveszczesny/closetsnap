<template>
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
</style>