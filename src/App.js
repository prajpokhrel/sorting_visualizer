import React from 'react';
import './App.css';
import MainBody from "./components/MainBody";

function App() {
  return (
    <div className="App">
      {/*<h1>Sorting Visualizer</h1>*/}
      {/* This should handle the following things:
           1.   All the controls to select algorithms, array sizes, generating random
                arrays, setting up actionTypes,
           2.   Get all the tracing elements from the algorithm and pass all those to
                <SortingVisualization />
           3.   Dont make <SortingVisualization /> Populated.

       */}

      {/* Include the following:
            Navigation Bar
            Main Body
            Body Controls
            Algorithm Descriptions
            Footer*/}

      {/*<SortingVisualization />*/}
      <MainBody />
      {/*<Template />*/}
    </div>
  );
}

export default App;
