import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";


import Error from "../pages/ErrorPage";
import {AuthContext} from "../context";
import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
    /*    const {isAuth}=useContext<any>(AuthContext)//any???*/

    return (
        <Routes>
            {/*     {isAuth
                ? <>{privateRoutes.map(route => <Route key={route.path} path={route.path}
                                                       element={route.components()}/>)}</>
                : <>{publicRoutes.map(route => <Route key={route.path} path={route.path}
                                                      element={route.components()}/>)}</>
            }*/}

            {privateRoutes.map(route => <Route key={route.path} path={route.path}
                                               element={<route.components/>}/>)}
            <Route path={'/404'} element={<Error/>}/>
            <Route path={'*'} element={<Navigate to="404"/>}/>

        </Routes>


    );
};

export default AppRouter;