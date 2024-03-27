import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navigation } from "../components/Navigation/Navigation";
import Loader from "../components/Loader/Loader";
import MoviesPage from "../pages/MoviesPage/MoviesPage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:filmId/*" element={<MovieDetailsPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
