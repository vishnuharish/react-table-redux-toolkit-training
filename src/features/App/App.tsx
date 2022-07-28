import React from "react";
import { Userinfo } from "../userInfo/userInfo";
import {Home} from '../Home/Home';
import { Pokemon } from "../Pokemon/Pokemon";
import { Counter } from "../Counter/Counter";
import "./styles/App.scss";
import {Routes, Route} from "react-router-dom";

export const App: React.FC<{}> = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/userinfo" element={<Userinfo/>} />
                <Route path="/Pokemon" element={<Pokemon />} />
                <Route path="/Counter" element={<Counter />} />
            </Routes>
        </div>
    );
};
