import React from 'react';
import {
    swap,
    newMonitor,
    addToMonitor,
    lastSorted,
} from './VisualizationHelper';

const BubbleSort = (nums) => {
    // Set up code for tracing the algorithm
    const trace = newMonitor(nums);

    // SortingVisualization Algorithm with trace capture
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            // Visualize: Comparing A[j] and A[j + 1]
            addToMonitor(trace, nums, lastSorted(trace), [j, j + 1]);
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1);
                // Visualize: Swap A[j] and A[j + 1]
                addToMonitor(trace, nums, lastSorted(trace), [], [j, j + 1]);
            }
        }

        // Visualize: final value is sorted
        addToMonitor(trace, nums, [
            ...lastSorted(trace),
            nums.length - 1 - i
        ]);
    }

    return trace;
};



export default BubbleSort;
