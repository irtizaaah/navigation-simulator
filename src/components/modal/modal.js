import "./modal.css";
import Button from "../button/button";
import { useState, useEffect } from "react";

function Modal(props){

    const [showClassName, setShowClassName] = useState("");

    useEffect(()=>{
        if(props.show === true){
            setShowClassName("show");
        }
        else{
            setShowClassName("");
        }
    },[props.show]);

  return (
    <div className = {`modal_container ${showClassName}`}>
        <div className= "modal_container-header">
            <button 
                className = "modal_container-button" 
                onClick = {() => {props.setShow(!props.show)}}>
                    X
            </button>
        </div>
        <h1>{props.title}</h1>
        {props.content}
        <Button 
            name = "Done"
            handleClick = {() => {props.setShow(!props.show)}}
        />
    </div>
  );
}

export default Modal;