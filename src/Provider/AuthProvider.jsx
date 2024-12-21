/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { app } from "../firebase/firebase.config";
// import { useGetAllProductQuery } from "../Redux/features/Admin/admin.apis";

export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [searchProduct, setSearchProduct] = useState("")
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    // const axiosPublic = useAxiosPublic();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = ({ name, photo }) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
            setLoading(false);
            // console.log(currentUser);
            if (currentUser) {
                setUser(currentUser);
                const userData = {
                    email: currentUser.email
                }
                const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/user`, userData)
                // console.log(response);import { app } from './../firebase/firebase.config';

                console.log(response.data.token);
                localStorage.setItem('accessToken', response.data.token)

            }
            else {
                setUser(null)
                localStorage.removeItem("accessToken")
            }

        });
        return () => {
            return unsubscribe();
        }
    }, [])



    const authInfo = {
        loading,
        isSidebarOpen,
        setIsSidebarOpen,
        updateUserProfile,
        logOut,
        googleSignIn,
        signIn,
        createUser,
        user,
        searchProduct,
        setSearchProduct
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;