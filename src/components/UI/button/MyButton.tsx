import React, {ButtonHTMLAttributes} from 'react';
import style from './MyButton.module.css'

const MyButton = ({pr, ...props}: MyButtonPropsType) => {
    return (
        <button {...props} className={style.mybtn}>
            {props.children}
        </button>
    );
};

export default MyButton

type MyButtonPropsType = { pr?: string } & ButtonHTMLAttributes<HTMLButtonElement>