import {addLegend} from "../Algorithms/HelperMethods";
import React from "react";

export const QuickSortLegend = addLegend('Comparing', 'Swapping', null, 'Less than pivot');

export const QuickSortDescription = {
    title: "Quick Sort",
    description: (
        <div>
            <p><a href="https://en.wikipedia.org/wiki/Quicksort" target="_blank">
                Quick Sort
            </a>&nbsp;
                (sometimes called partition-exchange sort) is an efficient sorting
                algorithm. When implemented well, it can be about
                two or three times faster than its main competitors, merge sort
                and heapsort.
            </p>
            <p>It is a divide-and-conquer algorithm. It works by selecting a
                'pivot' element from the array and partitioning the other elements
                into two sub-arrays, according to whether they are less than or
                greater than the pivot. The sub-arrays are then sorted recursively.
                This can be done in-place, requiring small additional amounts of
                memory to perform the sorting.</p>
            <p>It is a comparison sort, meaning that it can sort items of
                any type for which a "less-than" relation (formally, a total order)
                is defined. Efficient implementations of Quicksort are not a stable
                sort, meaning that the relative order of equal sort items is not
                preserved.</p>
            <p>Quicksort is a divide and conquer algorithm. It first divides the
                input array into two smaller sub-arrays: the low elements and the
                high elements. It then recursively sorts the sub-arrays. The steps
                for in-place Quicksort are:</p>
            <ul>
                <li>Pick an element, called a pivot, from the array.</li>
                <li><b>Partitioning:</b> reorder the array so that all elements
                    with values less than the pivot come before the pivot, while
                    all elements with values greater than the pivot come after it
                    (equal values can go either way). After this partitioning, the
                    pivot is in its final position. This is called the partition
                    operation.</li>
                <li>Recursively apply the above steps to the sub-array of
                    elements with smaller values and separately to the sub-array of
                    elements with greater values.</li>
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
            <td>O (n<sup>2</sup>)</td>
        </tr>
        <tr>
            <th scope="row">Worst Case (Space):</th>
            <td>O (log n)</td>
        </tr>
        </tbody>
    )
};