import React, {useEffect, useState} from "react";
import "./MainBody.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import SortWrapper from "./SortVisualizer/SortWrapper";
import ControlWrapper from "./SortControllers/ControlWrapper";
import {randomIntBetweenIntervals} from "../Algorithms/HelperMethods";
import BubbleSort from "../Algorithms/BubbleSort";
import QuickSort from "../Algorithms/QuickSort";
import MergeSort from "../Algorithms/MergeSort";
import SelectionSort from "../Algorithms/SelectionSort";
import HeapSort from "../Algorithms/HeapSort";
import InsertionSort from "../Algorithms/InsertionSort";
import ShellSort from "../Algorithms/ShellSort";
import {BubbleSortDescription, BubbleSortLegend, defaultDescription} from "../AlgorithmsDescription/BubbleSortDesc";
import {SelectionSortDescription, SelectionSortLegend} from "../AlgorithmsDescription/SelectionSortDesc";
import {InsertionSortDescription, InsertionSortLegend} from "../AlgorithmsDescription/InsertionSortDesc";
import {MergeSortDescription, MergeSortLegend} from "../AlgorithmsDescription/MergeSortDesc";
import {QuickSortDescription, QuickSortLegend} from "../AlgorithmsDescription/QuickSortDesc";
import {HeapSortDescription, HeapSortLegend} from "../AlgorithmsDescription/HeapSortDesc";
import {ShellSortDescription, ShellSortLegend} from "../AlgorithmsDescription/ShellSortDesc";
import AlgorithmDescription from "./AlgorithmDescription/AlgorithmDescription";
import Footer from "./Footer/Footer";

