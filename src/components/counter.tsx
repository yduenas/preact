import { useState, useEffect } from "react";

function Counter(){
    const [counter,setCounter] = useState<number>(0);
    const handleClick = () =>{
        setCounter(counter+1);
    }
    const handleClick2 = () =>{
        setCounter(counter-1);
    }
    useEffect(()=>{
        console.log("El contador ha cargado");        
    },[])
    useEffect(()=>{
        console.log("El contador ha cambiado");
        return()=>{
            console.log("El contador ha sido destruido");
        };
    },[counter])
    return (
        <div>
            <p>El contador es : {counter}</p>
            <button onClick={handleClick}>Incrementar</button>            
            <button onClick={handleClick2}>Decrementar</button>  
        </div>
    )
}

export default Counter