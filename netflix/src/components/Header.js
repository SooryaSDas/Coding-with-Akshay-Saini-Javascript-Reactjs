import {signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store=>store.user)
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            // navigate("/")

          }).catch((error) => {
            // An error happened.
          });
    }
    useEffect(()=>{
        // if auth sign in or sign out time it will work
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties uid, email, displayname
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
                navigate("/browse")
            } else {
              // User is signed out
             dispatch(removeUser());
             navigate("/")
            }
        });
        return ()=> unsubscribe();
       },[]);
    return(
        <div className=" w-screen px-8 py-2 bg-gradient-to-b from-black absolute z-10 flex justify-between">
            <img className="w-44" src={LOGO} alt="netflix" />
           { user && <div className="flex p-2">
                <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
                <button onClick={handleSignOut} className="font-bold text-white">Sign out</button>
            </div>}
        </div>
    )
}

export default Header;