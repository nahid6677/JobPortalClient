import { useContext } from "react";
import AuthContext from "../component/authContext/AuthContext";

const UseAuth = () => {
    const context = useContext(AuthContext) 
    return context;
};

export default UseAuth;