import "./route.css"
import React, { useState, useEffect, useRef } from 'react';
import Button from '../button/button';

function Route(props){
    return (
      <div className = "route_container">
        <h1>{props.name}</h1>
        <Button 
            name = "Start"
            handleClick = {() => {props.setEditStartNode(true); console.log("edit start on")}}
        />
        <Button 
            name = "End"
            handleClick = {() => {props.setEditEndNode(true); console.log("edit start on")}}
        />
      </div>
    );
  }

export default Route;