<template>
    <div class="about">


        <div class="about-container">
            <div class="about-line">
                <img src="../assets/verticle_line.png" />
            </div>

            <div class="about-column">

                <div class="about-header-text">
                    <span class="about-header-text-top">
                        <h1>What's our</h1>
                    </span>
                    <span class="about-header-text-bottom">
                       <h1>Story?</h1>
                    </span>
                </div>

                <div class="about-p-titles">About ClosetSnap</div>
                <p>

                ClosetSnap is a cutting-edge digital wardrobe solution designed to revolutionize the way you manage and
                explore
                your personal fashion collection. Say goodbye to the days of rummaging through your physical closet to
                find
                the
                perfect outfit. With ClosetSnap, your entire wardrobe is just a click away.
                    </p>
                <div class="about-p-titles">Our Mission</div>
                <p>
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
/* Mobile devices (portrait and landscape) */
@media only screen and (min-device-width: 32px) and (max-device-width: 480px) {

    .about-container {
        display: flex;
        flex-direction: row;
        margin-top: 3vh;
    }

    .about-column {
        display: flex;
        flex-direction: column;
    }


    .about-header-text-bottom h1{
        margin-left: 50%;
        margin-top: 13%;
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

    .about-p-titles:nth-of-type(2) {
        margin-top: 4vh;
    }

    p {
        max-width: 30ch;

    }
}

/* Ipads and tablets (portrait and landscape) */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {


    h1{
        font-size: 60px;
    }

    .about-container {
        display: flex;
        flex-direction: row;
        margin-top: 3vh;
    }

    .about-column {
        display: flex;
        flex-direction: column;
    }

    .about-header-text {
        display: flex;
        justify-content: center;
        margin-right: 5vh;
    }

    .about-header-text-bottom{
        margin-left: 1vh;
    }

    .about-line img {
        margin-top: 10vh;
        height: 75vh;
        padding-right: 4vh;
    }

    .about-p-titles {
        margin-bottom: 1vh;
        font-size: 35px;
    }

    .about-p-titles:nth-of-type(2) {
        margin-top: 4vh;
    }

    P{
        max-width: 40ch;
        font-size: 25px;
    }

}

/* Desktop and Laptops */
@media only screen and (min-device-width: 1025px) {


h1{
    font-size: 80px;
}

.about-container {
    display: flex;
    flex-direction: row;
    margin-top: 8vh;
}

.about-column {
    display: flex;
    flex-direction: column;
    margin-left: 10vh;
}

.about-header-text {
    display: flex;
    justify-content: center;
    margin-right: 5vh;
}

.about-header-text-bottom{
    margin-left: 1vh;
}

.about-line img {
    margin-top: 10vh;
    height: 60vh;
    padding-right: 4vh;
    margin-left: 15vh;
}

.about-p-titles {
    margin-bottom: 1vh;
    font-size: 50px;

}

.about-p-titles:nth-of-type(2) {
    margin-top: 4vh;
}

P{
    max-width: 80ch;
    font-size: 25px;
}

}
</style>