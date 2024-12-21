/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const getAuth = () => {
    const user = useContext(AuthContext)
    return user
};

export default getAuth;