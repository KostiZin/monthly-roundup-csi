import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.activeLink);
};

const Navigation = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        Movies
      </NavLink>
      <NavLink to="/monthly-data" className={buildLinkClass}>
        Monthly data
      </NavLink>
    </div>
  );
};

export default Navigation;
