const API_KEY = process.env.API_KEY;

export default {
    fetchTrending : {
        title: 'Trending',
        url: `/trending/all/day?api_key=9ddacb70aca6a2092c9cc6b570a74a3c`
    },
    fetchTopRated : {
        title: 'Top Rated',
        url: `/trending/all/day?api_key=9ddacb70aca6a2092c9cc6b570a74a3c`
    },
    fetchActionMovies : {
        title: 'Action',
        url: `/discover/movie?api_key=9ddacb70aca6a2092c9cc6b570a74a3c&with_genres=28`
    },
    fetchComedyMovies : {
        title: 'Comedy',
        url: `/discover/movie?api_key=9ddacb70aca6a2092c9cc6b570a74a3c$&with_genres=35`
    },
    fetchHorrorMovies : {
        title: 'Horror',
        url: `/discover/movie?api_key=9ddacb70aca6a2092c9cc6b570a74a3c$&with_genres=27`
    },
    fetchRomanceMovies : {
        title: 'Romance',
        url: `/discover/movie?api_key=9ddacb70aca6a2092c9cc6b570a74a3c$&with_genres=10749`
    },
    fetchMystery : {
        title: 'Mystery',
        url: `/discover/movie?api_key=9ddacb70aca6a2092c9cc6b570a74a3c$&with_genres=9648`
    },
    fetchSciFi : {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=9ddacb70aca6a2092c9cc6b570a74a3c$&with_genres=878`
    },
    fetchWestern : {
        title: 'Western',
        url: `/discover/movie?api_key=9ddacb70aca6a2092c9cc6b570a74a3c$&with_genres=37`
    },
    fetchAnimation : {
        title: 'Animation',
        url: `/discover/movie?api_key=9ddacb70aca6a2092c9cc6b570a74a3c$&with_genres=16`
    },
    fetchTv : {
        title: 'Tv',
        url: `/discover/movie?api_key=9ddacb70aca6a2092c9cc6b570a74a3c$&with_genres=10770`
    },
     
}