import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuth from "../Firebase/firebase.init";
initializeAuth();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState({});

    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => { setLoading(false) })
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => { setLoading(false) })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false)
        });
        return () => unsubscribed;
    }, [])

    return {
        user,
        error,
        googleSignIn,
        logOut,
        isLoading

    }
}

export default useFirebase;