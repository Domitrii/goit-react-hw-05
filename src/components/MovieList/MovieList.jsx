import { Link, useLocation } from "react-router-dom"
import css from './MovieList.module.css'


function MovieList({films}) {
const location = useLocation()

  return (
    <ul className={css.moviesList}>
      {films !== null &&
        films.map((film) => (
          <li key={film.id}>
            <Link state={{from:location}} to={`/movies/${film.id}`} className={css.moviesLink}>
              {film.title}
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default MovieList