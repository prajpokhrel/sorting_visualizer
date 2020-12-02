import React from "react";
import "./Legend.css";

const Legend = (props) => {
    // console.log(stateA, stateB, stateC, stateD);
    console.log(props.getLegend);

    const {stateA, stateB, stateC, stateD} = props.getLegend;

    return(
        <div className="legend">

            {stateA || stateB || stateC || stateD ?
                <div className="legend_item">
                    <div className="item_color sorted"></div><span className="legend_name">Sorted</span>
                </div> : <div className="legend_item">
                    <div className="item_color unsorted"></div><span className="legend_name">Unsorted</span>
                </div>
            }

            {stateA ?

                <div className="legend_item">
                    <div className="item_color groupA"></div><span className="legend_name">{stateA}</span>
                </div> : null

            }

            {stateB ?

                <div className="legend_item">
                    <div className="item_color groupB"></div><span className="legend_name">{stateB}</span>
                </div> : null

            }

            {stateC ?

                <div className="legend_item">
                    <div className="item_color groupC"></div><span className="legend_name">{stateC}</span>
                </div> : null

            }

            {stateD ?

                <div className="legend_item">
                    <div className="item_color groupD"></div><span className="legend_name">{stateD}</span>
                </div> : null

            }

        </div>
    );
};

export default Legend;