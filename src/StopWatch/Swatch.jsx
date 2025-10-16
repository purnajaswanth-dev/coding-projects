import './index3.css'
import React,{useState,useEffect,useRef} from 'react';
function Swatch(){
    const [Run,setRun]=useState(false);
    const [Elapse,setElapse]=useState(0);
    const Inter=useRef();
    const Refe=useRef();
    useEffect(()=>{
        if(Run){
            Inter.current=setInterval(()=>{
                setElapse(Date.now()-Refe.current)
            },10);
        }
            return ()=>clearInterval(Inter.current)
        },[Run]);
    function Start(){
        setRun(true);
        Refe.current=(Date.now()-Elapse);
        console.log(Refe.current);
    }
    function Stop(){
        setRun(false);
    }
    function Reset(){
        setElapse(0);
        setRun(false);
    }
    function Format(){
        let hours=Math.floor(Elapse/(1000*60*60));
        let min=Math.floor((Elapse/(1000*60))%60);
         let sec=Math.floor((Elapse/(1000))%60);
         let msec=Math.floor((Elapse%1000)/10);
         sec = sec < 10 ? `0${sec}` : sec;
         msec = msec < 10 ? `0${msec}` : msec;
         min = min < 10 ? `0${min}` : min; 
        return `${min}:${sec}:${msec}`
        
    }
    return(
        <div className='main'>
            <div>
                <p>{Format()}</p>
            </div>
            <button onClick={Start}  className='start'>start</button>
             <button onClick={Stop}  className='stop'>stop</button>
              <button onClick={Reset} className='reset'>reset</button>
        </div>
    );
}
export default Swatch;