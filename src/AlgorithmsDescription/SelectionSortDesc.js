import {addLegend} from "../Algorithms/HelperMethods";
import React from "react";

export const SelectionSortLegend = addLegend('Comparing', 'Swapping');

export const SelectionSortDescription = {
    title: "Selection Sort",
    description: (
        <div>
            <p><a href="https://en.wikipedia.org/wiki/Selection_sort" target="_blank">
                Selection Sort
            </a>&nbsp;
            is an in-place comparison sorting algorithm which divides the input list into two parts: a sorted sublist of items
                which is built up from left to right at the front (left) of the list and a
                sublist of the remaining unsorted items that occupy the rest of the list.
                Initially, the sorted sublist is empty and the unsorted sublist is the entire
                input list. The algorithm proceeds by finding the smallest (or largest,
                depending on sorting order) element in the unsorted sublist, exchanging
                (swapping) it with the leftmost unsorted element (putting it in sorted order),
                and moving the sublist boundaries one element to the right.</p>
        </div>
    ),
    complexity: (
        <tbody>
        <tr>
            <th scope="row">Best Case (Time):</th>
            <td>O (n<sup>2</sup>)</td>
        </tr>
        <tr>
            <th scope="row">Average Case (Time):</th>
            <td>O (n<sup>2</sup>)</td>
        </tr>
        <tr>
            <th scope="row">Worst Case (Time):</th>
            <td>O (n<sup>2</sup>)</td>
        </tr>
        <tr>
            <th scope="row">Worst Case (Space):</th>
            <td>O (1)</td>
        </tr>
        </tbody>
    )
};