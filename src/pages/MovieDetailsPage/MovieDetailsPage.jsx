import { useEffect, useRef, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { fetchFilmsId } from "../../components/APIService/APIService"

function MovieDetailsPage() {
const {filmId} = useParams()

const [film, setFilm] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)
const location = useLocation()
const privLinkRef = useRef(location.state ?? '/movies')

useEffect(() => {
    const getFilmById = async () => {
        try{
            const data = fetchFilmsId(filmId)
            setFilm(data)
        } catch(error) {
            setError(error)
        }
    }
    getFilmById()
}, [filmId])

return (
    <>
      {isLoading && <Loader />}
      {isError && <Error errorName={errorName} />}
      {film !== null && (
        <div>
          <Link to={backLinkRef.current}>Go Back</Link>
          <h1 className={css.filmMainTitle}>{film.title}</h1>
          <div className={css.filmWrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
              alt=""
            />
            <div className={css.filmDescriptionWrapper}>
              <p className={css.filmTitle}>{film.original_title}</p>
              <p>
                <b>Overview</b>
              </p>
              <p className={css.filmOverview}>{film.overview}</p>
              <p className={css.filmRating}>
                <b>Popularity:</b> {film.popularity}
                <b>Release date:</b> {film.release_date}
              </p>
            </div>
          </div>
          <div className={css.filmAdditionalInfo}>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>

          <Suspense fallback={<Loader />}>
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