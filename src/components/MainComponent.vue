<template>
    <div>
        <NewMovieSlider />
        <MoviePlaylist />
        <div id="coming-soon" class="py-5 mb-4">
            <div class="container py-5 text-uppercase text-center">
                <h5 class="my-contrast"> Coming Soon Movie</h5>
                <h2 class="display-4">Max Still</h2>
                <div>
                    <h6>John Player <span class="my-contrast">&and;</span> Emily Rose</h6>
                    <span>The Countdown Is Finished!</span>
                </div>
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
    import TitleComponent from './TitleComponent.vue';
    import NewMovieSlider from './NewMovieSlider.vue';
    import MoviePlaylist from './MoviePlaylist.vue';
    export default {
        name: 'MainComponent',
        components: {
            TitleComponent,
            NewMovieSlider,
            MoviePlaylist
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;
    #coming-soon{
        background-image: url('/imgs/assets/coming-bg.jpg');
        background-position: center;
        background-size: cover;
        .container{
            width: 30%;
            margin-right: 25%;
        }
    }
    #subscription {
        div {
            height: 400px;
            background-image: url('/imgs/assets/form-bg-1.png');
            background-repeat: no-repeat;
        }
    }
</style>