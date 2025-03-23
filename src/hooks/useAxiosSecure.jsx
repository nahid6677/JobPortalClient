import axios from 'axios';
import React, { useEffect } from 'react';
import UseAuth from './UseAuth';
import auth from '../component/firebase/Firebase.init';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const instanceAxios = axios.create({
    baseURL: `http://localhost:3000/`,
    withCredentials: true
})

const useAxiosSecure = () => {
const {setLoading} = UseAuth()
const navigate = useNavigate()
    useEffect(() =>{
        instanceAxios.interceptors.response.use( (responce) =>{
            return responce;
        },(error) =>{
            console.log("error caught in the interseptor", error);
            if(error.status=== 401 || error.status === 403){
                signOut(auth)
                .then(() =>{
                    console.log("logout User")
                    setLoading(false);
                    navigate("/signin")
                }).catch(err =>{
                    setLoading(false);
                    console.log(err)
                })
                
            }
            return Promise.reject(error);
        })
    },[])
    return instanceAxios
};

export default useAxiosSecure;