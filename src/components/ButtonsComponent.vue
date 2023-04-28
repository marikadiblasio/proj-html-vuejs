<template>
<div class="d-flex pt-3 justify-content-between">
    <a href="#" class="card-tag bg-card-tag">Details</a>
    <a href="#" :class="shared ? '' : 'bg-card-tag'" class="card-tag">{{views }}</a>
</div>
</template>

<script>
    export default {
        name: 'ButtonsComponent',
        props: ['views', 'shared']
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;
    div{
        height: 2rem;
    }
    .card-tag:last-child{
        @include radius-left;
    }
    .card-tag:first-child{
        @include radius-right;
    }
    .card-tag{
        padding: 5px 20px;
        margin-bottom: 1rem;
        height: 2rem;
    }
    .bg-card-tag{
        background-color: $my-primary;
    }
</style>