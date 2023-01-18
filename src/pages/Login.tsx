import React, {FormEvent, useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";


const Login = () => {
    const {isAuth, setIsAuth} = useContext<any>(AuthContext)//any???
    const login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsAuth(true)

    }
    if(isAuth){
       return
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput type={'text'} placeholder={'Введите логин'}/>
                <MyInput type={'password'} placeholder={'Введите пароль'}/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;