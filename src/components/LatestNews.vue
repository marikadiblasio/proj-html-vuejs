<template>
    <section id="latest-news">
        <div class="container pt-5 d-flex">
            <div class="w-50 p-2">
                <div class="big-square">
                    <h4 class="px-4 ">{{ store.posts[0].title }}</h4>
                    <ButtonsComponent :views="'moviestar ' + store.posts[0].comments + 'Comment Share'" :shared="true" />
                </div>
            </div>
            <div class="w-50 p-2">
                <div class="d-flex g-3 justify-content-between flex-wrap">
                    <div class="smaller-square" v-for="post in slicedPosts" :style="{backgroundImage: 'url' + '(' + post.image + ')'}">
                        <h5 class="px-3">{{ post.title }}</h5>
                        <ButtonsComponent views="Share" :shared="true" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { store } from '../data/store';
    import TitleComponent from './TitleComponent.vue';
    import ButtonsComponent from './ButtonsComponent.vue';
    export default {
        name:'LatestNews',
        components: {
            TitleComponent,
            ButtonsComponent
        },
        data(){
            return{
                store
            }
        },
        computed: {
            slicedPosts(){ 
                return this.store.posts.slice(1,5);
            },
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;

    .w-50.p-2{
        & > div{
            width: 40vw;
            height: 40vw;
        }
        h4, h5{
            padding-top: 65%;
        }
        .big-square{
            background-image: url('/imgs/assets/blog-300x300.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            padding: 1rem 0;
            position: relative;
            z-index: -2;

            &::after{
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.3);
            z-index: -1;
            }
        }
        .big-square * {
            z-index: 100;
        }
        .smaller-square{
            width: 48%;
            height: 48%;
            position: relative;
            z-index: -2;
        }
        .smaller-square * {
            z-index: 3;
        }
        .smaller-square::after{
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.9);
            z-index: -1;
        }
    }
</style>