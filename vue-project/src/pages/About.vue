<template>
    <div class="about">


        <div class="about-container">
            <div class="about-line">
                <img src="../assets/verticle_line.png" />
            </div>

            <div class="about-column">
                <h1>What's our</h1>
                <h1 class="about_right_header">Story?</h1>


                <p>
                    <div class="about-p-titles">About ClosetSnap</div>

                    ClosetSnap is a cutting-edge digital wardrobe solution designed to revolutionize the way you manage and
                    explore
                    your personal fashion collection. Say goodbye to the days of rummaging through your physical closet to
                    find
                    the
                    perfect outfit. With ClosetSnap, your entire wardrobe is just a click away.

                    <div class="about-p-titles">Our Mission</div>
                    At ClosetSnap, our mission is to simplify and enhance your fashion experience. We understand the
                    challenges
                    of
                    maintaining and organizing a physical wardrobe. That's why we've created a platform that allows you to
                    effortlessly digitize your clothing collection, providing you with easy access to your clothes anytime,
                    anywhere.

                    Join ClosetSnap today and unlock the full potential of your wardrobe. Experience the convenience,
                    creativity,
                    and joy of a digital fashion revolution. Simplify your style and embrace a new era of fashion with
                    ClosetSnap.
                </p>
            </div>
        </div>



    </div>
</template>


<script lang=ts>




export default {


}

</script>


<style>
.about-container {
    display: flex;
    flex-direction: row;
    margin-top: 3vh;
}

.about-column {
    display: flex;
    flex-direction: column;
}


.about_right_header {
    margin-left: auto;
}

.about-line img {
    margin-top: 15vh;
    height: 75vh;
    padding-right: 4vh;
}

.about-p-titles {
    margin-bottom: 1vh;
    font-size: large;
}

.about-p-titles:nth-of-type(2){
    margin-top: 4vh;
}

p {
    max-width: 30ch;
}
</style>