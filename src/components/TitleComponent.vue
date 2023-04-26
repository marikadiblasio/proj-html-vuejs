<template>
    <div class="ps-3 mb-4">
        <h5 class="fw-bold">{{title}}</h5>
        <span>{{subtitle}}</span>
    </div>
</template>

<script>
    export default {
        name: 'TitleComponent',
        props: ['title', 'subtitle']
    }
</script>

<style lang="scss" scoped>
    @use '../assets/partials/variables' as *;
    div{
        border-left: 2px solid $my-contrast;
        border-bottom: 0.2px solid $my-border;
    }
</style>