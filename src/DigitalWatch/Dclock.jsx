import React,{useState,useEffect} from 'react';
import './index2.css'
function Dclock(){
    const [Time,setTime]=useState(new Date());
    useEffect(()=>{
        const Inter=setInterval(()=>{
            setTime(new Date())
        },1000)
       return ()=> clearInterval(Inter);
    },[])
    function Format(){
        let hours=Time.getHours();
        let minutes=Time.getMinutes();
        let sec=Time.getSeconds();
        let meridiem=hours>=12?"pm":"am"
        hours=hours%12||12;
         minutes = minutes < 10 ? `0${minutes}` : minutes;
        sec = sec < 10 ? `0${sec}` : sec;
        return `${hours}:${minutes}:${sec} ${meridiem}`
    }
    return(
        <p>{Format()}</p>
    )

}
export default Dclock;