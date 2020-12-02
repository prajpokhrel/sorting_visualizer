import React, {useEffect, useState} from "react";
import Slider from "@material-ui/core/Slider";

const SpeedSlider = (props) => {

    // const [speed, setSpeed] = useState(2);

    const speedParams = [
        {value:0.5, label:'.5x'},
        {value:2, label:'2x'},
        {value:4, label:'4x'},
        {value:8, label:'8x'},
        {value:10, label:'10x'}
    ]

    const onSliderChangeHandler = (value) => {
        switch (value) {
            case 0.5:
                props.updateSpeed(1000);
                break;
            case 2:
                props.updateSpeed(500);
                break;
            case 4:
                props.updateSpeed(250);
                break;
            case 8:
                props.updateSpeed(100);
                break;
            case 10:
                props.updateSpeed(50);
                break;
            default:
                props.updateSpeed(500);
        }

    }

    // const getValueHandler = () => {
    //     console.log(speed);
    // }

    return (
        <div className="row">
            <div className="col-sm control_style">
                <h4>Visualization Speed:</h4>
                {/* ADD SELECTION BOX  */}
                <Slider
                    defaultValue={2}
                    getAriaValueText={props.valuetext}
                    onChange={(event, value) => onSliderChangeHandler(value)}
                    // onChangeCommitted={props.speed}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={null}
                    marks={speedParams}
                    min={0.5}
                    max={10}
                />

            </div>
        </div>
    );
};

export default SpeedSlider;