import "./document-formatting.css"

function MoreInformation(props){
  return (
    <div className = "tutorial_container">
        <p><br/></p>
        <p><br/></p>
        <p>Every square in this grid is represented by a node in a graph. Every node has an edge with a weight connecting it to it's adjacent nodes. This weight represents the cost of traveling from one node to another. </p>
        <p><br/></p>
        <p>As mentioned above, this grid is represented by a graph under the hood. A graph traversal algorithm, like Dijkstra’s algorithm, can find the shortest path to every node. It does so by comparing the cumulative edge weights incurred by travelling every possible path from the starting node to every other node in order to find the path with the smallest cumulative weight. The order in which the algorithm visits these nodes is what is being visualized on the screen when you click 'Quickest path’.</p>
        <p><br/></p>
        <p>Here are the costs associated with traveling from square to square in this grid:</p>
        <p className = "enter"></p>
        <p className = "indent">1. The cost of traveling to a neighboring/adjacent square is 1 minute.</p>
        <p className = "indent">2. The cost of traveling to a square with traffic is 3 minutes.</p>
        <p className = "indent">3. The cost of traveling to a blocked node is 0 minutes (since it’s not possible).</p>
    </div>
  );
}

export default MoreInformation;