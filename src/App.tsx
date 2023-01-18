import React, {useState} from 'react';
import './styles/App.css'
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import {AuthContext} from "./context";


function App() {
    const [isAuth, setIsAuth] = useState(false)
    console.log(isAuth)


return (
    <div className={'App'}>
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <Navbar/>
            <AppRouter/>
        </AuthContext.Provider>


    </div>

);

}

export default App


