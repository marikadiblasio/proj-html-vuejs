<template>
        <li :key="i"  class="pe-4" @click.prevent="$emit('doSearch', i, cat.cat)">
            <a :class="currentI === i ? 'my-contrast' : ''" href="#"> {{ cat.cat }} </a>
        </li>
</template>
<script>
    import { store } from '../data/store';
    export default {
        name: 'CategoryNav',
        props:['cat', 'i', 'currentI'],
        data(){
            return{
                store,
            }
        },
        mounted(){
        }
    }
</script>

<style lang="scss" scoped>

</style>