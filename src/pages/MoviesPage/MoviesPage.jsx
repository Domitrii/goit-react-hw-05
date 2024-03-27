import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchFilmByQuery } from "../../components/APIService/APIService";
import Empty from "../../components/Empty/Empty";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";


function MoviesPage() {
const [films, setFilms] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)
const [isEmpty, setIsEmpty] = useState(false)

const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("query");
    
    useEffect(() => {
        if (searchQuery === null) {
            return;
          }
        setLoading(true)
        const getFilmByQuery = async() =>{
          try{
            setError(false)
            const {results} = await fetchFilmByQuery(searchQuery)
            if(results.length == 0){
                setIsEmpty(true)
                return
            }
            setFilms(results)
          } catch(error) {
            setError(true)
          } finally{
            setLoading(false)
          }
        }
        getFilmByQuery()
    }, [searchQuery])

    const onSetQueryValue = (queryValue) => {
        setSearchParams({ query: queryValue });
        setFilms([]);
      };

  return (
    <div>
      <SearchBar onSubmit={onSetQueryValue} />
      {loading && <Loader />}
      <MovieList films={films} />
      {isEmpty && <Empty />}
    </div>
  )
}

export default MoviesPage