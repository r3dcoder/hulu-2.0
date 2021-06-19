const API_KEY = process.env.API_KEY;

export default {
    fetchTrending : {
        title: 'Trending',
        url: `/trending/all/day?api_key=9ddacb70aca6a2092c9cc6b570a74a3c`
    },
    fetchTopRated : {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=9ddacb70aca6a2092c9cc6b570a74a3c&language=en-US&page=1`
    },
    fetchActionMovies : {
        title: 'Action',
        url: `/discover/movie?api_key=9ddacb70aca6a2092c9cc6b570a74a3c&language=en-US&include_adult=false&include_video=false&page=1&with_genres=28`
    },
    fetchComedyMovies : {
        title: 'Comedy',
        url: `/search/company?api_key=9ddacb70aca6a2092c9cc6b570a74a3c&query=comedy&page=1`
    },
    fetchHorrorMovies : {
        title: 'Horror',
        url: `/search/company?api_key=9ddacb70aca6a2092c9cc6b570a74a3c&query=Horror&page=1`
    },
    fetchRomanceMovies : {
        title: 'Romance',
        url: `/search/company?api_key=9ddacb70aca6a2092c9cc6b570a74a3c&query=Romance&page=1`
    },
    fetchMystery : {
        title: 'Mystery',
        url: `/search/company?api_key=9ddacb70aca6a2092c9cc6b570a74a3c&query=Mystery&page=1`
    },
    fetchSciFi : {
        title: 'Sci-Fi',
        url: `/search/company?api_key=9ddacb70aca6a2092c9cc6b570a74a3c&query=Sci-Fi&page=1`
    },
    fetchWestern : {
        title: 'Western',
        url: `/search/company?api_key=9ddacb70aca6a2092c9cc6b570a74a3c&query=Western&page=1`
    },
    fetchAnimation : {
        title: 'Animation',
        url: `/search/company?api_key=9ddacb70aca6a2092c9cc6b570a74a3c&query=Animation&page=1`
    },
    fetchTv : {
        title: 'Tv',
        url: `/search/company?api_key=9ddacb70aca6a2092c9cc6b570a74a3c&query=Tv&page=1`
    },
     
}


 