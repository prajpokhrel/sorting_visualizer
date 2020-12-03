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
                </table>
            </div>
        </div>
    );
};

export default AlgorithmDescription;