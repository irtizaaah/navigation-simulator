import "./app.css";
import GridGraph from "../../algorithm/grid-graph";
import DijkstrasAlgorithm from "../../algorithm/dijkstra-algorithm";
import Grid from "../grid/grid";
import Menu from "../menu/menu";
import Navbar from "../navbar/navbar";
import Modal from "../modal/modal";
import Tutorial from "../content/tutorial";
import MoreInformation from "../content/more-information";
import Dashboard from "../dashboard/dashboard";
import {useState, useEffect} from 'react';

function App() {
  // NAVBAR
  const [showTutorial, setShowTutorial] = useState(false);
  const [showMoreInformation, setShowMoreInformation] = useState(false); // Show more information is the "for nerds" option

  // GRID UI
  const NO_WEIGHT = 0;
  const DEFAULT_WEIGHT = 1;
  const ADDED_WEIGHT = 3;
  const NUM_OF_NODES_PER_SIDE = 18; // warning! CSS grid (grid.css) builds the square grid using this value (if changed, changed no. of columns there too)
  const NUM_OF_TOTAL_NODES = NUM_OF_NODES_PER_SIDE * NUM_OF_NODES_PER_SIDE; // builds a n x n grid of squares

  // VISITED & SHORTEST PATH NODES
  const [visitedNodesSoFar, setVisitedNodesSoFar] = useState({}); // all the nodes visited in order by the dijkstra's algorithm
  const [numOfVisitedNodesSoFar, setNumOfVisitedNodesSoFar] = useState(0); // tracks how much of the visitedNodesSoFar list is traversed after each iteration 
  
  const [shortestPathNodesSoFar, setShortestPathNodesSoFar] = useState({}); // all the nodes of the shortest path in reverse order by the dijkstra's alagorithm
  const [numOfShortestPathNodesSoFar, setNumOfShortestPathNodesSoFar] = useState(0); // tracks how much of the shortestPathNodesSoFar list is traversed after each iteration 

  // TYPES OF NODES
  const [startNode, setStartNode] = useState(0);
  const [endNode, setEndNode] = useState(NUM_OF_TOTAL_NODES-1);

  const [blockedNodes, setBlockedNodes] = useState({}); // nodes that can't be traversed (has a weight of 0)
  const [weightedNodes, setWeightedNodes] = useState({}); // nodes that have a higher cost to traverse (has a weight higher than any other node)

  const [resetedNodes, setResetedNodes] = useState({}) // resets blocked/weighted nodes to default node

  // GRID EDIT MODES
  const [editStartNode, setEditStartNode] = useState(false); // this allows the grid to change the starting node
  const [editEndNode, setEditEndNode] = useState(false); // this allows the grid to change the ending node

  const [editBlockedNodes,setEditBlockedNodes] = useState(false); // this allows the grid to only create block nodes everytime a node is clicked
  const [editContinuousBlockedNodes, setEditContinuousBlockedNodes] = useState(false); // this allows the grid to create block nodes every node the mouse floats over
  
  const [editWeightedNodes, setEditWeightedNodes] = useState(false); // this allows the grid to only created weighted nodes everytime a node is clicked

  const [editResetedNodes, setEditResetedNodes] = useState(false); // this allows the grid to reset blocked/weighted nodes to a default node everytime a node is clicked
  const [editContinuousResetedNodes, setEditContinuousResetedNodes] = useState(false); // this allows the grid to reset blocked/weighted nodes to a default node every node the mouse floats over

  // GRID VISUALIZE MODES
  const [visualizeVisitedNodes, setVisualizeVisitedNodes] = useState(false); // this allows the grid to visualize all visited nodes
  const [visualizeShortestPath, setVisualizeShortestPath] = useState(false); // this allows the grid to visualize all the shortest path nodes

  // CREATE GRID GRAPH & CALCULATE ALGORITHM
  const [gridGraph, setGridGraph] = useState(new GridGraph(NUM_OF_NODES_PER_SIDE)); // internally forms a graph with nodes representing a grid (weight between every node is 1)
  const [path, setPath] = useState(new DijkstrasAlgorithm(gridGraph, startNode, endNode)); // compute dijkstra's algorithm
  
  const [shortestPathNodes, setShortestPathNodes] = useState([...path.getShortestPath()]); // copy return array of shortest path
  const [visitedNodes, setVisitedNodes] = useState([...path.getVisitedNodesInOrder()]); // copy return array of all visited nodes in order

  // DASHBOARD
  const [travelTime, setTravelTime] = useState(0);

  useEffect(() => { // recalculate dijkstra's algorithm whenever mentioned dependencies change
    const newPath = new DijkstrasAlgorithm(gridGraph, startNode, endNode);
    setPath(()=>{
      return newPath;
    })
    setShortestPathNodes([...newPath.getShortestPath()]);
    setVisitedNodes([...newPath.getVisitedNodesInOrder()]);

  }, [startNode, endNode, blockedNodes, weightedNodes, resetedNodes, gridGraph]) 
  return (
    <div className = "app_container">
      <Navbar
        showTutorial = {showTutorial}
        setShowTutorial = {setShowTutorial}
        showMoreInformation = {showMoreInformation}
        setShowMoreInformation = {setShowMoreInformation}
      />
      <Modal 
        title = "Tutorial" 
        content = {<Tutorial />}
        show = {showTutorial}
        setShow = {setShowTutorial}
      />
      <Modal 
        title = "For Nerds" 
        content = {<MoreInformation />}
        show = {showMoreInformation}
        setShow = {setShowMoreInformation}
      />
      <div className = "content_container">
        <Menu
          // MAPS
          //GRID
          NUM_OF_TOTAL_NODES = {NUM_OF_TOTAL_NODES}
          NUM_OF_NODES_PER_SIDE = {NUM_OF_NODES_PER_SIDE}
          DEFAULT_WEIGHT = {DEFAULT_WEIGHT}
          ADDED_WEIGHT = {ADDED_WEIGHT}

          gridGraph = {gridGraph}
          setGridGraph = {setGridGraph}

          // BLOCKED NODES
          blockedNodes = {blockedNodes}
          setBlockedNodes = {setBlockedNodes} 

          // START NODES
          startNode = {startNode}
          setStartNode = {setStartNode}

          // END NODES
          endNode = {endNode}
          setEndNode = {setEndNode}

          // WEIGHTED NODES
          weightedNodes = {weightedNodes}
          setWeightedNodes = {setWeightedNodes}

          // ROUTE
          // START AND END
          editStartNode = {editStartNode}
          setEditStartNode = {setEditStartNode}
          editEndNode = {editEndNode}
          setEditEndNode = {setEditEndNode}

          // BLOCKED NODES & RESETED NODES
          editContinuousResetedNodes = {editContinuousResetedNodes}
          setEditContinuousResetedNodes = {setEditContinuousResetedNodes}
          editContinuousBlockedNodes = {editContinuousBlockedNodes}
          setEditContinuousBlockedNodes = {setEditContinuousBlockedNodes}

          // BUILD
          // BLOCKED NODES
          editBlockedNodes = {editBlockedNodes}
          setEditBlockedNodes = {setEditBlockedNodes}

          // WEIGHTED NODES
          editWeightedNodes = {editWeightedNodes}
          setEditWeightedNodes = {setEditWeightedNodes}

          // REMOVE NODES
          editResetedNodes = {editResetedNodes}
          setEditResetedNodes = {setEditResetedNodes}

          // TRAVEL
          // VISITED NODES
          visitedNodes = {visitedNodes}
          numOfVisitedNodesSoFar = {numOfVisitedNodesSoFar}
          setNumOfVisitedNodesSoFar = {setNumOfVisitedNodesSoFar}
          visitedNodesSoFar = {visitedNodesSoFar}
          setVisitedNodesSoFar = {setVisitedNodesSoFar}

          // SHORTEST PATH
          shortestPathNodes = {shortestPathNodes}
          numOfShortestPathNodesSoFar = {numOfShortestPathNodesSoFar}
          setNumOfShortestPathNodesSoFar = {setNumOfShortestPathNodesSoFar}
          shortestPathNodesSoFar = {shortestPathNodesSoFar}
          setShortestPathNodesSoFar = {setShortestPathNodesSoFar}

          // VISUALIZE GRID
          visualizeVisitedNodes = {visualizeVisitedNodes}
          setVisualizeVisitedNodes = {setVisualizeVisitedNodes}
          visualizeShortestPath = {visualizeShortestPath}
          setVisualizeShortestPath = {setVisualizeShortestPath}

          // DASHBOARD
          travelTime = {travelTime}
          setTravelTime = {setTravelTime}
        />
        <div className = "grid_and_dashboard_container">
          <Grid 
            // GRID GRAPH
            NUM_OF_TOTAL_NODES = {NUM_OF_TOTAL_NODES}
            NUM_OF_NODES_PER_SIDE = {NUM_OF_NODES_PER_SIDE}
            DEFAULT_WEIGHT = {DEFAULT_WEIGHT}
            ADDED_WEIGHT = {ADDED_WEIGHT}
            NO_WEIGHT = {NO_WEIGHT}

            gridGraph = {gridGraph}
            setGridGraph = {setGridGraph}

            // VISITED NODES
            visitedNodes = {visitedNodes}
            numOfVisitedNodesSoFar = {numOfVisitedNodesSoFar}
            visitedNodesSoFar = {visitedNodesSoFar}

            // SHORTEST PATH
            shortestPathNodes = {shortestPathNodes}
            numOfShortestPathNodesSoFar = {numOfShortestPathNodesSoFar}
            shortestPathNodesSoFar = {shortestPathNodesSoFar}

            // BLOCKED NODES
            blockedNodes = {blockedNodes}
            setBlockedNodes = {setBlockedNodes} 

            editBlockedNodes = {editBlockedNodes}
            setEditBlockedNodes = {setEditBlockedNodes}

            editContinuousBlockedNodes = {editContinuousBlockedNodes}
            setEditContinuousBlockedNodes = {setEditContinuousBlockedNodes}

            // START NODES
            startNode = {startNode}
            setStartNode = {setStartNode}

            editStartNode = {editStartNode}
            setEditStartNode = {setEditStartNode}

            // END NODES
            endNode = {endNode}
            setEndNode = {setEndNode}

            editEndNode = {editEndNode}
            setEditEndNode = {setEditEndNode}

            // WEIGHTED NODES
            weightedNodes = {weightedNodes}
            setWeightedNodes = {setWeightedNodes}

            editWeightedNodes = {editWeightedNodes}
            setEditWeightedNodes = {setEditWeightedNodes}

            // RESET NODES
            resetedNodes = {resetedNodes}
            setResetedNodes = {setResetedNodes}

            editResetedNodes = {editResetedNodes}
            setEditResetedNodes = {setEditResetedNodes}

            editContinuousResetedNodes = {editContinuousResetedNodes}
            setEditContinuousResetedNodes = {setEditContinuousResetedNodes}

            // VISUALIZE VISITED AND SHORTEST PATH NODES
            visualizeVisitedNodes = {visualizeVisitedNodes}
            visualizeShortestPath = {visualizeShortestPath}
          />
          <Dashboard 
            travelTime = {travelTime}
            setTravelTime = {setTravelTime}
          />
        </div>
      </div>
    </div>
  );
}

export default App;