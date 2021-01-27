import React,{useEffect, useContext} from 'react'
import { Context } from '../context/AuthContext';

export default function ResolveAuthScreen() {
    const {tryLocalSignin } = useContext(Context);


//when open the app,check if there is signin details saved before
useEffect(()=>{
    tryLocalSignin();
  },[]);

    return null;
}
