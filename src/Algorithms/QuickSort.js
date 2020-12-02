import React from 'react';
import {
    swap,
    newMonitor,
    addToMonitor,
    lastSorted,
    createRange
} from './VisualizationHelper';

const QuickSort = (nums) => {
    // Initial State
    const trace = newMonitor(nums);

    function choosePivot(array, start, end) {
        // randomly pick an element between start and end;
        return Math.floor(Math.random() * (end - start)) + start;
    }

    function partition(array, start, end) {
        let i = start + 1;
        let j = start + 1;

        // Visualize: Keep pivot marked
        addToMonitor(trace, array, lastSorted(trace), [start]);

        while (j <= end) {
            if (array[j] < array[start]) {
                // Visualize: Mark item that is less than pivot
                addToMonitor(
                    trace,
                    array,
                    lastSorted(trace),
                    [start],
                    [j],
                    [],
                    createRange(start + 1, i)
                );

                swap(array, i, j);

                // Visualize: Move item to lesser list
                addToMonitor(
                    trace,
                    array,
                    lastSorted(trace),
                    [start],
                    [i],
                    [],
                    createRange(start + 1, i)
                );
                i += 1;
            }
            j += 1;
        }

        // Visualize: Mark center position
        addToMonitor(
            trace,
            array,
            lastSorted(trace),
            [i - 1],
            [],
            [],
            createRange(start, i - 1)
        );
        swap(array, start, i - 1);

        // Visualize: Move pivot to center
        addToMonitor(
            trace,
            array,
            lastSorted(trace),
            [i - 1],
            [],
            [],
            createRange(start, i - 1)
        );
        return i - 1;
    }

    function recursiveQuickSort(array, start, end) {
        if (start >= end) {
            if (start === end) {
                // Visualize: Mark only item as sorted
                addToMonitor(trace, array, [...lastSorted(trace), start]);
            }
            return null;
        }

        let pivot = choosePivot(array, start, end);

        // Visualize: Mark chosen pivot
        addToMonitor(trace, array, lastSorted(trace), [pivot]);

        swap(array, start, pivot);

        // Visualize: Move chosen pivot to start
        addToMonitor(trace, array, lastSorted(trace), [pivot]);

        pivot = partition(array, start, end);

        // Visualize: Mark pivot after partition as sorted
        addToMonitor(trace, array, [...lastSorted(trace), pivot]);

        recursiveQuickSort(array, start, pivot - 1);
        recursiveQuickSort(array, pivot + 1, end);
    }

    recursiveQuickSort(nums, 0, nums.length - 1);

    return trace;
};

export default QuickSort;