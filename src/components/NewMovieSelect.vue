<template>
    <section id="new-movie-select">
        <div class="container">
            <TitleComponent title="New Movie" subtitle="Lorem ipsum dummy text eiusque cum dolor"/>
            <ul class="d-flex list-unstyled pb-5">
                <li @doSearch="selectCategory" is="vue:category-nav" v-for="(cat, i) in categories" :currentI="currentI" :cat="cat" :i="i"></li>
            </ul>
            <div class="d-flex select-container justify-content-center flex-wrap pb-4">
                <CardComponent v-for="(show, index) in this.selections" :rounded="false" :show="show" :index="index" :key="show.id"/>
            </div>
        </div>
    </section>
</template>

<script>

    import { store } from '../data/store';
    import TitleComponent from './TitleComponent.vue';
    import CardComponent from './CardComponent.vue';
    import CategoryNav from './CategoryNav.vue';
    export default {
        name: 'NewMovieSelect',
        components: {
            TitleComponent,
            CardComponent,
            CategoryNav
        },
        data(){
            return{
                store,
                selections: store.shows.map(show => show),
                categories: [
                    {
                        cat: 'All',
                    },
                    {
                        cat: 'Coming Soon',
                    },
                    {
                        cat: 'Latest Movies',
                    },
                    {
                        cat: 'Top Rated',
                    },
                    {
                        cat: 'Tv Series',
                    },
                ],
                currentI: 0
            }
        },
        methods: {
            selectCategory(i, category){
                this.currentI = i;
                this.selections = this.store.shows.map(show => show).filter((show) => {
                    if(show.category === category || category === 'All' || category === ''){
                        return true
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;

    .flex-wrap{
        height: fit-content;
    }
    .select-container{
        width: calc(380px * 3);
        margin: 0 auto;;
    }
</style>