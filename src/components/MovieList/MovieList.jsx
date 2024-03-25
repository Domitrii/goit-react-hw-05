import { Link, useLocation } from "react-router-dom"


function MovieList({films}) {
const location = useLocation()

  return (
    <ul>
      {films !== null &&
        films.map((film) => (
          <li key={film.id}>
            <Link state={{from:location}} to={`/movies/${film.id}`}>
              {film.title}
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default MovieList