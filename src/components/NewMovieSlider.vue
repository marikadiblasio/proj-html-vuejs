<template>
    <section id="new-movie-slider" class="container pb-4">
            <div class="d-flex justify-content-between pb-4">
                <TitleComponent class="flex-grow-1" title="New Movie" subtitle="Lorem ipsum dummy text eiusque cum dolor"/>
                <div class="d-flex">
                    <div class="circle"><i class="fa-solid fa-chevron-left"></i></div>
                    <div class="circle"><i class="fa-solid fa-chevron-right"></i></div>
                </div>
            </div>
            <div class="py-5 d-flex">
                Qui le cards
                <CardComponent v-for="(show, index) in store.shows" :show="show" :key="show.id" :index="index"/>
            </div>
        </section>
</template>

<script>
    import { store } from '../data/store';
    import TitleComponent from './TitleComponent.vue';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'NewMovieSlider',
        components: {
            TitleComponent,
            CardComponent
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;
    #new-movie-slider{  
        .circle{
            border: 1px solid $my-contrast;
            margin-left: .5rem;
            color: $my-contrast;
            background-color: $my-primary;
        }
    }
</style>