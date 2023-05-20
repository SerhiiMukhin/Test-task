import React from 'react';
import css from './Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div className={css.wrapper}>
    <p className={css.text}>Welcome to Woofer!</p>
    <Link className={css.button} to='/tweets'>Go to tweets</Link>
  </div>
);
