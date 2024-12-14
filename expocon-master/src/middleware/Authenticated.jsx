import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import Login from "../Pages/Auth/Login"; 
import { checkAuthentication } from "../helpers";


export default function UserPrivateRoutes() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [auth] = useAuth(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (auth?.token) {
            setIsAuthenticated(checkAuthentication(auth.token))
        }
    }, [auth?.token]);

    return isAuthenticated ? <Outlet /> : <Login />

}
