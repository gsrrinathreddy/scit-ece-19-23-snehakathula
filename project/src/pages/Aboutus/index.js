import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';
export default function Aboutus(){
const [loader,setLoader] = useState(true);
    const [Aboutus,setAboutus] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/aboutus')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutus(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
    return(

        <>
<Typography>Name: SNEHA</Typography>
<Typography>Father Name: ANJAIAH</Typography>
<Typography>Mother Name: SRILATHA</Typography>
<Typography>Email: snehakathula15@gmail.com</Typography>
<Typography>Phone No.: 9949688674</Typography>
        </>
        
    )
}