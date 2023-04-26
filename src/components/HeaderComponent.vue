<template>
    <header class="py-4">
        <div class="container d-flex  align-items-center justify-content-between pt-2 top-header">
            <div class="d-flex">
                <i class="fa-regular pe-2 fa-envelope"></i>
                <span>Superhit Top Movie </span>
                <span class="my-contrast">**King Star**</span>
                <ul class="d-flex ps-3 list-unstyled">
                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
                </ul>
            </div>
            <div>
                <i class="fa-solid pe-2 fa-lock"></i>
                <a href="#subscription">Login</a>
            </div>
        </div>
        <hr>
        <div class="container d-flex justify-content-between main-header">
            <div>
                <img src="/imgs/assets/cropped-logo.png" alt="logo">
            </div>
            <div class="input-group w-25">
                <input type="text" name="search" class="form-control" placeholder="Search">
                <span class="btn d-flex align-items-center rounded-0">Search</span>
            </div>
        </div>
        <hr>
        <nav class="container pb-2 d-flex justify-content-between bottom-header">
            <ul class="d-flex list-unstyled">
                <li><a href="#">Home <i class="fa-solid fa-caret-down"></i></a></li>
                <li><a href="#">Celebrity <i class="fa-solid fa-caret-down"></i></a></li>
                <li><a href="#">Movie <i class="fa-solid fa-caret-down"></i></a></li>
                <li><a href="#">Page <i class="fa-solid fa-caret-down"></i></a></li>
                <li><a href="#">Shop <i class="fa-solid fa-caret-down"></i></a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div>
                <i class="fa-solid position-relative fa-basket-shopping">
                    <span class="position-absolute top-0 start-100 translate-middle p-1 border border-light rounded-circle">
                        <span class="xs d-flex align-content-center justify-content-center">0</span>
                    </span>
                </i>
            </div>
        </nav>
        <div class="hero py-5">
            <div class="container w-50 me-5">
                hero
            </div>
            <div class="cip ms-auto me-4">&angle;</div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;
a{
    color: $my-tertiary;
    text-decoration: none;
}     
li{
    padding-left: 1rem;
}
        .fa-facebook-f{
            color: #3b5998;
        }
        .fa-twitter{
            color: #00acee;
        }
        .fa-linkedin-in{
            color: #0d6c99;
        }
        .fa-instagram{
            color: #691822;
        }
        .fa-google-plus-g{
            color: #da4a39;
        }
    hr{
        color: $my-border;
        background-color: $my-border;
        border: 1px solid $my-border;
    }
    .main-header{
        .btn{
            color: $my-tertiary;
            background-color: $my-contrast;
        }
        input{
            background-color: $my-primary;
            border-color: $my-border;
        }
    }
    .bottom-header{
        i>span{
            background-color: $my-contrast;
        }
        .xs{
            font-size: .2rem;
        }
    }
    .hero{
        background-image: url('/imgs/assets/slider.jpg');
        background-position: center;
        background-size: cover;
    }
    .cip{
        // @include small-square;
        background-color: $my-tertiary;
        width: 2rem;
        height: 2rem;
        color: grey;
        text-align: center;
    }
</style>