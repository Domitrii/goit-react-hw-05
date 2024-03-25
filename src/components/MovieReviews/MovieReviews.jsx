import { useParams } from "react-router-dom"
import { fetchFilmReviews } from "../APIService/APIService"
import Loader from "../Loader/Loader"
import { useEffect, useState } from "react"
import Empty from "../Empty/Empty"


function MovieReviews() {
const {filmId} = useParams()

const [reviews, setReviews] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)
const [errorMsg, setErrorMsg] = useState('')
const [isEmpty, setIsEmpty] = useState(true)

useEffect(() => {
    setLoading(true)
    const getFilmReviews = async() =>{
      try{
        setError(false)
        const {results} = await fetchFilmReviews(filmId)
        if(results.length === 0){
            setIsEmpty(true)
        }
        setReviews(results)
      } catch(error) {
        setError(true)
        setErrorMsg(error)
      } finally{
        setLoading(false)
      }
    }
    getFilmReviews()
}, [filmId])

return (
    <>
      <h3>Review:</h3>
      {loading && <Loader />}
      {isEmpty && <Empty />}
      {reviews !== null && (
        <ul>
          {reviews.map((item) => (
            <li key={item.id}>
              <p>{item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MovieReviews