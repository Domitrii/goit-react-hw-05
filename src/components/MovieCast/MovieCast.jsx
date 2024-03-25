import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchFilmCastId } from "../APIService/APIService"



function MovieCast() {
    const { filmId }= useParams()

    const [cast, setCast] = useState(null)
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)

useEffect (() => {
    const getCastOfFilm = async() => {
        try{
            const resp = await fetchFilmCastId(filmId)
            setCast(resp)
        } catch(error) {
            setError(error)
        }
    }
    getCastOfFilm()
}, [filmId])



  return (
    <div>MovieCast</div>
  )
}

export default MovieCast