const MainBody = () => {

    const [newArray, setNewArray] = useState([]);
    const [stateA, setstateA] = useState([]);
    const [stateB, setstateB] = useState([]);
    const [stateC, setstateC] = useState([]);
    const [stateD, setstateD] = useState([]);
    const [sorted, setSorted] = useState([]);
    const [visualSpeed, setVisualSpeed] = useState(500);
    const [arraySize, setArraySize] = useState(25);
    const [timeoutIds, setTimeoutIds] = useState([]);
    const [algorithm, setAlgorithm] = React.useState({
        algorithmName: ''
    });
    const [btnDisable, setBtnDisable] = useState(true);


    const ALGORITHMS = {
        'Bubble Sort': BubbleSort,
        'Selection Sort': SelectionSort,
        'Insertion Sort': InsertionSort,
        'Merge Sort': MergeSort,
        'Quick Sort': QuickSort,
        'Heap Sort': HeapSort,
        'Shell Sort': ShellSort
    }

    const ALGORITHMS_LEGEND = {
        'Bubble Sort': BubbleSortLegend,
        'Selection Sort': SelectionSortLegend,
        'Insertion Sort': InsertionSortLegend,
        'Merge Sort': MergeSortLegend,
        'Quick Sort': QuickSortLegend,
        'Heap Sort': HeapSortLegend,
        'Shell Sort': ShellSortLegend
    }

    const ALGORITHMS_DESCRIPTION = {
        'Bubble Sort': BubbleSortDescription,
        'Selection Sort': SelectionSortDescription,
        'Insertion Sort': InsertionSortDescription,
        'Merge Sort': MergeSortDescription,
        'Quick Sort': QuickSortDescription,
        'Heap Sort': HeapSortDescription,
        'Shell Sort': ShellSortDescription,
        'default': defaultDescription
    }

    useEffect(() => {
        resetBars();
        generateArrayHandler(arraySize);
        playbackSpeed(visualSpeed);
        // changeAlgorithmHandler(algorithm);
    }, [arraySize, visualSpeed, algorithm]);


    useEffect(() => {
        changeAlgorithmHandler(algorithm);
        // console.log(algorithm);
        if (algorithm.algorithmName === "") {
            setBtnDisable(prevState => true);
        } else {
            setBtnDisable(prevState => false);
        }
    }, [algorithm]);


    const resetBars = () => {
        setNewArray([]);
        setstateA([]);
        setstateB([]);
        setstateC([]);
        setstateD([]);
        setSorted([]);
    }

    const generateArrayHandler = (size) => {
        clearTimeouts();
        resetBars();
        const generateArray = [];
        for (let i = 0; i < size; i++) {
            // newArray.push(Math.floor(Math.random() * 100) + 1);
            generateArray.push(randomIntBetweenIntervals(420, 25))
        }
        setNewArray(generateArray);
    };

    const changeBars = (item) => {
        setBtnDisable(prevState => true);
        setNewArray(prevState => [...item.array]);
        setstateA(prevState => item.stateA);
        setstateB(prevState => item.stateB);
        setstateC(prevState => item.stateC);
        setstateD(prevState => item.stateD);
        setSorted(prevState => item.sortedIndex);
        // console.log(newArray, stateA, stateB, stateC, stateD);
    };

    const playbackSpeed = (speed) => {
        clearTimeouts();
        // resetBars();
        setVisualSpeed(prevState => speed);
        if (algorithm.algorithmName === "") {
            setBtnDisable(prevState => true);
        } else {
            setBtnDisable(prevState => false);
        }
    };

    const changeAlgorithmHandler = (algorithm) => {
        clearTimeouts();
        setAlgorithm(prevState => algorithm);
    }


    const changeArraySizeHandler = (size) => {
        clearTimeouts();
        // resetBars();
        setArraySize(prevState => size);
        if (algorithm.algorithmName === "") {
            setBtnDisable(prevState => true);
        } else {
            setBtnDisable(prevState => false);
        }
    };


    // const updateDisableBtn = (value) => {
    //     setBtnDisable(prevState => value);
    // };

    // const resetHandler = () => {
    //     clearTimeouts();
    //     resetBars();
    //     // generateArrayHandler(25);
    // }

    const clearTimeouts = () => {
        timeoutIds.forEach((timeoutId) => {
            clearTimeout(timeoutId);
        });
        setTimeoutIds(prevState => []);
    };


    const sortVisualizationHandler = () => {
        const monitorParams = ALGORITHMS[algorithm.algorithmName](newArray);
        // console.log(monitorParams.length);
        monitorParams.forEach((item, i) => {
            let timeoutId = setTimeout(
                (item) => {
                    changeBars(item);
                },
                i * visualSpeed, item
            );

            timeoutIds.push(timeoutId);
        });
        setBtnDisable(prevState => false);
        // Clear timeouts upon completion
        let timeoutId = setTimeout(
            clearTimeouts, monitorParams.length * visualSpeed
        );
        timeoutIds.push(timeoutId);
        setTimeoutIds(timeoutIds);
    }

    return (
        <div>
            <NavigationBar legends={algorithm.algorithmName !== '' ? ALGORITHMS_LEGEND[algorithm.algorithmName] : ""}/>
            <div className="container-fluid test">
                <div className="row">
                    <SortWrapper array={newArray}
                                 stateA={stateA}
                                 stateB={stateB}
                                 stateC={stateC}
                                 stateD={stateD}
                                 sorted={sorted}/>
                    <ControlWrapper onGenerateArray={generateArrayHandler}
                                    onChangeArraySize={changeArraySizeHandler}
                                    playbackSpeed={playbackSpeed}
                                    onBtnDisabled={btnDisable}
                                    // disability={updateDisableBtn}
                                    onChangeAlgorithm={changeAlgorithmHandler}
                                    // onResetVisualState={resetHandler}
                                    onVisualizationStart={sortVisualizationHandler}/>
                </div>


                <AlgorithmDescription algoDescription={algorithm.algorithmName !== '' ? ALGORITHMS_DESCRIPTION[algorithm.algorithmName]
                    : ALGORITHMS_DESCRIPTION["default"]}/>
                <Footer />

            </div>
        </div>
    );
}

export default MainBody;