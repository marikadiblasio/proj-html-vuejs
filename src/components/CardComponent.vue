<template>
    <div class="col-4 px-3 pb-5 d-flex">
        <div :style="{backgroundImage: 'url' + '(' + show.image + ')'}" :class="{'active': index === store.activeIndex || !rounded, 'rounded-0': !rounded, 'rounded-4': rounded} " class="my-card pb-5">
            <div class="text-end pt-3 pe-2">
                <i class="fa-solid fa-star"></i>
                <span>{{ show.voto }}/10</span>
            </div>
            <div class="card-bottom">
                <h4 class="ps-2">{{show.title}}</h4>
                <span class="ps-2">Category: {{ show.category }}</span>
                <ButtonsComponent :views="'Views ' + show.views" :shared="false"/>
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
        background-size: cover;
        background-position: center;
        height: 100%;
        width: 89%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        i{
            color: $my-contrast;
        }
        &.active{
            transform: scale(1.1);
            &:hover{
                filter: brightness(10%); //da modificare!!!
            }
        }
    }

</style>