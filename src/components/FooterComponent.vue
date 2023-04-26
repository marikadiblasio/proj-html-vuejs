<template>
    <footer>
        <div class="top-footer">
            <div class="container d-flex">
                <div>Abous Us</div>
                <div>Movie Category</div>
                <div>Information</div>
                <div>Recent Post</div>
            </div>
        </div>
        <div class="bottom-footer">
            <div class="container d-flex justify-content-between">
                <div class="d-flex">bottom-footer sinistra</div>
                <div class="d-flex">bottom-footer destra</div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name:'FooterComponent'
    }
</script>

<style lang="scss" scoped>
        @use '../assets/partials/_variables.scss' as * ;
    .top-footer{
        background: linear-gradient(rgba(24,32,40, 0.90), rgba(24,32,40, 0.90)), url('/imgs/assets/ft-bg.jpg');
        background-position: center;
        background-size: cover;
        height: 200px;
    }
    .bottom-footer{
        background-color: $my-secondary;
    }
</style>