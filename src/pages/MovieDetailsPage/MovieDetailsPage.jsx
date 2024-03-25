import { Suspense, lazy, useEffect, useRef, useState } from "react"
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom"
import { fetchFilmsId } from "../../components/APIService/APIService"
import Loader from "../../components/Loader/Loader"

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../../components/MovieReviews/MovieReviews"))

function MovieDetailsPage() {
const {filmId} = useParams()

const [film, setFilm] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)
const location = useLocation()
const privLinkRef = useRef(location.state ?? '/')

useEffect(() => {
    setLoading(true)
    const getFilmById = async() =>{
      try{
        setError(true)
        const data = await fetchFilmsId(filmId)
        setFilm(data)
      } catch(error) {
        setError(error)
      } finally{
        setLoading(false)
      }
    }
    getFilmById()
}, [filmId])

return (
    <>
      {loading && <Loader />}
      {film !== null && (
        <div>
          <Link to={privLinkRef.current}>Go Back</Link>
          <h1>{film.title}</h1>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
              alt=""
            />
            <div>
              <p>{film.original_title}</p>
              <p>
                <b>Overview</b>
              </p>
              <p>{film.overview}</p>
              <p>
                <b>Popularity:</b> {film.popularity}
                <b>Release date:</b> {film.release_date}
              </p>
            </div>
          </div>
          <div>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
          <Suspense fallback = {<Loader />}>
            <Routes>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} /> 
            </Routes>
          </Suspense>
        </div>
      )}
    </>
  );
}

export default MovieDetailsPage