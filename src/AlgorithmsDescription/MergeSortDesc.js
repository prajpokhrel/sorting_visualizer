import {addLegend} from "../Algorithms/HelperMethods";
import React from "react";

export const MergeSortLegend = addLegend('Call Merge Sort',null, 'Overwrite from axillary array');

export const MergeSortDescription = {
    title: "Merge Sort",
    description: (
        <div>
            <p><a href="https://en.wikipedia.org/wiki/Merge_sort" target="_blank">
                Merge Sort
            </a>&nbsp;
                is an efficient, general-purpose, comparison-based sorting algorithm.
                Most implementations produce a stable sort, which means that the
                order of equal elements is the same in the input and output.
                Merge sort is a divide and conquer algorithm that was invented by
                John von Neumann in 1945.</p>
            <p>Conceptually, a merge sort works as follows:</p>
            <ul>
                <li>Divide the unsorted list into n sub-lists, each
                    containing one element (a list of one element is
                    considered sorted).</li>
                <li>Repeatedly merge sub-lists to produce new sorted sub-lists
                    until there is only one sublist remaining. This will be the
                    sorted list.
                </li>
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
            <td>O (n)</td>
        </tr>
        </tbody>
    )
};