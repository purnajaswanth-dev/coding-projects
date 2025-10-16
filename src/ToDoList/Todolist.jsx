// Button.jsx
import './index1.css'
import React,{useState} from "react";
function Todolist() {
    const[Task,setTask]=useState(["brush teeth","take a shower","have a break fast"]);
    const[newTask,setnewTask]=useState();
    function Change(event){
        setnewTask(event.target.value);

    }
    function Add(){
        setTask(t=>[...t, newTask]);
        let text=document.body.querySelector("input");
        text.value="";
        
       
    }
    function Delete(index){
        const Ubtask=Task.filter((_,i)=>i!==index);
        setTask(Ubtask);

    }
    function Up(index){
        if(index>0){
        const Ubtask=[...Task];
        [Ubtask[index],Ubtask[index-1]]=[Ubtask[index-1],Ubtask[index]]
        setTask(Ubtask)
        }

    }
    function Down(index){
        if(index<Task.length-1){
        const Ubtask=[...Task];
        [Ubtask[index],Ubtask[index+1]]=[Ubtask[index+1],Ubtask[index]]
        setTask(Ubtask)
        }

    }
return(
    <div className="box">
        <h1>😎 TO DO LIST 😎</h1>
        <div className="hi">
        <input type="text" onChange={Change}    placeholder="write your task...."/>
        <button className="add" onClick={Add}>ADD</button>
        </div>
        <ol>
            {Task.map((tasks,index)=>
                <li key={index}>
                <span className="task">{tasks}
                </span>
                <button 
                    className="del" 
                    onClick={()=>Delete(index)}>
                        delete
                </button>
                <button 
                    className="up" 
                    onClick={()=>Up(index)} >👆
                </button>
                <button 
                    className="down"
                    onClick={()=>Down(index)} >👇</button>
                </li>)
            }
        </ol>

    </div>
   
    
        
                
        );
        
}

export default Todolist;
