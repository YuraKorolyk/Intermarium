import React, {FC} from 'react';
import classes from './CustomLi.module.scss'

interface IProps {
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
}

const CustomLi: FC<IProps> = ({ children, color, fontSize }) => {
  // Use a template literal to concatenate classes and fontSize conditionally
  const liClassName = fontSize ? `${classes.customLi} ${classes[`f${fontSize}`]}` : classes.customLi;

  return (
    <li className={liClassName} style={color === "light" ? { color: "#ECECEC" } : {}}>
      {children}
    </li>
  );
};

export default CustomLi;
