import React from "react";
import "./NavigationBar.css";
import Legend from "./Legend";

const NavigationBar = (props) => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand" href="#">Sorting Algorithms Visualizer</a>
            {/* Add a color key Here*/}
            <Legend getLegend={props.legends}/>
        </nav>
    );
};

export default NavigationBar;