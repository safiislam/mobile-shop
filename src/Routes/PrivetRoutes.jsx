/* eslint-disable react/prop-types */

import Loading from '../Components/Loading';
import { Navigate, useLocation } from 'react-router-dom';
import getAuth from '../Hooks/getAuth';

const PrivetRoutes = ({ children }) => {
    const { loading, user } = getAuth()
    const token = localStorage.getItem('accessToken')
    const location = useLocation()

    if (loading) {
        return <div> <Loading></Loading> </div>
    }
    if (!token || !user) {
        return <Navigate to="/login" state={{ from: location }} replace={true} />;
    }

    return children;
};

export default PrivetRoutes;