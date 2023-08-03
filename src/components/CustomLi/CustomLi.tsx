import React, {FC} from 'react';
import classes from './CustomLi.module.scss'

interface IProps {
  children: React.ReactNode,
  color?: string,
}

const CustomLi:FC<IProps> = ({children, color}) => {
  return (
    <li className={classes.customLi}>
      {children}
    </li>
  );
};

export default CustomLi;