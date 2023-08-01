'use client';
import React, {FC, ReactNode, useState} from 'react';
import classes from "./LinkWithDropdown.module.scss";
import Arrow from "../../../public/assets/icons/Arrow";
import {useRouter} from "next/navigation";

interface IProps {
  title: string,
  description?: string,
  children: ReactNode,
  dropdown: string,
  linkTo?: string,
}

const LinkWithDropdown: FC<IProps> = ({title, description, children, dropdown, linkTo}) => {
  const [descriptionOpened, setDescriptionOpened] = useState<boolean>(false)
  const router = useRouter();
  const arrowDropdownHandler = () => {
    setDescriptionOpened((prevState) => !prevState)
  }
  const arrowLinkHandler = () => {
    router.push(`/practices/visaSupport/${linkTo}`)
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