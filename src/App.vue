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
              "title": "Home",
              "caret": true,
              "ref": "#"
            },
            {
              "title": "Celebrity",
              "caret": true,
              "ref": "#"
            },
            {
              "title": "Movie",
              "caret": true,
              "ref": "#new-movie-slider"
            },
            {
              title: 'Page',
              caret: true,
              ref: '#'
            },
            {
              title: 'Shop',
              caret: true,
              ref: '#'
            },
            {
              title: 'Blog',
              caret: false,
              ref: '#latest-news'
            },
            {
              title: 'Contact Us',
              caret: false,
              ref: '#'
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