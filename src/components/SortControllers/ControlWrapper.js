import React, {useEffect, useState} from "react";
import "./ControlWrapper.css";
import Button from "@material-ui/core/Button";
import AlgorithmSelector from "./AlgorithmSelector";
import SizeSlider from "./SizeSlider";
import SpeedSlider from "./SpeedSlider";

const ControlWrapper = (props) => {

    const [size, setSize] = useState(25);
    const [speed, setSpeed] = useState(500);
    const [algorithm, setAlgorithm] = React.useState({
        algorithmName: ''
    });

    useEffect(() => {
        props.onChangeArraySize(size);
    }, [size]);

    useEffect(() => {
        props.playbackSpeed(speed);
    }, [speed]);

    useEffect(() => {
        props.onChangeAlgorithm(algorithm);
    }, [algorithm]);


    const algorithmChangeHandler = (event) => {
        const name = event.target.name;
        setAlgorithm({
            ...algorithm,
            [name]: event.target.value,
        });
    };

    const updateSize = (value) => {
        setSize(prevState => value);
    }

    const updateSpeed = (value) => {
        setSpeed(prevState => value);
    }


    function valuetext(value) {
        // console.log(value);
        return `${value}`;
    }

    return (
        <div className="col-sm-3 control_board">

            <AlgorithmSelector algorithm={algorithm} handleChange={algorithmChangeHandler}/>
            <SizeSlider valuetext={valuetext} size={size} updateSize={updateSize}/>
            <SpeedSlider valuetext={valuetext} speed={speed} updateSpeed={updateSpeed}/>

            <div className="row">
                <div className="col-sm button_group control_style">
                    <Button variant="contained"
                            disabled={props.onBtnDisabled}
                            onClick={props.onVisualizationStart}>SORT</Button>
                    <Button variant="contained" color="primary"
                            onClick={() => props.onGenerateArray(size)}>Generate New Array</Button>
                </div>
            </div>
        </div>
    );
}

export default ControlWrapper;