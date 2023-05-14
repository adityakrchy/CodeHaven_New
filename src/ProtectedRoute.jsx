import React from 'react'
import { Navigate } from 'react-router-dom';
// import auth from './firebase'
import { AuthContext } from './AuthContext'
const ProtectedRoute = ({ children }) => {

    const user = AuthContext;
    if (user) {
        return <Navigate to="/coding" />
    }
    else {
        return <Navigate to="/login" />
    }
    
}

export default ProtectedRoute