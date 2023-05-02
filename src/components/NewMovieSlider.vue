<template>
    <section id="new-movie-slider" class="container pb-4">
        <div class="d-flex justify-content-between">
            <TitleComponent class="flex-grow-1" title="New Movie" subtitle="Lorem ipsum dummy text eiusque cum dolor"/>
            <div class="d-flex">
                <button @click="scrollLeft" class="circle"><i class="fa-solid fa-chevron-left"></i></button>
                <button @click="scrollRight" class="circle"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
        <div class="pt-5 pb-3 overflow-hidden">
            <div ref="slider" @wheel.prevent="" class="d-flex pt-5 align-item-center slider">
                <CardComponent @click="store.activeIndex = index" v-for="(show, index) in store.shows" :show="show" :rounded="true" :key="index" :index="index"/>
            </div>
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
                store,
            }
        },
        methods: {
            scrollRight() {
                if(store.activeIndex === 0 ){
                    store.activeIndex++;
                    return
                } 
                if(store.activeIndex < store.shows.length - 1){
                    store.activeIndex++;
                }
                const slider = this.$refs.slider;
                slider.scrollBy({
                left: 380,
                behavior: "smooth",
	            });
            },
            scrollLeft() {
                if(store.activeIndex === store.shows.length - 1){
                    store.activeIndex--;
                    return
                }
                if(store.activeIndex > 0){
                    store.activeIndex--;
                }
                const slider = this.$refs.slider;
                slider.scrollBy({
                left: -380,
                behavior: "smooth",
                });
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
            cursor: pointer;
        }
        .slider {
            overflow-x: auto;
            height: fit-content;
            width: calc(380px * 3);
            margin: 0 auto;
        }
        ::-webkit-scrollbar {
                width: 0px;
            }
    }
</style>