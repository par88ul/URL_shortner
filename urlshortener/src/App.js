// import React from "react";
import React, {useEffect , useState} from 'react'
 import Home from '../components/home'
import Axios from "axios";

const App = () =>{
    const [data,setData]=useState("");

    // const getData=async()=>{
    //     const response=await Axios.get("http://127.0.0.1:5500/getData");
    //     setData(response.data);
    // }
    // useEffect(()=>{
    //     getData()

    // },[]);
    return (
        <Home/>
        
    )
}

export default App