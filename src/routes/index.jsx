import React from "react";

import {Routes, Route} from 'react-router-dom';
import Home from "../view/Home/Home";
import NotFound from "../view/NotFound/NotFound";
import Policy from "../view/Policy";


const AppRoutes = () =>{

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/politica-de-privacidade" element={<Policy/>} />
        </Routes>
    );
}

export default AppRoutes;