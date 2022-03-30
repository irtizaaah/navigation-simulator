import "./build.css"
import Button from "../../button/button";
function Build(props){
    return (
      <div className = "build_container">
        <Button 
            name = "Block"
            handleClick = {() => {
              props.setEditBlockedNodes(props.editBlockedNodes ? false : true);           
              props.setEditStartNode(false);
              props.setEditEndNode(false);
              props.setEditResetedNodes(false); 
              props.setEditWeightedNodes(false);
              props.setEditContinuousResetedNodes(false);
              // in case state wasn't set to false already
            }}

            buttonClassName = {props.editBlockedNodes ? "button_container-button-on" : ""}
        />
        <Button 
            name = "Remove"
            handleClick = {() => {
              props.setEditResetedNodes(props.editResetedNodes ? false : true);         
              props.setEditStartNode(false);
              props.setEditEndNode(false);
              props.setEditBlockedNodes(false); 
              props.setEditWeightedNodes(false); 
              props.setEditContinuousBlockedNodes(false);
              // in case state wasn't set to false already
            }}

            buttonClassName = {props.editResetedNodes ? "button_container-button-on" : ""}
        />
        <Button 
            name = "Traffic"
            handleClick = {() => {
              props.setEditWeightedNodes(props.editWeightedNodes ? false : true);          
              props.setEditStartNode(false);
              props.setEditEndNode(false);
              props.setEditBlockedNodes(false); 
              props.setEditResetedNodes(false); 
              props.setEditContinuousBlockedNodes(false);
              props.setEditContinuousResetedNodes(false);
              // in case state wasn't set to false already
            }
          }

          buttonClassName = {props.editWeightedNodes ? "button_container-button-on" : ""}
        />
      </div>
    );
  }

export default Build;