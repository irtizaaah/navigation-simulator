import "./dashboard.css";
import { useState, useEffect } from "react";

function Dashboard(props){

  return (
    <div className = "dashboard_container">
        <p className="dashboard_container-travel_time">{props.travelTime} Min</p>
        <div className = "key">
            <p><span className = "square_unicode">■</span> Time (no traffic): 1 min/sq.</p>
            <p>▲ Time (with traffic): 3 min/sq.</p>
        </div>
    </div>
  );
}

export default Dashboard;