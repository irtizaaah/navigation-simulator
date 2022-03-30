import "./menu.css";
import Travel from "./travel/travel";
import Route from "./route/route";
import Build from "./build/build";
import Maps from "./maps/maps";

function Menu(props){
  return (
    <div className = "menu_container">
        <h1 className = "menu_container-indent">Maps</h1>
        <Maps
          // MAPS
          //GRID
          NUM_OF_TOTAL_NODES = {props.NUM_OF_TOTAL_NODES}
          NUM_OF_NODES_PER_SIDE = {props.NUM_OF_NODES_PER_SIDE}
          DEFAULT_WEIGHT = {props.DEFAULT_WEIGHT}
          ADDED_WEIGHT = {props.ADDED_WEIGHT}
          NO_WEIGHT = {props.NO_WEIGHT}

          gridGraph = {props.gridGraph}
          setGridGraph = {props.setGridGraph}

          // BLOCKED NODES
          blockedNodes = {props.blockedNodes}
          setBlockedNodes = {props.setBlockedNodes} 

          // START NODES
          startNode = {props.startNode}
          setStartNode = {props.setStartNode}

          // END NODES
          endNode = {props.endNode}
          setEndNode = {props.setEndNode}

          // WEIGHTED NODES
          weightedNodes = {props.weightedNodes}
          setWeightedNodes = {props.setWeightedNodes}

          // START AND END
          editStartNode = {props.editStartNode}
          setEditStartNode = {props.setEditStartNode}

          editEndNode = {props.editEndNode}
          setEditEndNode = {props.setEditEndNode}

          // WEIGHTED NODES
          editWeightedNodes = {props.editWeightedNodes}
          setEditWeightedNodes = {props.setEditWeightedNodes}

          // RESET AND BLOCKED NODES
          editResetedNodes = {props.editResetedNodes}
          setEditResetedNodes = {props.setEditResetedNodes}
          editBlockedNodes = {props.editBlockedNodes}
          setEditBlockedNodes = {props.setEditBlockedNodes}
          editContinuousResetedNodes = {props.editContinuousResetedNodes}
          setEditContinuousResetedNodes = {props.setEditContinuousResetedNodes}
          editContinuousBlockedNodes = {props.editContinuousBlockedNodes}
          setEditContinuousBlockedNodes = {props.setEditContinuousBlockedNodes}
        />
        <h1 className = "menu_container-indent">Route</h1>
        <Route
          // START AND END
          editStartNode = {props.editStartNode}
          setEditStartNode = {props.setEditStartNode}

          editEndNode = {props.editEndNode}
          setEditEndNode = {props.setEditEndNode}

          // WEIGHTED NODES
          editWeightedNodes = {props.editWeightedNodes}
          setEditWeightedNodes = {props.setEditWeightedNodes}

          // RESET AND BLOCKED NODES
          editResetedNodes = {props.editResetedNodes}
          setEditResetedNodes = {props.setEditResetedNodes}
          editBlockedNodes = {props.editBlockedNodes}
          setEditBlockedNodes = {props.setEditBlockedNodes}
          editContinuousResetedNodes = {props.editContinuousResetedNodes}
          setEditContinuousResetedNodes = {props.setEditContinuousResetedNodes}
          editContinuousBlockedNodes = {props.editContinuousBlockedNodes}
          setEditContinuousBlockedNodes = {props.setEditContinuousBlockedNodes}
        />
        <h1 className = "menu_container-indent">Build</h1>
        <Build
          // BLOCKED NODES
          editBlockedNodes = {props.editBlockedNodes}
          setEditBlockedNodes = {props.setEditBlockedNodes}
          editContinuousBlockedNodes = {props.editContinuousBlockedNodes}
          setEditContinuousBlockedNodes = {props.setEditContinuousBlockedNodes}

          // WEIGHTED NODES
          editWeightedNodes = {props.editWeightedNodes}
          setEditWeightedNodes = {props.setEditWeightedNodes}

          // REMOVE NODES
          editResetedNodes = {props.editResetedNodes}
          setEditResetedNodes = {props.setEditResetedNodes}
          editContinuousResetedNodes = {props.editContinuousResetedNodes}
          setEditContinuousResetedNodes = {props.setEditContinuousResetedNodes}

          //START AND END NODES
          setEditStartNode = {props.setEditStartNode}
          setEditEndNode = {props.setEditEndNode}
        />
        <h1 className = "menu_container-indent">Travel</h1>
        <Travel
          // VISITED NODES
          visitedNodes = {props.visitedNodes}
          numOfVisitedNodesSoFar = {props.numOfVisitedNodesSoFar}
          setNumOfVisitedNodesSoFar = {props.setNumOfVisitedNodesSoFar}
          visitedNodesSoFar = {props.visitedNodesSoFar}
          setVisitedNodesSoFar = {props.setVisitedNodesSoFar}

          // SHORTEST PATH NODES
          shortestPathNodes = {props.shortestPathNodes}
          numOfShortestPathNodesSoFar = {props.numOfShortestPathNodesSoFar}
          setNumOfShortestPathNodesSoFar = {props.setNumOfShortestPathNodesSoFar}
          shortestPathNodesSoFar = {props.shortestPathNodesSoFar}
          setShortestPathNodesSoFar = {props.setShortestPathNodesSoFar}

          // VISUALIZE GRID
          visualizeVisitedNodes = {props.visualizeVisitedNodes}
          setVisualizeVisitedNodes = {props.setVisualizeVisitedNodes}
          visualizeShortestPath = {props.visualizeShortestPath}
          setVisualizeShortestPath = {props.setVisualizeShortestPath}

          // DASHBOARD
          travelTime = {props.travelTime}
          setTravelTime = {props.setTravelTime}
          
          // WEIGHTED NODES
          weightedNodes = {props.weightedNodes}
          setWeightedNodes = {props.setWeightedNodes}
        />
    </div>
  );
}

export default Menu;