<template>
    <div class="col-4 px-3 d-flex">
        <div :style="{backgroundImage: 'url' + '(' + show.image + ')'}" :class="{'active': index === store.activeIndex} " class="my-card rounded-4">
            <div class="text-end pt-3 pe-2">
                <i class="fa-solid fa-star"></i>
                <span>{{ show.voto }}/10</span>
            </div>
            <div class="card-bottom">
                <h4 class="ps-2">{{show.title}}</h4>
                <span class="ps-2">Category: {{ show.category }}</span>
                <div class="d-flex pt-3 justify-content-between">
                    <a href="#" class="card-tag">Details</a>
                    <a href="#" class="card-tag">Views {{ show.views }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { store } from '../data/store';
    export default {
        name: 'CardComponent',
        props: ['show', 'index'],
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
        height: calc(100vw / 4);
    }
    .my-card{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        i{
            color: $my-contrast;
        }
        .card-tag{
            background-color: $my-primary;
            padding: 5px 20px;
            margin-bottom: 1rem;
        }
        .card-tag:last-child{
            border-top-left-radius: 15px ;
            border-bottom-left-radius: 15px ;
        }
        .card-tag:first-child{
            border-top-right-radius: 15px ;
            border-bottom-right-radius: 15px ;
        }
        &.active{
            transform: scale(1.2);
            &:hover{
                filter: brightness(10%); //da modificare!!!
            }
        }
    }

</style>