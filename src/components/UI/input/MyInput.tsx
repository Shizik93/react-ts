import React, {ForwardedRef, InputHTMLAttributes} from 'react';
import style from './MyInput.module.css'
const MyInput =React.forwardRef( (props:InputHTMLAttributes<HTMLInputElement>,ref:ForwardedRef<any>) => {
    return (
        <input ref={ref} className={style.myInput} {...props}/>

    );
})

export default MyInput;