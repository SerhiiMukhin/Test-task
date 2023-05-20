import React from 'react';
import css from './Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div className={css.wrapper}>
    <span className={css.animation}>
      <p className={css.text}>Welcome to Woofer!</p>
    </span>
    <Link className={css.button} to="/tweets">
      Go to woofs! :)
    </Link>
  </div>
);
