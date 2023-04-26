<template>
    <div>
        main
        <section id="new-movie-slider" class="container pb-4">
            <div class="d-flex justify-content-between pb-4">
                <TitleComponent class="flex-grow-1" title="New Movie" subtitle="Lorem ipsum dummy text eiusque cum dolor"/>
                <div>angoli</div>
            </div>
            <div class="py-5">
                Qui le cards
            </div>
        </section>
        <section id="movie-playlist" class="container pb-4">
            <TitleComponent title="Movie Playlist" subtitle="Lorem ipsum dummy text eiusque cum dolor" />
            <div class="d-flex justify-content-between">
                <div>
                    video
                </div>
                <div>
                    playlist bar
                </div>
            </div>
        </section>
        <div id="coming-soon" class="py-5 mb-4">
            <div class="container w-50 me-5">
                Coming soon
            </div>
        </div>
        <section id="new-movie-select">
            <div class="container">
                <TitleComponent title="New Movie" subtitle="Lorem ipsum dummy text eiusque cum dolor"/>
                <ul class="d-flex list-unstyled pb-4">
                    <li class="pe-4">All</li>
                    <li class="pe-4">Coming Soon</li>
                    <li class="pe-4">Latest Movies</li>
                    <li class="pe-4">Top Rated</li>
                    <li class="pe-4">TV Series</li>
                </ul>
                <div class="row pb-4">
                    <div class="col-4 border p-3 border-3">
                        <div class="image">card</div>
                    </div>
                </div>
            </div>
        </section>
        <section id="latest-news">
            <div class="container d-flex">
                <div class="w-50 p-2 border">
                    <div class="border">sinistra</div>
                </div>
                <div class="w-50 p-2 border">
                    <div class="border">
                        destra
                    </div>
                </div>
            </div>
        </section>
        <section id="subscription" class="py-5">
            <div class="container">
                <form></form>
            </div>
        </section>
    </div>
</template>

<script>
    import TitleComponent from './TitleComponent.vue'
    export default {
        name: 'MainComponent',
        components: {
            TitleComponent
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;
    #coming-soon{
        background-image: url('/imgs/assets/coming-bg.jpg');
        background-position: center;
        background-size: cover;
    }
    #subscription {
        div {
            height: 400px;
            background-image: url('/imgs/assets/form-bg-1.png');
            background-repeat: no-repeat;
        }
    }
</style>