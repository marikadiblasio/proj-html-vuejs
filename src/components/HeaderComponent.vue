<template>
    <header class="py-4">
        <div id="top" class="container d-flex  align-items-center justify-content-between pt-2 top-header">
            <div class="d-flex align-items-center">
                <i class="fa-regular pe-2 fa-envelope"></i>
                <span>Superhit Top Movie </span>
                <span class="my-contrast">**King Star**</span>
                <ul class="d-flex align-items-end ps-3 m-0">
                    <li v-for="brand in newBrands"><a href="#"><i :class="brand" class="fa-brands"></i></a></li>
                </ul>
            </div>
            <div>
                <i class="fa-solid pe-2 fa-lock"></i>
                <a href="#subscription">Login</a>
            </div>
        </div>
        <hr>
        <div class="container d-flex justify-content-between main-header">
            <div>
                <img src="/imgs/assets/cropped-logo.png" alt="logo">
            </div>
            <div class="input-group w-25">
                <input type="text" name="search" class="form-control" placeholder="Search">
                <span class="btn d-flex align-items-center rounded-0">Search</span>
            </div>
        </div>
        <hr>
        <nav class="container pb-2 d-flex justify-content-between bottom-header">
            <ul class="d-flex">
                <li class="position-relative" v-for="(link, index) in navLinks" :key="index" @click="prova">
                    <a :href="link.ref">{{link.title}} 
                        <i v-if="link.caret" class="fa-solid fa-caret-down"></i>
                    </a>
                    <div class="drop">
                        <ul class="unstyled text-white">
                            <li v-for="n in 6">
                                <span>{{ link.title + n }}</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div>
                <i class="fa-solid position-relative fa-basket-shopping">
                    <span class="position-absolute top-0 start-100 translate-middle p-1 border border-light rounded-circle">
                        <span class="xs d-flex align-content-center justify-content-center">0</span>
                    </span>
                </i>
            </div>
        </nav>
        <div class="hero py-5">
            <div class="container text-center">
                <h5>Welcome To Our Movie Site</h5>
                <h2 class="text-uppercase">Our Special <span class="my-contrast">Movies</span></h2>
                <p>Lorem ispum is simpl dummy text of the printing and typesetting industrioy. Lorem ipsum hes been the industry standerd dummy text ever since the 1500s, when an unknown</p>
                <button class="btn rounded-5">Read more</button>
            </div>
            <div class="extra ms-auto me-4"><a href="#top"><i class="fa-solid fa-angle-up"></i></a></div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        props: ['brands', 'navLinks'],
        data(){
            return{
                // activeIndex: 2
            }
        },
        computed: {
            newBrands(){
                const plus = ['fa-google-plus-g'];
                return this.brands.concat(plus);
            }
        },
        methods:{
            prova(){
                // console.log(this.index);

                // this.activeIndex = this.index;
                // console.log(this.activeIndex);
                // console.log(this.index);
                // console.log(this.navLinks);
            }
        },
        mounted(){
            // console.log(this.activeIndex);
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;     
    .drop{
        position: absolute;
        left: 0;
        top: 100%;
        background-color: black;
        width: 10rem;
        height: fit-content;
        text-align: left;
        opacity: 0;
    }
    li.position-relative:hover .drop{
        opacity: 1;
    }
    li.position-relative.active{
        color: $my-contrast;
    }
    li{
        padding-left: 1rem;
    }
    hr{
        color: $my-border;
        background-color: $my-border;
        border: 1px solid $my-border;
    }
    .fa-facebook-f{
        color: $fb;
        &:hover{
            color: $my-contrast;
        }
    }
    .fa-twitter{
        color: $twit;
        &:hover{
            color: $my-contrast;
        }
    }
    .fa-linkedin-in{
        color: $in;
        &:hover{
            color: $my-contrast;
        }
    }
    .fa-square-instagram{
        color: $insta;
        &:hover{
            color: $my-contrast;
        }
    }
    .fa-google-plus-g{
        color: $g-plus;
        &:hover{
            color: $my-contrast;
        }
}
    .btn{
        color: $my-tertiary;
        background-color: $my-contrast;
    }
    .main-header{
        input{
            background-color: $my-primary;
            border-color: $my-border;
        }
    }
    .bottom-header{
        i>span{
            background-color: $my-contrast;
        }
        .xs{
            font-size: .2rem;
        }
    }
    .hero{
        background-image: url('/imgs/assets/slider.jpg');
        background-position: center;
        background-size: cover;
        .container{
            width: 30%;
            margin-right: 15%;

            button.btn:hover{
                color: black;
                background-color: $my-tertiary;
            }
        }
    }
    .extra{
        // @include small-square;
        background-color: $my-tertiary;
        width: 2rem;
        height: 2rem;
        color: grey;
        text-align: center;
        line-height: 2rem;
    }
</style>