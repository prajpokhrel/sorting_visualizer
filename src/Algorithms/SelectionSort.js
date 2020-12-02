import React from 'react';
import {
    swap,
    newMonitor,
    addToMonitor,
    lastSorted,
} from './VisualizationHelper';

const SelectionSort = (nums) => {
    // Initial State
    const trace = newMonitor(nums);

    // Core Algorithm
    for (let i = 0; i < nums.length - 1; i++) {
        // Internal Loop: Find index of min value
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            // Visualize: comparing A[j] to A[minIndex]
            addToMonitor(trace, nums, lastSorted(trace), [minIndex, j]);
            if (nums[j] < nums[minIndex]) {
                // Visualize: discovered new minIndex
                addToMonitor(trace, nums, lastSorted(trace), [minIndex], [j]);
                minIndex = j;
                // Visualize: reassign new minIndex;
                addToMonitor(trace, nums, lastSorted(trace), [minIndex], [j]);
            }
        }

        // Visualize: i'th value to be swapped with min value
        addToMonitor(trace, nums, lastSorted(trace), [], [i, minIndex]);

        swap(nums, i, minIndex);

        // Visualize: i'th value has been swapped with min value
        addToMonitor(trace, nums, [...lastSorted(trace), i], [], []);
    }

    // Visualize: Final item in the array is sorted
    addToMonitor(trace, nums, [...lastSorted(trace), nums.length - 1]);

    return trace;
};

export default SelectionSort;