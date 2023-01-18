import React from 'react';
import style from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}: MyModalPropsType) => {    // исправить any
    const rootStyles = [style.myModal]
    if (visible) {
        rootStyles.push(style.active)
    }
    return (
        <div className={rootStyles.join(' ')} onClick={() => {
            setVisible(false)
        }}>
            <div onClick={(e) => {
                e.stopPropagation()
            }} className={style.myModalContent}>
                {children}

            </div>


        </div>
    );
};

export default MyModal;

type MyModalPropsType = {
    children: any
    visible: boolean
    setVisible: (value: boolean) => void
}