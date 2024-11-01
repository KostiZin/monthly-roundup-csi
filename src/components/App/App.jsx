import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Navigation from "../Navigation/Navigation";
import { lazy, Suspense } from "react";
import s from "./App.module.css";
import { Hourglass } from "react-loader-spinner";

const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

function App() {
  return (
    <div className={s.wrapper}>
      <Navigation />
      <Suspense
        fallback={
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{ marginTop: "50px" }}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
