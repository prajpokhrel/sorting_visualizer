import React from "react";
import "./SortWrapper.css";
import Bar from "./Bars/Bar";
import {compareSortedArray, randomIntBetweenIntervals} from "../../Algorithms/HelperMethods";
import BubbleSort from "../../Algorithms/BubbleSort";
import "./SortWrapper.css";
import SelectionSort from "../../Algorithms/SelectionSort";
import InsertionSort from "../../Algorithms/InsertionSort";
import MergeSort from "../../Algorithms/MergeSort";
import QuickSort from "../../Algorithms/QuickSort";
import HeapSort from "../../Algorithms/HeapSort";
import ShellSort from "../../Algorithms/ShellSort";

const SortWrapper = (props) => {

    // const [myArray, setMyArray] = useState([]);
    // const [groupA, setGroupA] = useState([]);
    // const [groupB, setGroupB] = useState([]);
    // const [groupC, setGroupC] = useState([]);
    // const [groupD, setGroupD] = useState([]);
    // const [sorted, setSorted] = useState([]);



    // useEffect(() => {
    //     generateArray();
    // }, []);
    //
    // const generateArray = () => {
    //     const newArray = [];
    //     for (let i = 0; i < 25; i++) {
    //         // newArray.push(Math.floor(Math.random() * 100) + 1);
    //         newArray.push(randomIntBetweenIntervals(420, 25))
    //     }
    //     setMyArray(newArray);
    // };

    // const changeBars = (array, groupA, groupB, groupC, groupD, sortedIndex) => {
    //     setMyArray(prevState => [...array]);
    //     setGroupA(prevState => groupA);
    //     setGroupB(prevState => groupB);
    //     setGroupC(prevState => groupC);
    //     setGroupD(prevState => groupD);
    //     setSorted(prevState => sortedIndex);
    //     console.log(myArray, groupA, groupB, groupC, groupD);
    // }

    // const sortHandler = () => {
        // const sortedArray = BubbleSort(myArray);
        // setMyArray(prevState => {
        //     return [...sortedArray];
        // });
        // // console.log(sortedArray);


        // const monitors = BubbleSort(myArray);
        // const monitors = MergeSort(myArray);
        // const monitors = QuickSort(myArray);
        // const monitors = HeapSort(myArray);
        // const monitors = InsertionSort(myArray);
        // const monitors = SelectionSort(myArray);
        // const monitors = ShellSort(myArray);

        // Set a timeout for each item in the trace
        // monitors.map((item, i) => {
        //     setTimeout(
        //         () => {
        //             changeBars(item.array, item.groupA, item.groupB, item.groupC, item.groupD, item.sortedIndex);
        //         },
        //         i * 1000
        //     )});
        // console.log(monitors);

    // }

    // const testAlgorithmHandler = () => {
    //     const currentArray = myArray;
    //     const sortWithMyAlgorithm = BubbleSort(currentArray);
    //     const sortWithDefault = currentArray.sort((a, b) => a - b);
    //
    //     console.log("Custom sorted:");
    //     console.log(sortWithMyAlgorithm);
    //     console.log("Default sorted:");
    //     console.log(sortWithDefault);
    //
    //     console.log(compareSortedArray(sortWithDefault, sortWithMyAlgorithm));
    //
    // }

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
            {/*<button className="btn btn-primary" onClick={generateArray}>Generate Random Array</button>*/}
            {/*<button className="btn btn-primary" onClick={sortHandler}>Sort</button>*/}
            {/*<button className="btn btn-primary" onClick={testAlgorithmHandler}>Test Sorting Algorithm</button>*/}
        </div>
    );
}

export default SortWrapper;