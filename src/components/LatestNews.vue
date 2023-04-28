<template>
    <section id="latest-news">
        <div class="container pt-5 justify-content-between d-flex">
            <div class="w-50 p-2">
                <div class="big-square p-relative">
                    <div class="perhov">
                        <div class="date">{{ store.posts[activePost].date }}</div>
                        <div class="bottom-card">
                            <h4 class="px-4 ">{{ store.posts[activePost].title }}</h4>
                            <ButtonsComponent :views="'moviestar ' + store.posts[activePost].comments + 'Comment Share'" :shared="true" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-50 p-2">
                <div class="d-flex g-3 justify-content-between flex-wrap">
                    <div  class="smaller-square" v-for="(post, index) in slicedPosts" :key="index" :style="{backgroundImage: 'url' + '(' + post.image + ')'}">
                        <div class="perhov">
                            <div class="date">{{ post.date }}</div>
                            <div class="bottom-card">
                                <h5 class="px-3">{{ post.title }}</h5>
                                <ButtonsComponent views="Share" :shared="true" />
                            </div>
                        </div>
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
                store,
                activePost: 0
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
        // h4, h5{
        //     padding-top: 45%;
        // }
        .big-square{
            background-image: url('/imgs/assets/blog-300x300.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            padding: 1rem 0;
            position: relative;

            .perhov{
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.3);
            }
        }
        .big-square * {
            z-index: 100;
        }
        .smaller-square{
            width: 48%;
            height: 48%;
            position: relative;
            // z-index: -2;
        }
        // .smaller-square * {
        //     z-index: 3;
        // }
        .perhov{
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
        }

        .perhov:hover{
            background: linear-gradient(180deg, rgba(19, 190, 19, 0.29) 1.82%, rgba(88, 199, 88, 0.445859) 52.25%, rgba(217, 217, 217, 0.06) 94.57%), linear-gradient(180deg, rgba(19, 190, 19, 0.65) 0%, rgba(217, 217, 217, 0.06) 52.08%);
        }
        .date{
            @include radius-left;
            background-color: $my-contrast;
            display: inline-block;
            position: absolute;
            right: 0;
            top: 10px;
            padding: 3px 5px;
            opacity: 0;
        }
        .perhov:hover .date{
            opacity: 1;
        }
        .bottom-card{
            position: absolute;
            bottom: 15px;
            height: fit-content;
            left: 0;
            right: 0;
        }
    }
</style>