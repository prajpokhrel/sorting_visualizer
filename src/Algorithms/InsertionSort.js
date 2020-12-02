import React from 'react';
import { newMonitor, addToMonitor } from './VisualizationHelper';

const InsertionSort = (nums) => {
    // Initial State
    const trace = newMonitor(nums);

    // Core Algorithm
    for (let i = 1; i < nums.length; i++) {
        let value = nums[i];
        let hole = i;
        // Visualize: Hole has been selected for comparison
        addToMonitor(trace, nums, [], [i]);
        while (hole > 0 && nums[hole - 1] > value) {
            // Visualize: Compare hole to value
            addToMonitor(trace, nums, [], [hole], [hole - 1]);
            nums[hole] = nums[hole - 1];
            hole -= 1;
            // Visualize: Overwrite hole with hole - 1
            addToMonitor(trace, nums, [], [], [hole, hole + 1]);
        }
        // Visualize: Overwrite hole with value
        addToMonitor(trace, nums, [], [], [], [hole]);
        nums[hole] = value;
        // Visualize: value is in sorted position
        addToMonitor(trace, nums, [], [], [], [hole]);
    }

    // Visualize: Mark all elements as sorted
    addToMonitor(trace, nums, [...Array(nums.length).keys()]);
    return trace;
};

export default InsertionSort;