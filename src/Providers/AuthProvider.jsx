import { createContext, useState } from "react"
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [error,setError]= useState('')

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)

  }
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const googleSignInUser = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }
  const logOut = () => {
    return signOut(auth);
  }
  // observe auth state change
  // ata user ta ke save kore dhore rakhe;
  useState(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('current value of the current user', currentUser, '');
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe();
    }
  }, [])
  const authInfo = {
    user,
    createUser,
    signInUser,
    googleSignInUser,
    setUser,
    logOut,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}