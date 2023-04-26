<template>
  <HeaderComponent :brands="brands" :navLinks="navLinks"/>
  <MainComponent />
  <FooterComponent />
</template>

<script>
  import { store } from './data/store';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
  export default {
    name:'App',
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent
    },
    data(){
      return{
        store,
        brands: [
          'fa-facebook-f', 'fa-twitter', 'fa-linkedin-in', 'fa-square-instagram', 'fa-google-plus-g'
        ],
        navLinks:[
            {
              title: 'Home',
              caret: true
            },
            {
              title: 'Celebrity',
              caret: true
            },
            {
              title: 'Movie',
              caret: true
            },
            {
              title: 'Page',
              caret: true
            },
            {
              title: 'Shop',
              caret: true
            },
            {
              title: 'Blog',
              caret: false
            },
            {
              title: 'Contact Us',
              caret: false
            }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>