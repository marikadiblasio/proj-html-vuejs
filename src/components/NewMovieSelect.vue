<template>
    <section id="new-movie-select">
            <div class="container">
                <TitleComponent title="New Movie" subtitle="Lorem ipsum dummy text eiusque cum dolor"/>
                <ul class="d-flex list-unstyled pb-5">
                    <li @click="cip = this.store.shows.map(show => show)" class="pe-4"><a href="#">All</a></li>
                    <li @click="cip = selectCategory('Coming Soon')" class="pe-4"><a href="#">Coming Soon</a></li>
                    <li @click="cip = selectCategory('Latest Movie')" class="pe-4"><a href="#">Latest Movies</a></li>
                    <li @click="cip = selectCategory('Top Rating')" class="pe-4"><a href="#">Top Rated</a></li>
                    <li @click="cip = selectCategory('Tv Series')" class="pe-4"><a href="#">TV Series</a></li>
                </ul>
                <div class="d-flex flex-wrap pb-4">
                    <CardComponent v-for="(show, index) in this.cip" :rounded="false" :show="show" :index="index" :key="show.id"/>
                </div>
            </div>
        </section>
</template>

<script>
    import { store } from '../data/store';
    import TitleComponent from './TitleComponent.vue';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'NewMovieSelect',
        components: {
            TitleComponent,
            CardComponent
        },
        data(){
            return{
                store,
                cip: store.shows.map(show => show),
            }
        },
        methods: {
            selectCategory(category){
                this.cip = this.store.shows.map(show => show).filter((show) => show.category === category);
                console.log(this.cip);
                return this.cip
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;

    .flex-wrap{
        height: fit-content;
    }
</style>