import "./document-formatting.css"

function Tutorial(props){
  return (
    <div className = "tutorial_container">
        <p><br/></p>
        <p><br/></p>
        <p>This program will find the shortest route (by time) between any two locations in this grid -taking both distance and traffic into consideration. It's a very simplified version of how real navigation services are able to suggest you the fastest routes to your destinations.</p>
        <p><br/></p>
        <p className = "heading">Step 1: Pick a Map</p>
        <p><br/></p>
        <p>These "maps" are really just mazes, which you can customize.</p>
        <p><br/></p>
        <p>You can either pick pre-built ones based on real cities, or pick "none" or "filled" to build your own from scratch.</p>
        <p><br/></p>
        <p className = "heading">Step 2: Select Your Route</p>
        <p><br/></p>
        <p>Decide where you want to start and end your journey.</p>
        <p><br/></p>
        <p>You can either click on the "From" and "To" buttons, or directly the points on the grid you want to select.</p>
        <p><br/></p>
        <p>After selecting your points, click on the new sqaure you want to place your points.</p>
        <p><br/></p>
        <p className = "heading">Step 3: Build In Additional Items</p>
        <p><br/></p>
        <p>Customize your roads by adding and removing blocks, or by inserting traffic/congestion at any spot.</p>
        <p><br/></p>
        <p>Click on "block", "remove", or "traffic" depending on which edit mode you want to enter.</p>
        <p><br/></p>
        <p>After entering the "traffic" edit mode, click the square you want to insert traffic in.</p>
        <p><br/></p>
        <p>After entering "block" or "remove" edit modes, click any square to activate the brush, hover over the desired squares to draw in them, and click any square again to deactivate the brush.</p>
        <p><br/></p>
        <p className = "heading">Step 4: Travel!</p><p className = "new_line"></p>
        <p>Once you're happy with your map, you can click "Quickest path" to watch the algorithm visually figure out the fastest route to your destination.</p>
        <p><br/></p>
    </div>
  );
}

export default Tutorial;