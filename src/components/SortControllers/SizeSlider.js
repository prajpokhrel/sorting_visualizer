import React, {useState} from "react";
import Slider from "@material-ui/core/Slider";

const SizeSlider = (props) => {

    // const [size, setSize] = useState(25);

    const marks = [
        {value:5, label:'5'},
        {value:10, label:'10'},
        {value:25, label:'25'},
        {value:50, label:'50'},
        {value:75, label:'75'},
        {value:100, label:'100'},
    ]

    const onSizeChangeHandler = (value) => {
        props.updateSize(value);
    }

    return (
        <div className="row">
            <div className="col-sm control_style">
                <h4>Array Size:</h4>
                {/* ADD SELECTION BOX  */}
                <Slider
                    className="slider"
                    defaultValue={25}
                    onChange={(event, value) => onSizeChangeHandler(value)}
                    // onChangeCommitted={props.size}
                    getAriaValueText={props.valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={null}
                    marks={marks}
                    min={5}
                    max={100}
                />
            </div>
        </div>
    );
};

export default SizeSlider;