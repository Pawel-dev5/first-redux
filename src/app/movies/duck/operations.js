import { movieActions } from ".";
import actions from "./actions";

const API = 'http://www.omdbapi.com/?s=harry&apikey='
const APIKEY = process.env.REACT_APP_OMDB_API;

const fetchMovies = async () => {
    const response = await fetch(`${API}${APIKEY}`, { method: 'GET' })
    const json = await response.json()

    return json
}

export const getAllMovies = () =>
    async (dispatch) => {
        const movies = await fetchMovies()
        console.log(movies)
        movies.Search.map(movie => dispatch(actions.add(movie.Title)))
    }