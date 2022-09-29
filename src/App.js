import React from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import "./App.css";
import { Route ,Routes,Navigate} from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/" element={<Navigate to="/signup"/>}/>
            </Routes>
        </div>
    );
}
