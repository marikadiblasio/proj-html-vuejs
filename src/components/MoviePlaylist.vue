<template>
   <section id="movie-playlist" class="container pb-4">
            <TitleComponent title="Movie Playlist" subtitle="Lorem ipsum dummy text eiusque cum dolor" />
            <div class="d-flex justify-content-between">
                <div class="video-player position-relative">
                    <div class="d-flex align-items-center p-1">
                        <img class="circle m-0" src="/imgs/assets/channels4_profile.jpg" alt="logo">
                        <h4>Yeh Saali AAshiqui| Official Trailer |Vardhan Puri, Shivaleek cipcipcip</h4>
                        <div class="text-center w-6">
                            <i class="fa-solid mx-auto fa-clock"></i>
                            <h6>Guarda più tardi</h6>
                        </div>
                        <div class="text-center w-6">
                            <i class="fa-solid fa-share"></i>
                            <h6>Condividi</h6>
                        </div>
                    </div>
                    <div class="yt-div p-1">
                        <span class="fs-5">Guarda su</span>
                        <img class="yt-logo w-6" src="/imgs/assets/youtube.png" alt="logo">
                    </div>
                </div>
                <div class="playlist-bar p-3">
                    <div>
                        <h6>New Movie</h6>
                        <span>Plying {{ playMovie.length }}</span>
                    </div>
                    <div class="playlist-container py-2">
                        <div v-for="show in playMovie" class="d-flex py-2 align-items-center">
                            <div class="my-square py-2">
                                <img :src="show.squareImage" :alt="show.title">
                            </div>
                            <div class="ps-2 pt-4 pb-2">
                                <h6>{{ show.title }}</h6>
                                <div>{{ show.views }} Views</div>
                                <div class="d-flex justify-content-between">
                                    <span>{{ show.date }}</span>
                                    <span>{{ show.duration }}</span>
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
    export default {
        name: 'MoviePlaylist',
        components:{
            TitleComponent
        },
        data(){
            return{
                store
            }
        },
        computed: {
            playMovie(){
                return this.store.shows.map(show => show).filter(show => show.playlist);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;
    .video-player{
        width: 60%;
        height: 45vh;
        background-color: black;

        h4, h6{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .yt-div{
            background-color: $my-border;
            width: 12rem;
            position: absolute;
            left: 0;
            bottom: 5px;
            span{
                vertical-align: middle;
            }
            .yt-logo{
                filter: invert(1);
                vertical-align: middle;
            }
        }
    }
    .playlist-bar{
        height: 45vh;
        width: 38%;
        background-color: $my-secondary;

        div:first-child{
            border-bottom: 1px solid $my-border;
            height: 4rem;
        }
        .playlist-container{
            height: calc(100% - 5rem);
            overflow-y: auto;
            
            img, .my-square{
                width: 100px;
                height: 100px;
            }
            img{
                object-fit: cover;
            }
        }
    }

</style>