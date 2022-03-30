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
        this.shortestPath = []; // nodes in the shortest path
        this.visitedNodesInOrder = []; // list of nodes visited in order
        /*
            - stores node objects (contains an index, it's current shortest distance from start node, all it's neighbor nodes, it's previous node)
            - sorted from shortest to longest distance from source
        */

        this._calculateAlgorithm(); // visits nodes using dijkstra's algorithm and computes shortest path
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

    _calculateAlgorithm(){
        let currentNode = this.unvisitedNodes[this.startNodeIndex];

        while(this.unvisitedNodes.length !== 0){ 

            this.unvisitedNodes.sort(function(nodeA, nodeB){return nodeA.distance - nodeB.distance}); // sort distances from source to current node ascendingly 
            if (this.unvisitedNodes[0].getDistance() === Infinity){ // if node has no neighbors
                currentNode = this._updateCurrentNodeAndLists(currentNode);
                return this._calculateShortestPath();
            }
            if (this.unvisitedNodes[0].getIndex() === this.endNodeIndex){ // the end node now has the shortest distance from the start node
                currentNode = this._updateCurrentNodeAndLists(currentNode);
                return this._calculateShortestPath();
            }
            currentNode = this._updateCurrentNodeAndLists(currentNode);
            this._updateVisitedNodesInOrder(currentNode.getIndex()); // record node having been visited
            this._relaxNeighbors(currentNode); // update current's neighbors' shortest distances
        }
    }

    _updateCurrentNodeAndLists(currentNode){
        currentNode = this.unvisitedNodes.shift(); // remove node with shortest distance and make it the current node
        this.visitedNodes.push(currentNode); // push current node to visited nodes
        return currentNode;
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

    _getNodeFromVisitedList(nodeIndex){
        for(let i = 0; i < this.visitedNodes.length; i++){
            if(this.visitedNodes[i].getIndex() === nodeIndex){
                return this.visitedNodes[i];
            }
        }
    }

    _updateVisitedNodesInOrder(node){
        this.visitedNodesInOrder.push(node);
    }

    _calculateShortestPath(){
        this._backtrack(this.endNodeIndex);
        this.shortestPath.push(this.startNodeIndex);
        return this.shortestPath;
    }

    _backtrack(nodeIndex){
        const node = this._getNodeFromVisitedList(nodeIndex);
        if(typeof node === 'undefined'){
            return;
        }
        if(node.getPrevious() === this.NO_PARENT_NODE){
            return;
        }
        this.shortestPath.push(nodeIndex);
        this._backtrack(node.getPrevious());
    }

    getVisitedNodesInOrder(){
        return this.visitedNodesInOrder;
    }
    
    getShortestPath(){
        return this.shortestPath;
    }
}

export default DijkstrasAlgorithm;