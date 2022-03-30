import "./square.css";

function Square(props) {
    function handleMouseOver(){
        if(props.editBlockedNodes === true && props.editContinuousBlockedNodes === true && props.nodeIndex !== props.startNode && props.nodeIndex !== props.endNode){
            props.setBlockedNodes(() => {
                let newBlockedNodes = {...props.blockedNodes};
                newBlockedNodes[props.nodeIndex] = true;
                return newBlockedNodes; // return a copy of array instead of mutating state in order for useEffect to register state change
            });
            props.setGridGraph(()=>{
                props.gridGraph.changeWeight(props.nodeIndex, 0);
                return props.gridGraph; // since gridGraph is mutated, useEffect doesn't register setGridGraph as changing gridGraphs' state
            })
        }
        if(props.editResetedNodes === true && props.editContinuousResetedNodes === true && props.nodeIndex !== props.startNode && props.nodeIndex !== props.endNode){
            if(props.blockedNodes[props.nodeIndex]){
                delete props.blockedNodes[props.nodeIndex];
            }
            if(props.weightedNodes[props.nodeIndex]){
                delete props.weightedNodes[props.nodeIndex];
            }
            props.setResetedNodes(() => {
                let newRemovedNodes = {...props.resetedNodes}; 
                newRemovedNodes[props.nodeIndex] = true;
                return newRemovedNodes;
            });
            props.setGridGraph(()=>{
                props.gridGraph.changeWeight(props.nodeIndex, 1);
                return props.gridGraph; // since gridGraph is mutated, useEffect doesn't register setGridGraph as changing gridGraphs' state
            })
        }
    }

    function handleMouseClick(){
        // EDIT START AND END NODE
        if(props.nodeIndex === props.startNode && !(props.nodeIndex in props.blockedNodes)){
            props.setEditStartNode(true);
            props.setEditEndNode(false);
            props.setEditBlockedNodes(false);
            props.setEditResetedNodes(false); 
            props.setEditWeightedNodes(false); 
            props.setEditContinuousBlockedNodes(false);
            props.setEditContinuousResetedNodes(false);
            // in case state wasn't set to false already
        }
        else if(props.nodeIndex === props.endNode && !(props.nodeIndex in props.blockedNodes)){
            props.setEditEndNode(true);
            props.setEditStartNode(false);
            props.setEditBlockedNodes(false);
            props.setEditResetedNodes(false); 
            props.setEditWeightedNodes(false); 
            props.setEditContinuousBlockedNodes(false);
            props.setEditContinuousResetedNodes(false);
            // in case state wasn't set to false already
        }

        if(props.editStartNode === true && !(props.nodeIndex in props.blockedNodes)){
            props.setStartNode(props.nodeIndex);
            props.setEditStartNode(false);
        }

        else if(props.editEndNode === true && !(props.nodeIndex in props.blockedNodes)){
            props.setEndNode(props.nodeIndex);
            props.setEditEndNode(false);
        }
        // EDIT RESET NODES
        else if(props.editResetedNodes === true){
            props.setEditContinuousResetedNodes(props.editContinuousResetedNodes ? false : true);
            if(props.blockedNodes[props.nodeIndex]){
                delete props.blockedNodes[props.nodeIndex];
            }
            if(props.weightedNodes[props.nodeIndex]){
                delete props.weightedNodes[props.nodeIndex];
            }
            props.setResetedNodes(() => {
                let newRemovedNodes = {...props.resetedNodes}; 
                newRemovedNodes[props.nodeIndex] = true; 
                return newRemovedNodes; // return a copy of array instead of mutating state in order for useEffect to register state change
            });
            props.setGridGraph(()=>{
                props.gridGraph.changeWeight(props.nodeIndex, props.DEFAULT_WEIGHT);
                return props.gridGraph; // since gridGraph is mutated, useEffect doesn't register setGridGraph as changing gridGraphs' state
            })
        }
        // EDIT WEIGHTED NODES
        else if(props.editWeightedNodes === true && props.nodeIndex !== props.startNode && props.nodeIndex !== props.endNode){
            props.setWeightedNodes(() => {
                let newWeightedNodes = {...props.weightedNodes}; 
                newWeightedNodes[props.nodeIndex] = true;
                return newWeightedNodes; // return a copy of array instead of mutating state in order for useEffect to register state change
            });
            props.setGridGraph(()=>{
                props.gridGraph.changeWeight(props.nodeIndex, props.ADDED_WEIGHT);
                return props.gridGraph; // since gridGraph is mutated, useEffect doesn't register setGridGraph as changing gridGraphs' state
            })
        }
        // EDIT BLOCKED NODES
        else if(props.editBlockedNodes === true && props.nodeIndex !== props.startNode && props.nodeIndex !== props.endNode){
            props.setEditContinuousBlockedNodes(props.editContinuousBlockedNodes ? false : true);
            props.setBlockedNodes(() => {
                let newBlockedNodes = {...props.blockedNodes}; 
                newBlockedNodes[props.nodeIndex] = true;
                return newBlockedNodes; // return a copy of array instead of mutating state in order for useEffect to register state change
            });
            props.setGridGraph(()=>{
                props.gridGraph.changeWeight(props.nodeIndex, props.NO_WEIGHT);
                return props.gridGraph; // since gridGraph is mutated, useEffect doesn't register setGridGraph as changing gridGraphs' state
            })
        }
    }

    return(
        <div className = {`square_container ${props.gridEditClassName}`}>
                <div 
                    className = {`
                            ${props.nodeEditClassName}
                            ${props.nodeClassName}
                            ${props.editContinuousResetedNodes || props.editContinuousBlockedNodes || props.editWeightedNodes ? "node-continuous" : ""}
                            ${props.editStartNode ? "node-start-continuous" : ""}
                            ${props.editEndNode ? "node-end-continuous" : ""}
                        `}
                    onClick = {() => {handleMouseClick()}}
                    onMouseOver = {() => {handleMouseOver();}}
                >
                </div>
        </div>
    );
}

export default Square;
 