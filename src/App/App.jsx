import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navigation } from "../components/Navigation/Navigation";
import Loader from "../components/Loader/Loader";
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));


function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
