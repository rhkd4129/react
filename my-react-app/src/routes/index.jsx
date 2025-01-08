import React from "react";
import Home from "../pages/Home";
import TodoList from "../pages/TodoList";
import Index from "../layout/Index";
import {Route, Routes} from "react-router-dom";

// 메인 라우트 구성
export const mainRoutes = [
    {
        nav: "메인메뉴",
        routes: [
            {
                nav: "홈",
                title: "홈",
                path: "/",
                component: Home,
            },
            {
                nav: "할일목록",
                title: "할일목록",
                path: "/todoList",
                component: TodoList,
            }
        ]
    }
];

// 라우트 컴포넌트
export const AppRoutes = () => {
    // 중첩된 라우트들을 하나의 배열로 펼치기
    const flattenedRoutes = mainRoutes.reduce((prev, current) => {
        return current.routes && [...prev, ...current.routes];
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Index />}>
                {flattenedRoutes.map(({ path, component: Component }, i) => (
                    <Route
                        key={i}
                        path={path}
                        element={<Component />}
                    />
                ))}
                {/* 페이지를 찾을 수 없을 때 */}
                <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
