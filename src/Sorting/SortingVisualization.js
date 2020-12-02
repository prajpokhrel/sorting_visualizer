// import React, {useEffect, useState} from "react";
// import "./SortingVisualization.css";
// // import Bar from "./Bar";
// import BubbleSort from "../Algorithms/BubbleSort";
// import SelectionSort from "../Algorithms/SelectionSort";
// import ShellSort from "../Algorithms/ShellSort";
// import {randomIntBetweenIntervals,compareSortedArray} from "../Algorithms/HelperMethods";
// import Bar from "../components/SortVisualizer/Bars/Bar";
// import HeapSort from "../Algorithms/HeapSort";
// import InsertionSort from "../Algorithms/InsertionSort";
// import MergeSort from "../Algorithms/MergeSort";
// import QuickSort from "../Algorithms/QuickSort";
//
//
// const SortingVisualization = () => {
//
//     const [myArray, setMyArray] = useState([]);
//     const [groupA, setGroupA] = useState([]);
//     const [groupB, setGroupB] = useState([]);
//     const [groupC, setGroupC] = useState([]);
//     const [groupD, setGroupD] = useState([]);
//     const [sorted, setSorted] = useState([]);
//
//     useEffect(() => {
//         generateArray();
//     }, []);
//
//     const generateArray = () => {
//         const newArray = [];
//         for (let i = 0; i < 25; i++) {
//             // newArray.push(Math.floor(Math.random() * 100) + 1);
//             newArray.push(randomIntBetweenIntervals(400, 20))
//         }
//
//         /*
//         * Just a quick tip:
//         * console.log(newArray);
//         * This sorts array based on strings.
//         * console.log(newArray.sort());
//         * So follow the following method to sort integers.
//         * newArray.sort((a, b) => a - b);
//         *
//         * */
//         setMyArray(newArray);
//     };
//
//     const changeBars = (array, groupA, groupB, groupC, groupD, sortedIndex) => {
//         setMyArray(prevState => [...array]);
//         setGroupA(prevState => groupA);
//         setGroupB(prevState => groupB);
//         setGroupC(prevState => groupC);
//         setGroupD(prevState => groupD);
//         setSorted(prevState => sortedIndex);
//         console.log(myArray, groupA, groupB, groupC, groupD);
//     }
//
//     const sortHandler = () => {
//         // const sortedArray = BubbleSort(myArray);
//         // setMyArray(prevState => {
//         //     return [...sortedArray];
//         // });
//         // // console.log(sortedArray);
//
//
//         const monitors = BubbleSort(myArray);
//         // const monitors = MergeSort(myArray);
//         // const monitors = QuickSort(myArray);
//         // const monitors = HeapSort(myArray);
//         // const monitors = InsertionSort(myArray);
//         // const monitors = SelectionSort(myArray);
//         // const monitors = ShellSort(myArray);
//
//         // Set a timeout for each item in the trace
//         monitors.map((item, i) => {
//                 setTimeout(
//                 () => {
//                     changeBars(item.array, item.groupA, item.groupB, item.groupC, item.groupD, item.sortedIndex);
//                 },
//                 i * 1000
//                 )});
//         console.log(monitors);
//
//     }
//
//     const testAlgorithmHandler = () => {
//         const currentArray = myArray;
//         const sortWithMyAlgorithm = BubbleSort(currentArray);
//         const sortWithDefault = currentArray.sort((a, b) => a - b);
//
//         console.log("Custom sorted:");
//         console.log(sortWithMyAlgorithm);
//         console.log("Default sorted:");
//         console.log(sortWithDefault);
//
//         console.log(compareSortedArray(sortWithDefault, sortWithMyAlgorithm));
//
//     }
//
//     return (
//         <div className="main-container">
//             <div className="sorting-bars">
//
//                 {/*Should call sortVisualizer with all the monitoring elements*/}
//
//                 <Bar array={myArray}
//                      groupA = {groupA}
//                      groupB = {groupB}
//                      groupC = {groupC}
//                      groupD = {groupD}
//                      sorted = {sorted}/>
//                      {/*swapping={}*/}
//                      {/*comparing={} />*/}
//
//             </div><br/>
//             <button className="btn btn-primary" onClick={generateArray}>Generate Random Array</button>
//             <button className="btn btn-primary" onClick={sortHandler}>Sort</button>
//             <button className="btn btn-primary" onClick={testAlgorithmHandler}>Test Sorting Algorithm</button>
//         </div>
//
//     );
// };
//
// export default SortingVisualization;