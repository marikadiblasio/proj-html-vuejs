<template>
    <footer>
        <div class="top-footer">
            <div class="container d-flex">
                <div class="w-25">
                    <h6>Abous Us</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore sint nobis nulla repudiandae qui, commodi minus. Quisquam, fuga quibusdam accusantium ad minus quod minima.</p>
                </div>
                <div  class="w-25">
                    <ul>
                        <li><h6>Movie Category</h6></li>
                        <li v-for="category in movieCategories"><a href="#">{{ category }}</a></li>
                    </ul>
                </div>
                <div  class="w-25">
                    <ul>
                        <li><h6>Information</h6></li>
                        <li v-for="info in informations"><a href="#">{{ info }}</a></li>
                    </ul>
                </div>
                <div  class="w-25">
                    <h6>Recent Post</h6>
                    <div v-for="post in subPosts" class="d-flex pb-3 align-items-center">
                        <img :src="post.smallImage" :alt="post.title">
                        <div class="ps-2">
                            <div class="pointer">{{ post.title }}</div>
                            <span>{{ post.date }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-footer py-4">
            <div class="container d-flex align-items-center justify-content-between">
                <ul class="align-items-center m-0 d-flex">
                    <li class="pe-3" v-for="link in bottomLinks"><a class="text-white" :href="link.ref">{{link.refName}}</a></li>
                </ul>
                <div class="d-flex">&copy; 2020 <span class="my-contrast">@Themepull</span>All Right Reserved</div>
            </div>
        </div>
    </footer>
</template>

<script>
    import { store } from '../data/store';
    export default {
        name:'FooterComponent',
        props: ['bottomLinks', 'movieCategories', 'informations'],
        data(){
            return{
                store
            }
        },
        computed: {
         subPosts(){ return this.store.posts.slice(0,3)}
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/_variables.scss' as * ;
    .top-footer{
        background: linear-gradient(rgba(24,32,40, 0.90), rgba(24,32,40, 0.90)), url('/imgs/assets/ft-bg.jpg');
        background-position: center;
        background-size: cover;
        li{
            padding-bottom: 1rem;
        }
        h6 {
            padding-top: 2rem;
            padding-bottom: .5rem;
            font-size: 1.5rem;
            position: relative;
            cursor: pointer;

            &:after{
                content: '';
                padding-top: 1px;
                border: 1px solid $my-tertiary;
                left: 0;
                bottom: 0;
                width: 20%;
                position: absolute;
            }
        }
        img {
            @include my-square;
        }
    }
    .bottom-footer{
        background-color: $my-secondary;
    }
</style>