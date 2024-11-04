import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Navigation from "../Navigation/Navigation";
import { lazy, Suspense } from "react";
import s from "./App.module.css";
import { Hourglass } from "react-loader-spinner";
import November24 from "../November24/November24";
import October24 from "../October24/October24";
import December24 from "../December24/December24";
import MonthlyData from "../MonthlyData/MonthlyData";

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
          <Route path="/monthly-data" element={<MonthlyData />}>
            <Route path="october-2024" element={<October24 />} />
            {/* <Route path="november-2024" element={<November24 />} />
            <Route path="december-2024" element={<December24 />} /> */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
