import React from "react";

import {Routes, Route} from 'react-router-dom';
import Home from "../view/Home";
import NotFound from "../view/NotFound";


const AppRoutes = () =>{

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}

export default AppRoutes;