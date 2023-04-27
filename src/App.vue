<template>
  <HeaderComponent :brands="brands" :navLinks="navLinks"/>
  <MainComponent />
  <FooterComponent  :brands="brands" :bottomLinks="bottomLinks" :movieCategories="movieCategories" :informations="informations"/>
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
          'fa-facebook-f', 'fa-twitter', 'fa-linkedin-in', 'fa-square-instagram'
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
        ],
        bottomLinks: [ 
          {
            refName: 'Tram And Conditions',
            ref: '#'
          },
          {
            refName: 'Policy',
            ref: '#'
          },
          {
            refName: 'About',
            ref: '#'
          }
        ],
        movieCategories: [ 'English New Movie', 'Hindi All Movie', 'Latest Tamil Movie', 'Homn New Movie', 'Animation New Movie'],
        informations: [ 'Youtube Video Post', 'Actor Information', 'New Promotion', 'Latest Movie in English', 'Latest Film Product', 'video New Video'],

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>