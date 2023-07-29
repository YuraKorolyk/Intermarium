'use client';
import React, {FC, ReactNode, useState} from 'react';
import classes from "./LinkWithDropdown.module.scss";
import Arrow from "../../../public/assets/icons/Arrow";

interface IProps {
  title: string,
  description?: string,
  children: ReactNode,
  dropdown: string,
}

const LinkWithDropdown: FC<IProps> = ({title, description, children, dropdown}) => {
  const [descriptionOpened, setDescriptionOpened] = useState<boolean>(false)
  const arrowDropdownHandler = () => {
    setDescriptionOpened((prevState) => !prevState)
  }
  const arrowLinkHandler = () => {
    // setDescriptionOpened((prevState) => !prevState)
    console.log('link')
  }
  return (
    <div className={classes.list}>
      <div className={classes.numbers}>
        <div className={classes.iconBox}>
          {children}
        </div>
        <div className={classes.titleArrowBox}>
          <div className={classes.textTitle}>
            {title}
          </div>
          {dropdown === "dropdown" ? (
            <div className={descriptionOpened ? `${classes.arrow} ${classes.active}` : classes.arrow}
                 onClick={arrowDropdownHandler}>
              <Arrow color="#ECECEC"/>
            </div>
          ) : dropdown === "link" ? (
            <div
              className={classes.arrowLink}
              onClick={arrowLinkHandler}>
              <Arrow color="#ECECEC"/>
            </div>
          ) : null
          }
        </div>
      </div>
      <div className={classes.description}>
        <div className={descriptionOpened ? `${classes.text} ${classes.active}` : classes.text}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default LinkWithDropdown;