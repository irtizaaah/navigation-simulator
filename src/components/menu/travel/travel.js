import "./travel.css";
import Button from "../../button/button";
import useInterval from "./use-interval";
import React, {useEffect} from 'react';

function Travel(props){

    let timePerIteration = 50;

    if(navigator.userAgent.toLowerCase().search('safari')> -1 && !!window.safari === true){ // to handle safari specific issues
        timePerIteration = 150;
    }

    useInterval(animateVisitedNodes, props.visualizeVisitedNodes ? timePerIteration:null);
    useInterval(animateShortestPathNodes, props.visualizeShortestPath ? timePerIteration:null);
    /*
        update grid at every interval with updated shortest path and visited nodes
        list when visualizeVisitedNodes/visualizeShortestPath is set to true
    */

    useEffect(()=>{ // turn off visualizeVisitedNodes when all visited nodes have been traversed
        if(props.numOfVisitedNodesSoFar === props.visitedNodes.length){
            props.setVisualizeVisitedNodes(false);
            props.setVisualizeShortestPath(true);
        }
    },[props.numOfVisitedNodesSoFar, props.visualizeVisitedNodes, props.visitedNodesSoFar, props.visitedNodes])

    useEffect(()=>{ // turn off visualizeShortestPathNodes when all shortest path nodes have been traversed
        if(props.numOfShortestPathNodesSoFar === props.shortestPathNodes.length){
            props.setVisualizeShortestPath(false);
        }
    },[props.numOfShortestPathNodesSoFar, props.visualizeShortestPath, props.shortestPathNodesSoFar, props.shortestPathNodes])

    function animateVisitedNodes(){ // update visitedNodesSoFar with next node from visitedNodes every iteration
        props.setNumOfVisitedNodesSoFar(props.numOfVisitedNodesSoFar + 1);
        props.setVisitedNodesSoFar(() => {
            for(let i = 0; i < props.numOfVisitedNodesSoFar; i++){ //
                props.visitedNodesSoFar[props.visitedNodes[i]] = true;
            }
            return props.visitedNodesSoFar;
        });
    };

    function animateShortestPathNodes(){ // update shortestPathNodesSoFar with next node from shortestPathNodes (nodes) every iteration
        props.setNumOfShortestPathNodesSoFar(props.numOfShortestPathNodesSoFar + 1);
        props.setShortestPathNodesSoFar(() => {
            for(let i = 0; i <= props.numOfShortestPathNodesSoFar; i++){ // without the "=" in "<=", shortestPathNodesSoFar is iterated by a value short 
                props.shortestPathNodesSoFar[props.shortestPathNodes[i]] = true;
            }
            return props.shortestPathNodesSoFar;
        });

        calculateTravelTime(props.shortestPathNodes[props.numOfShortestPathNodesSoFar]);
    };

    function calculateTravelTime(node){
        if(props.numOfShortestPathNodesSoFar !== 0){
            if(node in props.weightedNodes){
                props.setTravelTime(props.travelTime + 3);
            }
            else{
                props.setTravelTime(props.travelTime + 1);
            }
        }
    }

  return (
    <div className = "travel_container">
        <h1>{props.name}</h1>
        <Button 
            name = "Quickest Path"
            handleClick = {() => {props.setVisualizeVisitedNodes(true)}}
            buttonClassName = {"button-travel"}
        />
    </div>
  );
}

export default Travel;