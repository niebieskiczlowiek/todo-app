import {BrowserRouter, Route, Routes} from "react-router-dom";
import Error from "./pages/Error";
import Main from "./pages/Main";
import React from "react";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/error" Component={Error}/>
                <Route path="/" Component={Main}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;