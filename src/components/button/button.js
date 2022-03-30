import "./button.css";

function Button(props) {
  return (
    <div className = "button_container">
      <button 
        className = {`button_container-button ${props.buttonClassName}`} 
        onClick = {() => {props.handleClick(props.handleClickArgument)}}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;