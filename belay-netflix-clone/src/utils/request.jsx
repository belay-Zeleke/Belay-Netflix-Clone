var Api_Key = "ccc9c56a676a577d2e284609511076a4";


var requests = {

    fetchTrending: `/trending/all/week?api_key=${Api_Key}&language=en-US   `,
    fetchNetflixOrginals: `/discover/tv?api_key=${Api_Key}&with_networks=213  `,
    fetchTopRate: `/movie/top_rated?api_key=${Api_Key}&language=en-US `,
    fetchActionMov: `/discover/movie?api_key=${Api_Key}&with_genres=28 `,
    fetchComedyMov: `/discover/movie?api_key=${Api_Key}&with_genres=35 `,
    fetchHorrorMov: `/discover/movie?api_key=${Api_Key}&with_genres=27  `,
    fetchRomanceMov: `/discover/movie?api_key=${Api_Key}&with_genres=10749`,
    fetchDocmentaries: `/discover/movie?api_key=${Api_Key}&with_genres=99`,
    fetchAnimation: `/discover/movie?api_key=${Api_Key}&with_genres=16`,
    fetchDrama: `/discover/movie?api_key=${Api_Key}&with_genres=18`,
    fetchScienceFiction: `/discover/movie?api_key=${Api_Key}&with_genres=878`,

    fetchHistory: `/discover/movie?api_key=${Api_Key}&with_genres=36`,
    fetchFamily: `/discover/movie?api_key=${Api_Key}&with_genres=10751`,
    fetchAdventure: `/discover/movie?api_key=${Api_Key}&with_genres=12`,

}
export default requests;