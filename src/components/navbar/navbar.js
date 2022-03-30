import "./navbar.css";

function Navbar(props){
  function handleClick(state, setState){
    if(state === true){
      setState(false);
    }
    else if(state === false){
      setState(true);
    }
  }

  return (
    <div className = "navbar_container">
        <button className = "navbar_container-options" onClick = {() => {handleClick(props.showTutorial, props.setShowTutorial)}}>Tutorial</button>
        <button className = "navbar_container-options" onClick = {() => {handleClick(props.showMoreInformation, props.setShowMoreInformation)}}>For Nerds</button>
    </div>
  );
}

export default Navbar;