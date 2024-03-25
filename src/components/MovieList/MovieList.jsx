import { Link } from "react-router-dom"


function MovieList({films}) {
  return (
    <ul>
      {films !== null &&
        films.map((film) => (
          <li key={film.id}>
            <Link state={location} to={`/movies/${film.id}`}>
              {film.title}
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default MovieList