import { Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/Default";

import History from "./pages/history";
import Home from "./pages/home";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/history" element={<History />} />
            </Route>
        </Routes>
    )
}