import { Suspense } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { ThreeCircles } from 'react-loader-spinner';

export const SharedLayout = () => {
  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <div className={css.header_container}>
          <Link className={css.logo} to="/">
            <img src={require('../../images/woofer.png')} alt="" width="50" height="50" />
            <p className={css.name}>Woofer</p>
          </Link>
          <nav className={css.nav}>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'navLink')} to="/">
              Home
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'navLink')} to="/tweets">
              Woofs
            </NavLink>
          </nav>
        </div>
      </header>
      <Suspense
        fallback={
          <div className={css.spinner_wrapper}>
            <ThreeCircles
              height="150"
              width="150"
              color="#471ca9"
              ariaLabel="three-circles-rotating"
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
