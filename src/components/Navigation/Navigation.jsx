import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'
import clsx from "clsx";

export const Navigation = () => {
    const activeLinkClass = ({ isActive }) => {
        return clsx(css.naveLink, { [css.active]: isActive });
      };
  return (
    <nav className={css.navList}>
      <NavLink to="/" className={activeLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={activeLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
};
