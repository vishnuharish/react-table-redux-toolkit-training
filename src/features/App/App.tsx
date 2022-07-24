import React from "react";
import { Userinfo } from "../userInfo/userInfo";
import {Home} from '../Home/Home';
import "./styles/App.scss";
import {Routes, Route, Link} from "react-router-dom";

export const App: React.FC<{}> = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/userinfo" element={<Userinfo/>} />
            </Routes>
        </div>
    );
};
