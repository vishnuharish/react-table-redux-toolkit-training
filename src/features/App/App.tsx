import React from "react";
import { Userinfo } from "../userInfo/userInfo";
import "./styles/App.scss";

export const App: React.FC<{}> = () => {
    return (
        <div className="app">
            <Userinfo />
        </div>
    );
};
