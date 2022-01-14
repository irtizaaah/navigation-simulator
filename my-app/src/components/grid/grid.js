import "./grid.css";
import Square from "../square/square";

function Grid(props) {
    let grid = []; // stores all node JSX divs
    let nodeClassName = ""; // stores className for node styling
    let gridEditClassName = "square_container-grid_outline"; // stores className for grid styling
    let nodeEditClassName = "grid_outline-node"; // stores className for node styling

    if((props.editContinuousBlockedNodes === true || props.editEndNode === true|| props.editStartNode === true 
        || props.editStartNode === true || props.editWeightedNodes === true || props.editContinuousResetedNodes === true) 
        && (props.visualizeVisitedNodes === false && props.visualizeShortestPath === false)){
            gridEditClassName  = "square_container-grid_outline_edit";
            nodeEditClassName = "grid_outline-node_edit";
    }

    for(let nodeIndex = 0; nodeIndex < props.NUM_OF_TOTAL_NODES; nodeIndex++){ // traverses every node in grid
        if(nodeIndex in props.blockedNodes){
            nodeClassName = "node-blocked";
        }
        else if(nodeIndex === props.startNode){
            nodeClassName = "node-start";
        }
        else if(nodeIndex === props.endNode){
            nodeClassName = "node-end";
        }
        else if(nodeIndex in props.weightedNodes){
            nodeClassName = "node-weighted";
        }
        else if(nodeIndex in props.visitedNodesSoFar){
            if(nodeIndex in props.shortestPathNodesSoFar && props.numOfVisitedNodesSoFar === props.visitedNodes.length){
                // checks if nodes exist in shortest path nodes list after all the visited nodes have been iterated over
                nodeClassName = "node-shortest_path";
            }
            else{
                nodeClassName = "node-visited";
            }
        }
        else{
            nodeClassName = "";
        }

        grid.push(<Square
            // SQUARE
            key = {nodeIndex} 
            nodeIndex = {nodeIndex}
            nodeClassName = {nodeClassName}
            gridEditClassName = {gridEditClassName}
            nodeEditClassName = {nodeEditClassName}

            // GRID GRAPH
            NUM_OF_TOTAL_NODES = {props.NUM_OF_TOTAL_NODES}
            NUM_OF_NODES_PER_SIDE = {props.NUM_OF_NODES_PER_SIDE}

            gridGraph = {props.gridGraph}
            setGridGraph = {props.setGridGraph}

            // VISITED NODES
            visitedNodes = {props.visitedNodes}
            numOfVisitedNodesSoFar = {props.numOfVisitedNodesSoFar}
            visitedNodesSoFar = {props.visitedNodesSoFar}

            // SHORTEST PATH
            shortestPathNodes = {props.shortestPathNodes}
            numOfShortestPathNodesSoFar = {props.numOfShortestPathNodesSoFar}
            shortestPathNodesSoFar = {props.shortestPathNodesSoFar}

            // BLOCKED NODES
            blockedNodes = {props.blockedNodes}
            setBlockedNodes = {props.setBlockedNodes} 

            editBlockedNodes = {props.editBlockedNodes}
            setEditBlockedNodes = {props.setEditBlockedNodes}

            editContinuousBlockedNodes = {props.editContinuousBlockedNodes}
            setEditContinuousBlockedNodes = {props.setEditContinuousBlockedNodes}

            // START NODES
            startNode = {props.startNode}
            setStartNode = {props.setStartNode}

            editStartNode = {props.editStartNode}
            setEditStartNode = {props.setEditStartNode}

            // END NODES
            endNode = {props.endNode}
            setEndNode = {props.setEndNode}

            editEndNode = {props.editEndNode}
            setEditEndNode = {props.setEditEndNode}

            // WEIGHTED NODES
            weightedNodes = {props.weightedNodes}
            setWeightedNodes = {props.setWeightedNodes}

            editWeightedNodes = {props.editWeightedNodes}
            setEditWeightedNodes = {props.setEditWeightedNodes}

            // RESET NODES
            resetedNodes = {props.resetedNodes}
            setResetedNodes = {props.setResetedNodes}

            editResetedNodes = {props.editResetedNodes}
            setRemoveNodes = {props.setRemoveNodes}

            editContinuousResetedNodes = {props.editContinuousResetedNodes}
            setEditContinuousResetedNodes = {props.setEditContinuousResetedNodes}
        />);
    }

    return(
        <div className = "grid_container">
            {grid}
        </div>
    );
}

export default Grid;