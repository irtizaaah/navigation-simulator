import Node from "./node"

class DijkstrasAlgorithm{
    constructor(graph, startNodeIndex, endNodeIndex){

        // CONSTANTS
        this.NO_PARENT_NODE = -1;

        // VARIABLES
        // GRAPH
        this.graph = graph;
        this.numOfNodes = this.graph.getNumOfTotalNodes();


        // NODE INDICES
        this.startNodeIndex = startNodeIndex;
        this.endNodeIndex = endNodeIndex;

        // LIST OF NODES
        this.unvisitedNodes = [];
        this.visitedNodes = [];
        this._initializeUnvisitedNodes();

        // LISTS FOR OUTPUT
        this.directions = []; // directions to the shortest path
        this.visitedNodesInOrder = []; // list of nodes visited in order
        /*
            - stores node objects (contains an index, it's current shortest distance from start node, all it's neighbor nodes, it's previous node)
            - sorted from shortest to longest distance from source
        */
    }
    
    _initializeUnvisitedNodes(){
        let neighbors;
        for(let i = 0; i < this.numOfNodes; i++){
            neighbors = this.graph.getAllNeighbors(i)

            if(i === this.startNodeIndex){
                this.unvisitedNodes.push(new Node(i, 0, neighbors, this.NO_PARENT_NODE));
            }
            else if(i === this.endNodeIndex){
                this.unvisitedNodes.push(new Node(i, Infinity, neighbors));
            }
            else{
                this.unvisitedNodes.push(new Node(i, Infinity, neighbors));
            }
        }
    }

    getShortestPath(){
        let currentNode = this.unvisitedNodes[this.startNodeIndex];

        while(this.unvisitedNodes.length !== 0 && this.endNodeIndex !== currentNode.getIndex()){ 

            this.unvisitedNodes.sort(function(nodeA, nodeB){return nodeA.distance - nodeB.distance}); // sort distances from source to current node ascendingly 
            currentNode = this.unvisitedNodes.shift(); // remove node with shortest distance and make it the current node
            this.visitedNodes.push(currentNode); // push current node to visited nodes
            this._updateVisitedNodesInOrder(currentNode.getIndex()); // record node having been visited
            this._relaxNeighbors(currentNode); // update current's neighbors' shortest distances
        }
    }

    _relaxNeighbors(currentNode){
        const neighbors = currentNode.getNeighbors();
        let neighbor;

        let sourceToCurrentDistance; // distance from source to current vertex
        let currentToNeighborDistance; // distance from current vertex to neighbor
        let sourceToNeighborDistance; // total distance from source to neighbor
        let currentSourceToNeighborDistance; // current shortest distance from source to neighbor

        let newDistanceIsShorter; // is new distance < current shortest distance?
        let isUnvisited = false; // has the neighbor already been visited

        for(let i = 0; i < neighbors.length; i++){ 

            neighbor = this._getNodeFromUnvisitedList(neighbors[i]);

            if (neighbor !== undefined){
        
                this._updateVisitedNodesInOrder(neighbor.getIndex()); // record neighbors having been visited
    
                // CALCULATE DISTANCE
                sourceToCurrentDistance = currentNode.getDistance();
                currentToNeighborDistance = this.graph.getWeight(currentNode.getIndex(), neighbor.getIndex()); 
                sourceToNeighborDistance = sourceToCurrentDistance + currentToNeighborDistance;
    
                // CONDITIONS
                currentSourceToNeighborDistance = neighbor.getDistance();
                newDistanceIsShorter = sourceToNeighborDistance < currentSourceToNeighborDistance;
                isUnvisited = this.unvisitedNodes.includes(neighbor);
        
                // UPDATE NEIGHBOR
                if(newDistanceIsShorter === true && isUnvisited === true){ 
                    neighbor.setDistance(sourceToNeighborDistance);
                    neighbor.setPrevious(currentNode.getIndex());
                }
            }
        }
    }

    _getNodeFromUnvisitedList(nodeIndex){
        for(let i = 0; i < this.unvisitedNodes.length; i++){
            if(this.unvisitedNodes[i].getIndex() === nodeIndex){
                return this.unvisitedNodes[i];
            }
        }
    }

    _updateVisitedNodesInOrder(node){
        this.visitedNodesInOrder.push(node);
    }

    getVisitedNodesInOrder(){
        return this.visitedNodesInOrder;
    }

    _getDirections(){
        this._backtrack(this.endVertex);
        return this.directions;
    }

    _backtrack(destinationNode){
        if (destinationNode === this.NO_PARENT){
            return;
        }
        this.directions.push(destinationNode);
        this._backtrack(this.previousVertices[destinationNode]);
    }
}

export default DijkstrasAlgorithm;