<template>
    <section id="latest-news">
        <div class="container">
            <TitleComponent title="Latest News" subtitle="Lorem ipsum dummy text eiusque cum dolor"/>
        </div>
        <div class="container pt-5 justify-content-between d-flex">
            <div class="w-50 p-2">
                <div :style="{backgroundImage: 'url' + '(' + store.posts[activePost].image + ')'}" class="big-square p-relative">
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
                    <div @click="getIndex(post.id)" class="smaller-square" v-for="(post, index) in slicedPosts" :key="post.id" :style="{backgroundImage: 'url' + '(' + post.image + ')'}">
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
                return this.store.posts.map(post => post).filter((post, index) => index !== this.activePost);
            },
        },
        methods:{
            getIndex(id){
            this.activePost = this.store.posts.findIndex((post) => post.id === id);
            }
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
        .big-square{
            background-image: url('/imgs/assets/blog-300x300.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            padding: 1rem 0;
            position: relative;

            .perhov{
            @include absolute-100;
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
        }
        .perhov{
            @include absolute-100;
            background-color: rgba(0,0,0,0.5);
        }
        .perhov:hover{
            background: $my-bg-linear;
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