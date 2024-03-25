import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_basic = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTBmNmFiNWRiOGI0NGE0NDhjNTA3NDU3YTZjY2Q1NyIsInN1YiI6IjY1ZmRlM2ExMTk3ZGU0MDE4NjE2ZWQyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ppL9TL4n1El5EtXoTcM5UjQ4xKHTZ8bcbhN3xt7zAx4'

export const fetchFilms = async () => {
        const {data} = await axios.get('trending/movie/day', {
            headers: {
                Authorization: `Bearer ${API_basic}`
            }
        });
        return data;
    }

export const fetchFilmsId = async (filmId) =>{
    const {data} = await axios.get(`movie/${filmId}`, {
        headers: {
            Authorization: `Bearer ${API_basic}`
        }
    })
    return data
}

export const fetchFilmCastId = async(castId) => {
    const {data} = await axios.get(`movie/${castId}/credits`, {
        headers: {
            Authorization: `Bearer ${API_basic}`
        }
    })
    return data
}

export const fetchFilmReviews = async(revId) => {
    const {data} = await axios.get(`movie/${revId}/reviews`, {
        headers: {
            Authorization: `Bearer ${API_basic}`
        }
    })
    return data
}