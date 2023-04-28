<template> 
    <div class="col-4 px-3 pb-5 d-flex">
        <div :style="{background: 'linear-gradient(rgba(24,32,40, 0.60), rgba(24,32,40, 0.60)),url' + '(' + show.image + ')'}" :class="{'active': index === store.activeIndex || !rounded, 'rounded-0': !rounded, 'rounded-4': rounded} " class="my-card position-relative pb-5">
            <div class="perhov" :class="{'active': index === store.activeIndex || !rounded, 'rounded-0': !rounded, 'rounded-4': rounded}">
                <div class="d-flex justify-content-between pt-3 pe-2">
                    <div class="hours">
                        <span>{{ show.duration }}</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-star"></i>
                        <span>{{ show.voto }}/10</span>
                    </div>
                </div>
                <div class="card-bottom">
                    <h4 class="ps-2">{{show.title}}</h4>
                    <span class="ps-2">Category: {{ show.category }}</span>
                    <ButtonsComponent :views="'Views ' + show.views" :shared="false" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { store } from '../data/store';
    import ButtonsComponent from './ButtonsComponent.vue';
    export default {
        name: 'CardComponent',
        components: {
            ButtonsComponent
        },
        props: ['show', 'index', 'rounded'],
        data(){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;
    .col-4{
        height: calc(100vw / 3);
    }
    .my-card{
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right;
        height: 100%;
        width: 89%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .card-bottom{
            position: absolute;
            bottom: 50px;
            height: fit-content;
            left: 0;
            right: 0;
        }

        
        &.active{
            transform: scale(1.1);
            .perhov{
                @include absolute-100;
                &:hover{
                    background: $my-bg-linear;
                }
            }
            &:hover .hours{
            opacity: 1;
            }
        }
    }
    i{
            color: $my-contrast;
        }
        .hours{
            @include radius-right;
            background-color: $my-contrast;
            padding: 3px 10px;
            opacity: 0;
        }
</style>