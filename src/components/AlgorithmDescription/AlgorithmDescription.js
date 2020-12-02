import React from "react";
import "./AlgorithmDescription.css";

const AlgorithmDescription = (props) => {
    return (
        <div className="row description_container">
            <div className="col-sm-7">

                <h1>{props.algoDescription.title}</h1>

                {props.algoDescription.description}

            </div>
            <div className="col-sm-5 complexities_container">
                <h2>Time and Space Complexities:</h2>
                <table className="table table-striped">
                    {props.algoDescription.complexity}
                    {/*<tbody>*/}
                    {/*<tr>*/}
                    {/*    <th scope="row">Best Case (Time)</th>*/}
                    {/*    <td>O (n)</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <th scope="row">Average Case (Time)</th>*/}
                    {/*    <td>O (n^2)</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <th scope="row">Worst Case (Time)</th>*/}
                    {/*    <td>O (n^2)</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <th scope="row">Worst Case (Space)</th>*/}
                    {/*    <td>O (1)</td>*/}
                    {/*</tr>*/}
                    {/*</tbody>*/}
                </table>
            </div>
        </div>
    );
};

export default AlgorithmDescription;