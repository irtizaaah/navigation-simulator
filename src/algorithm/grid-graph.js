class GridGraph{ // builds an undirected graph of nodes and edges representing a sqaure grid 
    constructor(numOfNodesPerSide){
        this.numOfNodesPerSide = numOfNodesPerSide // builds a square grid (sq. area = side * side)
        this.numOfTotalNodes = this.numOfNodesPerSide * this.numOfNodesPerSide; 
        this.nodes = [];
        this.adjacencyMatrix = []; // weights between nodes and their respective neighbors
        this._createGraph();
    }

    _createGraph(){
        for (var i = 0; i < this.numOfTotalNodes; i++) { // declares and initializes a 2d array
            this.adjacencyMatrix[i] = Array(this.numOfNodesPerSide).fill(0);
        }

        for(let i = 0; i < this.numOfTotalNodes; i++){ // fills 2d array and creates graph
            this.addNode(i)
        }

        for(let i = 0; i < this.numOfTotalNodes; i++){ // replace undefined with 0
            for(let j = 0; j < this.numOfTotalNodes; j++){ // replace undefined with 0
                if(this.adjacencyMatrix[i][j] === null || this.adjacencyMatrix[i][j] === undefined){
                    this.adjacencyMatrix[i][j] = 0;
                }
            }
        }   
    }

    getNumOfTotalNodes(){
        return this.numOfTotalNodes;
    }

    getNumOfNodesPerSide(){
        return this.numOfNodesPerSide;
    }

    getNode(i){
        return this.nodes[i];
    }

    getWeight(node,neighbor){
        return this.adjacencyMatrix[node][neighbor];
    }
    
    getAllNeighbors(node){

        const neighbors = [];

        if(this._rightNodeExists(node) === true){ 
            if(this.getWeight(node, node+1) >= 1){ 
                neighbors.push(node+1);
            }
        }

        if(this._leftNodeExists(node) === true){ 
            if(this.getWeight(node, node-1) >= 1){ 
                neighbors.push(node-1);
            }
        }

        if(this._topNodeExists(node) === true){ 
            if(this.getWeight(node, node+this.numOfNodesPerSide) >= 1){ 
                neighbors.push(node+this.numOfNodesPerSide);
            }
        }

        if(this._bottomNodeExists(node) === true){ 
            if(this.getWeight(node, node-this.numOfNodesPerSide) >= 1){ 
                neighbors.push(node-this.numOfNodesPerSide);
            }
        }

        return neighbors;

    }

    addNode(node, weight = 1){ // connect node to surrounding nodes with given weight
        this.nodes.push(node);

        this.adjacencyMatrix[node][node] = 0; 

        if(this._rightNodeExists(node) === true){ 
            this.adjacencyMatrix[node][node+1] = weight;
        }

        if(this._leftNodeExists(node) === true){ 
            this.adjacencyMatrix[node][node-1] = weight;
        }

        if(this._topNodeExists(node) === true){ 
            this.adjacencyMatrix[node][node+this.numOfNodesPerSide] = weight;
        }

        if(this._bottomNodeExists(node) === true){ 
            this.adjacencyMatrix[node][node-this.numOfNodesPerSide] = weight;
        }
    }

    changeWeight(node, weight){ // changes weight of the edge of surrounding nodes TO the given node
        if(this._rightNodeExists(node) === true){ 
            this.adjacencyMatrix[node+1][node] = weight;
            //this.adjacencyMatrix[node][node+1] = weight; // this changes the weight of the given TO the surrounding node
        }

        if(this._leftNodeExists(node) === true){
            this.adjacencyMatrix[node-1][node] = weight;
            //this.adjacencyMatrix[node][node-1] = weight; 
        }

        if(this._topNodeExists(node) === true){ 
            this.adjacencyMatrix[node+this.numOfNodesPerSide][node] = weight;
            //this.adjacencyMatrix[node][node+this.numOfNodesPerSide] = weight;
        }

        if(this._bottomNodeExists(node) === true){ 
            this.adjacencyMatrix[node-this.numOfNodesPerSide][node] = weight;
            //this.adjacencyMatrix[node][node-this.numOfNodesPerSide] = weight;
        }
    }

    _rightNodeExists(node){
        return (((node + 1) < this.numOfTotalNodes) && ((node+1) % this.numOfNodesPerSide !== 0));
    }
    _leftNodeExists(node){
        return (((node - 1) >= 0) && ((node % this.numOfNodesPerSide) !== 0));
    }
    _topNodeExists(node){
        return ((node + this.numOfNodesPerSide) < this.numOfTotalNodes);
    }
    _bottomNodeExists(node){
        return ((node - this.numOfNodesPerSide) >= 0);
    }
}

export default GridGraph;