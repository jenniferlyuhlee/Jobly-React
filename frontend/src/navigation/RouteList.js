import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import CompanyList from "../companies/CompaniesList";
import CompanyDetails from "../companies/CompanyDetail";
import JobsList from "../jobs/JobsList";
import Profile from "../auth-user/Profile";
import LoginForm from "../auth-user/LoginForm";
import SignupForm from "../auth-user/SignupForm"
import Placeholder from "../placeholder";

/**
 * Jobly Routes
 *
 */

function RouteList({login, signup}){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Placeholder/>}></Route>
                <Route path="/companies" 
                    element={<ProtectedRoute element={<CompanyList />} />} 
                />
                <Route path="/companies/:handle" 
                    element={<ProtectedRoute element={<CompanyDetails />} />}   
                />
                <Route path="/jobs"
                    element={<ProtectedRoute element={<JobsList />} />}   
                />
                <Route path="/profile"
                    element={<ProtectedRoute element={<Profile />} />}   
                />
                <Route path="/signup" element={<SignupForm signup={signup}/>} />
                <Route path="/login" element={<LoginForm login={login}/>} />
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
        </div>
    )
}

export default RouteList;