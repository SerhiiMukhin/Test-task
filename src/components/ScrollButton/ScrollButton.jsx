import React, { useState, useEffect } from 'react';
import css from './ScrollButton.module.css';
import { BsArrowUpCircleFill } from 'react-icons/bs';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const initialHeight = window.innerHeight;
      const scrollPercentage = (scrollTop / initialHeight) * 100;

      if (scrollPercentage > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {showButton && (
        <BsArrowUpCircleFill
          onClick={handleScrollToTop}
          className={css.button}
        ></BsArrowUpCircleFill>
      )}
    </div>
  );
};

export default ScrollToTopButton;
