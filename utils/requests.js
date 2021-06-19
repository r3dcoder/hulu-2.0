const API_KEY = process.env.API_KEY;

export default {
    fetchTrending : {
        title: 'Trending',
        utl: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated : {
        title: 'Top Rated',
        utl: `/trending/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies : {
        title: 'Action',
        utl: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies : {
        title: 'Comedy',
        utl: `/discover/movie?api_key=${API_KEY}$&with_genres=35`
    },
    fetchHorrorMovies : {
        title: 'Horror',
        utl: `/discover/movie?api_key=${API_KEY}$&with_genres=27`
    },
    fetchRomanceMovies : {
        title: 'Romance',
        utl: `/discover/movie?api_key=${API_KEY}$&with_genres=10749`
    },
    fetchMystery : {
        title: 'Mystery',
        utl: `/discover/movie?api_key=${API_KEY}$&with_genres=9648`
    },
    fetchSciFi : {
        title: 'Sci-Fi',
        utl: `/discover/movie?api_key=${API_KEY}$&with_genres=878`
    },
    fetchWestern : {
        title: 'Western',
        utl: `/discover/movie?api_key=${API_KEY}$&with_genres=37`
    },
    fetchAnimation : {
        title: 'Animation',
        utl: `/discover/movie?api_key=${API_KEY}$&with_genres=16`
    },
    fetchTv : {
        title: 'Tv',
        utl: `/discover/movie?api_key=${API_KEY}$&with_genres=10770`
    },
     
}