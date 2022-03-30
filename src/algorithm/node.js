class Node{
    constructor(index = null, distance = Infinity, neighbor = [], previous = null){
        this.index = index;
        this.previous = previous;
        this.distance = distance; 
        this.neighbor = neighbor;
    }

    setIndex(index){
        this.index = index;
    }
    setPrevious(previous){
        this.previous = previous;
    }
    setDistance(distance){
        this.distance = distance;
    }
    setNeighbor(neighbor){
        this.neighbor = neighbor;
    }
    
    getIndex(){
        return this.index;
    }
    getPrevious(){
        return this.previous;
    }
    getDistance(){
        return this.distance;
    }   
    getNeighbors(){
        return this.neighbor;
    }
}

export default Node;