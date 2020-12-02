import {addLegend} from "../Algorithms/HelperMethods";
import React from "react";

export const HeapSortLegend = addLegend('Comparing', 'Swapping', null, 'Heap Built');

export const HeapSortDescription = {
    title: "Heap Sort",
    description: (
        <div>
            <p><a href="https://en.wikipedia.org/wiki/Heapsort" target="_blank">
                Heap Sort
            </a>&nbsp;
                is a comparison-based sorting algorithm.
                Heapsort can be thought of as an improved selection sort: like
                selection sort, heapsort divides its input into a sorted and an
                unsorted region, and it iteratively shrinks the unsorted region
                by extracting the largest element from it and inserting it into the
                sorted region. Unlike selection sort, heapsort does not waste time
                with a linear-time scan of the unsorted region; rather, heap sort
                maintains the unsorted region in a heap data structure to more
                quickly find the largest element in each step. </p>
            <p>The Heapsort algorithm involves preparing the list by
                first turning it into a max heap. The algorithm then
                repeatedly swaps the first value of the list with the last
                value, decreasing the range of values considered in the heap
                operation by one, and sifting the new first value into its
                position in the heap. This repeats until the range of considered
                values is one value in length.</p>
            <p>The Steps are:</p>
            <ul>
                <li><b>Step 1: </b>Call the buildMaxHeap() function on the list. Also referred to as heapify(),
                    this builds a heap from a list in O(n) operations.</li>
                <li><b>Step 2: </b>Swap the first element of the list with the final element. Decrease the
                    considered range of the list by one.</li>
                <li><b>Step 3: </b>Call the siftDown() function on the list to sift the new first element to its
                    appropriate index in the heap.</li>
                <li><b>Step 4: </b>Go to step (2) unless the considered range of the list is one element.</li>
            </ul>
        </div>
    ),
    complexity: (
        <tbody>
        <tr>
            <th scope="row">Best Case (Time):</th>
            <td>O (n log n)</td>
        </tr>
        <tr>
            <th scope="row">Average Case (Time):</th>
            <td>O (n log n)</td>
        </tr>
        <tr>
            <th scope="row">Worst Case (Time):</th>
            <td>O (n log n)</td>
        </tr>
        <tr>
            <th scope="row">Worst Case (Space):</th>
            <td>O (1)</td>
        </tr>
        </tbody>
    )
};