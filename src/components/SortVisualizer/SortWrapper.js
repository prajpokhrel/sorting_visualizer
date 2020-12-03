import React from "react";
import "./SortWrapper.css";
import Bar from "./Bars/Bar";
import "./SortWrapper.css";

const SortWrapper = (props) => {

    return (
        <div className="col-sm-9 visualization_board">
            <div className="sorting-bars">
                <Bar array={props.array}
                     stateA = {props.stateA}
                     stateB = {props.stateB}
                     stateC = {props.stateC}
                     stateD = {props.stateD}
                     sorted = {props.sorted}/>
            </div>
        </div>
    );
}

export default SortWrapper;