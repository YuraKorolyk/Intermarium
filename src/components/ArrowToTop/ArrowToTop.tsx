'use client';
import React, {useEffect, useState} from 'react';
import classes from './ArrowToTop.module.scss';
import Arrow from "../../../public/assets/icons/Arrow";
const ArrowToTop = () => {
  const isBrowser = () => typeof window !== 'undefined';
  const scrollToTop = ()=> {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const height = window.innerHeight;
  useEffect(() => {
    console.log(height)
  }, [height]);

  return (
    <div className={classes.arrowContainer} onClick={scrollToTop}>
      <div className={classes.arrow}>
        <Arrow fill="#286E8D"/>
      </div>
    </div>
  );
};

export default ArrowToTop;
