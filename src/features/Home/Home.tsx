import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Home.scss';

export const Home: React.FC<{}> = () => {
    return(
        <div className="home-container">
            <div className="header">
                <h1>Home</h1>
            </div>
            <div className="content">
                <Link className="link" to="/userinfo">Userinfo</Link>
                <Link className="link" to="/pokemon">Pokemon</Link>
            </div>
        </div>
    );
}
