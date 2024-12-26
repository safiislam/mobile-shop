/* eslint-disable react/prop-types */
import useGetMe from '../Hooks/useGetMe';
import getAuth from '../Hooks/getAuth';
import Loading from '../Components/Loading';
import { Navigate } from 'react-router-dom';

const AdminRoutes = ({ children }) => {
    const { getMe, isLoading } = useGetMe()
    console.log(getMe);
    const { loading, user } = getAuth()

    if (loading || isLoading) {
        return <div> <Loading></Loading> </div>
    }

    if (user?.email && getMe?.role == 'Admin') {
        return children
    }
    else {
        return <Navigate to={'/'} />
    }
};

export default AdminRoutes;