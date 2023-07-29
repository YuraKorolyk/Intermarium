import React, {FC} from 'react';
import classes from './HeaderBackground.module.scss';

interface IProps {
    background: string,
}

const HeaderBackground:FC<IProps> = ({background}) => {
    return (
        <div
          className={classes.wrapper}
          style={{backgroundImage: `url("/assets/images/headerBackground/${background}.jpg")`}}
        >

        </div>
    );
};

export default HeaderBackground;