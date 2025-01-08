import React from 'react';
import { Link } from "react-router-dom";
import { mainRoutes } from '../routes';
import "../css/layout/header.css"
import findRoute from "../utils/findRoute";
const Header = () => {
    // mainRoutes에서 모든 하위 라우트 가져오기
    // const navigationLinks = mainRoutes.reduce((prev, current) => {
    //     return current.routes && [...prev, ...current.routes];
    // }, []);
    //         {navigationLinks.map((link) => (
    //             <Link key={link.path} to={link.path}>
    //                 {link.nav}
    //             </Link>
    //         ))}
    const homeRoute = findRoute("/");
    const todoRoute = findRoute("/todoList");

    return (
        <div className="header">
            <nav>
                <span className="left-section">
                    {homeRoute && (
                        <Link to={homeRoute.path} title={homeRoute.title}>
                            {homeRoute.nav}
                        </Link>
                    )}
                </span>

                <span className="right-section">
                    {todoRoute && (
                        <Link to={todoRoute.path} title={todoRoute.title}>
                            {todoRoute.nav}
                        </Link>
                    )}
                </span>
            </nav>
        </div>
    );
}
export default Header;
