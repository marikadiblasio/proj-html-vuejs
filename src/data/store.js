import { reactive } from "vue";

export const store = reactive({
    shows: [
        {
            image: '/imgs/assets/1.jpg',
            squareImage: '/imgs/assets/1-234x300.jpg',
            title: 'Hurry Animate Blue Strack New Movie',
            category:'Top Rating',
            voto: 0,
            views: 381,
            comments: 0,
            date: 'February 12, 2016',
            duration: '2.30.00',
            playlist: false,
            id: 1
        },
        {
            image: '/imgs/assets/2.jpg',
            squareImage: '/imgs/assets/2-100x100.jpg',
            title: 'Quisque Author Movie in Strack',
            category:'Coming Soon',
            voto: 0,
            views: 947,
            comments: 0,
            date: 'April 14, 2020',
            duration: '2.30.00',
            playlist: false,
            id: 2
        },
        {
            image: '/imgs/assets/5.jpg',
            squareImage: '/imgs/assets/5-100x100.jpg',
            title: 'New Movie Quisque in Strack',
            category:'Latest Movie',
            voto: 0,
            views: 721,
            comments: 0,
            date: 'February 12, 2016',
            duration: '2.30.00',
            playlist: true,
            playlistDate: 'February 12, 2016',
            id: 3
        },
        {
            image: '/imgs/assets/3.jpg',
            squareImage: '/imgs/assets/3-100x100.jpg',
            title: 'Movie Action Garila English',
            category:'Coming Soon',
            voto: 0,
            views: 362,
            comments: 0,
            date: 'February 12, 2016',
            duration: '2.30.00',
            playlist: true,
            id: 4
        },
        {
            image: '/imgs/assets/3.jpg',
            squareImage: '/imgs/assets/3-100x100.jpg',
            title: 'Blue Strack New Animate Movie',
            category:'Coming Soon',
            voto: 0,
            views: 410,
            comments: 0,
            date: 'February 12, 2016',
            duration: '2.30.00',
            playlist: false,
            id: 4
        },
        {
            image: '/imgs/assets/3-1.jpg',
            squareImage: '/imgs/assets/3-1-100x100.jpg',
            title: 'Action Garila English Movie',
            category:'',
            voto: 0,
            views: 296,
            comments: 0,
            date: 'February 12, 2016',
            duration: '2.30.00',
            playlist: true,
            id: 5
        },
        {
            image: '/imgs/assets/4.jpg',
            squareImage: '/imgs/assets/4-229x300.jpg',
            title: 'Nulla Strack New Animate Movie',
            category:'Tv Series',
            voto: 0,
            views: 324,
            comments: 0,
            date: 'February 12, 2016',
            duration: '2.30.00',
            playlist: false,
            id: 6
        },
        {
            image: '/imgs/assets/3-2.jpg',
            squareImage: '/imgs/assets/3-222x300.jpg',
            title: 'Quisque in Strack New Movie',
            category:'Top Rating',
            voto: 0,
            views: 339,
            comments: 0,
            date: 'February 12, 2016',
            duration: '2.30.00',
            playlist: false,
            id: 7
        },
        {
            image: '/imgs/assets/5-1.jpg',
            squareImage: '/imgs/assets/5-1.jpg',
            title: 'Animate Blue Strack New Movie',
            category:'Tv Series',
            voto: 0,
            views: 324,
            comments: 0,
            date: 'February 12, 2016',
            duration: '2.30.00',
            playlist: false,
            id: 6
        },
    ],
    posts: [
        {
            image: '/imgs/assets/blog-300x300.jpg',
            smallImage: '/imgs/assets/blog-150x150.jpg',
            title: 'Actor The concept Movie High Concept Theory See The Post',
            // subtitle: 'See the Post',
            comments: 0,
            date: 'April 14, 2020',    
        },
        {
            image: '/imgs/assets/blog2-300x300.jpg',
            smallImage: '/imgs/assets/blog2-150x150.jpg',
            title: 'Consequat Nam Lectus Nibh Aucibus It has Turpis',
            // subtitle: 'See the Post',
            comments: 0,
            date: 'April 14, 2020',    
        },
        {
            image: '/imgs/assets/blog3-300x300.jpg',
            smallImage: '/imgs/assets/blog3-150x150.jpg',
            title: 'Nam Lectus Nibh Consequat Aucibus Turpis It Has',
            // subtitle: 'See the Post',
            comments: 0,
            date: 'April 14, 2020',    
        },
        {
            image: '/imgs/assets/blog4-300x300.jpg',
            smallImage: '/imgs/assets/blog4-150x150.jpg',
            title: 'give Me The Head Of Alfredo Garcia Best Movie In',
            // subtitle: 'See the Post',
            comments: 0,
            date: 'April 14, 2020',    
        },
        {
            image: '/imgs/assets/blog5-300x300.jpg',
            smallImage: '/imgs/assets/blog5-150x150.jpg',
            title: 'Pump Action Interaction English Action Movie (2020)',
            // subtitle: 'See the Post',
            comments: 0,
            date: 'April 14, 2020',    
        },
    ],
    activeIndex: 1
})