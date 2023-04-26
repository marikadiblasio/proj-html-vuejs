<template>
    <header class="pb-4">
        <div class="container pt-2 top-header">Top Header</div>
        <hr>
        <div class="container main-header">Main Header</div>
        <hr>
        <nav class="container pb-2 bottom-header">bottom Header</nav>
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