'use client';
import React, {useEffect, useState} from 'react';
import classes from './ArrowToTop.module.scss';
import Arrow from "../../../public/assets/icons/Arrow";
const ArrowToTop = () => {
  const scrollToTop = ()=> {
    const element = document.documentElement || document.body;
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  return (
    <div className={classes.arrowContainer} onClick={scrollToTop}>
      <div className={classes.arrow}>
        <Arrow fill="#286E8D"/>
      </div>
    </div>
  );
};

export default ArrowToTop;
