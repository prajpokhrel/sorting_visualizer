import React from 'react';
import {
    swap,
    newMonitor,
    addToMonitor,
    lastSorted,
    createRange,
} from './VisualizationHelper';

const HeapSort = (nums) => {
    const trace = newMonitor(nums);

    // Helper functions to quickly access nodes
    const left = (i) => 2 * i + 1;
    const right = (i) => 2 * i + 2;
    const parent = (i) => Math.floor((i - 1) / 2);

    const maxHeapify = (array, i, heapsize) => {
        const leftChild = left(i);
        const rightChild = right(i);

        // Visualize: Compare parent and leftChild
        addToMonitor(trace, array, lastSorted(trace), [i, leftChild]);

        let largest =
            leftChild < heapsize && array[leftChild] > array[i]
                ? leftChild
                : i;

        // Visualize: Compare largest and rightChild
        addToMonitor(trace, array, lastSorted(trace), [largest, rightChild]);

        if (rightChild < heapsize && array[rightChild] > array[largest])
            largest = rightChild;

        if (largest !== i) {
            // Visualize: Select largest child and parent
            addToMonitor(trace, array, lastSorted(trace), [], [i, largest]);

            swap(array, i, largest);

            // Visualize: Swap largest child and parent
            addToMonitor(trace, array, lastSorted(trace), [], [i, largest]);

            maxHeapify(array, largest, heapsize);
        }
    };

    const BuildMaxHeap = (array) => {
        const start = Math.floor(array.length / 2);
        const heapsize = array.length;
        for (let i = start; i >= 0; i--) {
            maxHeapify(array, i, heapsize);
        }

        // Visualize: Mark heap as built
        addToMonitor(
            trace,
            array,
            lastSorted(trace),
            [],
            [],
            [],
            createRange(0, array.length)
        );
    };

    const heapSort = (array) => {
        BuildMaxHeap(array);
        let heapsize = array.length;
        for (let i = array.length - 1; i > 0; i--) {
            // Visualize: Select Maximum
            addToMonitor(trace, array, lastSorted(trace), [], [0, i]);

            swap(array, 0, i);
            heapsize -= 1;

            // Visualize: Swap with last element in heap
            addToMonitor(trace, array, [...lastSorted(trace), i], [], [0, i]);

            maxHeapify(array, 0, heapsize);

            // Visualize: Heap created
            addToMonitor(
                trace,
                array,
                lastSorted(trace),
                [],
                [],
                [],
                createRange(0, heapsize)
            );
        }
        addToMonitor(trace, array, [...lastSorted(trace), 0]);
    };

    // Execute Heapsort
    heapSort(nums);
    return trace;
};

export default HeapSort;