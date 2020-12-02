import {addLegend} from "../Algorithms/HelperMethods";
import React from "react";

export const ShellSortLegend = addLegend('Comparing', 'Swapping');

export const ShellSortDescription = {
    title: "Shell Sort",
    description: (
        <div>
            <p><a href="https://en.wikipedia.org/wiki/Shellsort" target="_blank">
                Shell Sort
            </a>&nbsp;
            is an in-place comparison sort. It can be seen as either a
                generalization of sorting by exchange (bubble sort) or sorting
                by insertion (insertion sort). The method starts by sorting
                pairs of elements far apart from each other, then progressively
                reducing the gap between elements to be compared. By starting
                with far apart elements, it can move some out-of-place elements
                into position faster than a simple nearest neighbor exchange.
                </p>
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
            <td>O (n * log n <b>OR</b> n<sup>1.25</sup>)</td>
        </tr>
        <tr>
            <th scope="row">Worst Case (Time):</th>
            <td>less than or equal to O (n<sup>2</sup>)</td>
        </tr>
        <tr>
            <th scope="row">Worst Case (Space):</th>
            <td>O (1)</td>
        </tr>
        </tbody>
    )
};