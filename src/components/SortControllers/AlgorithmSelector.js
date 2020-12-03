import React, {useEffect} from "react";
import "./ControlWrapper.css";
import NativeSelect from "@material-ui/core/NativeSelect";

const AlgorithmSelector = (props) => {

    // const [algorithm, setAlgorithm] = React.useState("");
    const algoSelector = [
        {value: "", name: "None"},
        {value: "Bubble Sort", name: "Bubble Sort"},
        {value: "Quick Sort", name: "Quick Sort"},
        {value: "Merge Sort", name: "Merge Sort"},
        {value: "Selection Sort", name: "Selection Sort"},
        {value: "Insertion Sort", name: "Insertion Sort"},
        {value: "Heap Sort", name: "Heap Sort"},
        {value: "Shell Sort", name: "Shell Sort"},
    ];

    return (
        <div className="row">
            <div className="col-sm control_style">
                <h4>Select Algorithm:</h4>
                {/* ADD SELECTION BOX  */}
                <NativeSelect
                    value={props.algorithm.algorithmName}
                    className="select_style"
                    onChange={props.handleChange}
                    name="algorithmName"
                    // inputProps={{ 'aria-label': 'algorithmName' }}
                >
                    {algoSelector.map((algoSelector, index) => {
                        return (<option key={index} value={`${algoSelector.value}`}>{algoSelector.name}</option>)
                    })}

                </NativeSelect>
            </div>
        </div>
    );
};

export default AlgorithmSelector;