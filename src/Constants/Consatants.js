export const baseUrl = 'https://api.themoviedb.org/3/'
export const API_KEY = "9744186d580f2affd099ae157bf58d1d"

// --------------  Image formats  ----------------
export const imgBaseUrl_original = 'https://image.tmdb.org/t/p/original'
export const imgBaseUrl_w500 = 'https://image.tmdb.org/t/p/w500'
export const imgBaseUrl_w400 = 'https://image.tmdb.org/t/p/w400'
export const imgBaseUrl_w300 = 'https://image.tmdb.org/t/p/w300'
export const imgBaseUrl_w200 = 'https://image.tmdb.org/t/p/w200'
export default function Constants(params) {
let constLink = ""
    if (params === baseUrl) constLink = baseUrl;
    if (params === API_KEY) constLink = API_KEY;
    if (params === imgBaseUrl_original) constLink = imgBaseUrl_original;
    if (params === imgBaseUrl_w500) constLink = imgBaseUrl_w500;
    if (params === imgBaseUrl_w400) constLink = imgBaseUrl_w400;
    if (params === imgBaseUrl_w300) constLink = imgBaseUrl_w300;
    if (params === imgBaseUrl_w200) constLink = imgBaseUrl_w200;

    if (params === "Netflix Originals") constLink = `discover/tv?api_key=9744186d580f2affd099ae157bf58d1d&with_networks=213`;
    if (params === "Trending") constLink = `trending/all/week?api_key=9744186d580f2affd099ae157bf58d1d&language=en-US`
    if (params === "Action") constLink = `discover/movie?api_key=${API_KEY}&with_genres=28`
    if (params === "Comedy Movies") constLink = `discover/movie?api_key=${API_KEY}&with_genres=35`
    if (params === "Horror Movies") constLink = `discover/movie?api_key=${API_KEY}&with_genres=27`
    if (params === "Romance Movies") constLink = `discover/movie?api_key=${API_KEY}&with_genres=10749`
    if (params === "Documentaries") constLink = `discover/movie?api_key=${API_KEY}&with_genres=99`
    return constLink
}
