"use client"
import React, {FC} from 'react';
import classes from './CustomAnchorLi.module.scss'

interface IProps {
  children: React.ReactNode,
  color?: string,
  targetId: string;

}

const CustomAnchorLi:FC<IProps> = ({children, color, targetId}) => {

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <li className={classes.customLi} style={color === "light" ? {color: "#ECECEC"} : {}}>
      <a href={`#${targetId}`} onClick={handleClick}>{children}</a>
    </li>
  );
};

export default CustomAnchorLi;