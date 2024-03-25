import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchFilmCastId } from "../APIService/APIService"
import Loader from "../Loader/Loader"
import css from './MovieCast.module.css'


function MovieCast() {
const {filmId} = useParams()

const [cast, setCast] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)
const [errorMsg, setErrorMsg] = useState('')

useEffect(() => {
    setLoading(true)
    const getFilmById = async() =>{
      try{
        setError(false)
        const {cast} = await fetchFilmCastId(filmId)
        setCast(cast)
      } catch(error) {
        setError(true)
        setErrorMsg(error)
      } finally{
        setLoading(false)
      }
    }
    getFilmById()
}, [filmId])

  return (
    <>
      {loading && <Loader />}
      {cast !== null && (
        <ul className={css.list}>
           {cast.map((item) => (
            <li key={item.id} className={css.castItem}>
                    <img className={css.prifilePhoto}
                    src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                    alt=""
                    />
                    <p className={css.paragraph}>{item.name}</p>
                    <p className={css.paragraph}>Character: {item.character}</p>
            </li>
           ))} 
        </ul>
      )}  
    </>
  )
}

export default MovieCast