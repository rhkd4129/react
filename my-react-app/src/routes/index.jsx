// src/router/Router.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import PageA from '../pages/PageA';
import PageB from '../pages/PageB';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/a" />} />
            <Route path="/a" element={<PageA />} />
            <Route path="/b" element={<PageB />} />
        </Routes>
    );
}
