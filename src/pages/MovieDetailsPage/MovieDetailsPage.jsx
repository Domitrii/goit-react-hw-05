// import { useEffect, useRef, useState } from "react"
// import { useLocation, useParams } from "react-router-dom"
// import { fetchFilmsId } from "../../components/APIService/APIService"




// function MovieDetailsPage() {
// const {filmId} = useParams()

// const [film, setFilm] = useState(null)
// const [loading, setLoading] = useState(false)
// const [error, setError] = useState(false)
// const location = useLocation()
// const privLinkRef = useRef(location.state ?? '/movies')

// useEffect(() => {
//     const getFilmById = async () => {
//         try{
//             const data = fetchFilmsId(filmId)
//             setFilm(data)
//             console.log(film)
//         } catch(error) {
//             setError(error)
//         }
//     }
//     getFilmById()
// }, [filmId])

//   return (
//     <div>MovieDetailsPage</div>
//   )
// }

// export default MovieDetailsPage