import clsx from 'clsx';
import { useEffect, useState } from "react";
import { fetchFilms } from '../../components/APIService/APIService';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const buildLinkClass = ({ isActive }) => {
 return clsx(css.link, isActive && css.active);
};

const HomePage = () => {

  const [films, setFilms] = useState(null)
  const [loader, setLoader] = useState(false)
  const [error,setError] = useState(false)

  useEffect(() => {
    setLoader(true)
    const getFilms = async() =>{
      try{
        setError(false)
        const {results} = await fetchFilms()
        setFilms(results)
      } catch(error) {
        setError(error)
      } finally{
        setLoader(false)
      }
    }
    getFilms()
  }, [])



 return (
    <>
    {loader && <Loader />}
    {error && <NotFoundPage />}
     <h1>Tranding today</h1>
     {<MovieList films={films} />}
   </>
  );
};

export default HomePage