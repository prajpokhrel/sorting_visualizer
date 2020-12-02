import React from 'react';
import {
    swap,
    newMonitor,
    addToMonitor,
    createRange
} from './VisualizationHelper';

const ShellSort = (nums) => {
    const trace = newMonitor(nums);

    for (
        let gap = Math.floor(nums.length / 2);
        gap > 0;
        gap = Math.floor(gap / 2)
    ) {
        for (let j = gap; j < nums.length; j++) {
            for (let i = j - gap; i >= 0; i -= gap) {
                addToMonitor(trace, nums, [], [i, i + gap]);
                if (nums[i + gap] < nums[i]) {
                    addToMonitor(trace, nums, [], [], [i, i + gap]);
                    swap(nums, i, i + gap);
                    addToMonitor(trace, nums, [], [], [i, i + gap]);
                } else {
                    break;
                }
            }
        }
    }

    addToMonitor(trace, nums, createRange(0, nums.length));
    return trace;
};

export default ShellSort;