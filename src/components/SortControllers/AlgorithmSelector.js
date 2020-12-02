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

    // const [algorithm, setAlgorithm] = React.useState({
    //     algorithmName: ''
    // });
    //
    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     setAlgorithm({
    //         ...algorithm,
    //         [name]: event.target.value,
    //     });
    // };

    // useEffect(() => {
    //     console.log(algorithm);
    // }, [algorithm]);

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

                    {/*<option value="">None</option>*/}
                    {/*<option value="Bubble Sort">Bubble Sort</option>*/}
                    {/*<option value="Quick Sort">Quick Sort</option>*/}
                    {/*<option value="Merge Sort">Merge Sort</option>*/}
                    {/*<option value="Selection Sort">Selection Sort</option>*/}
                    {/*<option value="Insertion Sort">Insertion Sort</option>*/}
                    {/*<option value="Heap Sort">Heap Sort</option>*/}
                    {/*<option value="Shell Sort">Shell Sort</option>*/}

                </NativeSelect>
            </div>
        </div>
    );
};

export default AlgorithmSelector;