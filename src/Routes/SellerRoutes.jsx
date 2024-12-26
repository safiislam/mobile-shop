/* eslint-disable react/prop-types */
import useGetMe from "../Hooks/useGetMe";
import Loading from "../Components/Loading";
import getAuth from "../Hooks/getAuth";
import { Navigate } from "react-router-dom";

const SellerRoutes = ({ children }) => {
    const { getMe, isLoading } = useGetMe()
    console.log(getMe);
    const { loading, user } = getAuth()

    if (loading || isLoading) {
        return <div> <Loading></Loading> </div>
    }

    if (user?.email && getMe?.role == 'Seller') {
        return children
    }
    else {
        return <Navigate to={'/'} />
    }

};

export default SellerRoutes;