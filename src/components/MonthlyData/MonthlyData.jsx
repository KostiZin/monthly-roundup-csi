import { Suspense } from "react";
import { Hourglass } from "react-loader-spinner";
import { NavLink, Outlet } from "react-router-dom";
import s from "../../pages/MovieDetailsPage/MovieDetailsPage.module.css";
import Chart from "../Chart/Chart";

const MonthlyData = () => {
  return (
    <div>
      <hr />
      <p className={s.pInfo}>Months</p>
      <hr />
      <h3>Chats</h3>
      <div>
        <Chart />
      </div>
      <div className={s.linkWrapper}>
        <NavLink className={s.link} to="october-2024">
          October 2024
        </NavLink>
        {/* <NavLink className={s.link} to="november-2024">
          November 2024
        </NavLink>
        <NavLink className={s.link} to="december-2024">
          December 2024
        </NavLink> */}
        {/* <Chart /> */}
      </div>

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
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MonthlyData;
