import React from "react";
import "./Bar.css";

const Bar = (props) => {

    return (
        props.array.map(((value, index) => {
            let classNames = "array_bars";
            if (props.stateA.includes(index)) classNames += " groupA";
            if (props.stateB.includes(index)) classNames += " groupB";
            if (props.stateC.includes(index)) classNames += " groupC"
            if (props.stateD.includes(index)) classNames += " groupD"
            if (props.sorted.includes(index)) classNames += " sorted"
            return(
                    <div key={index} className={classNames} style={{height:value}}>
                        {/*Displaying value of the bar*/}
                        {(props.array.length <= 25) &&
                        <div className="bar_value">
                            <span>{value}</span>&nbsp;
                            {/*<span>{index}</span>*/}
                        </div>}

                    </div>);
            }))
    );
};

export default Bar;