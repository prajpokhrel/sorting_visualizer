import {addLegend} from "../Algorithms/HelperMethods";
import React from "react";

export const InsertionSortLegend = addLegend('Comparing', 'Swapping', 'Overwrite from memory');

export const InsertionSortDescription = {
    title: "Insertion Sort",
    description: (
        <div>
            <p><a href="https://en.wikipedia.org/wiki/Insertion_sort" target="_blank">
                Insertion Sort
            </a>&nbsp;
            is a simple sorting algorithm that builds the
                final sorted array (or list) one item at a time. Insertion sort
                iterates, consuming one input element each repetition, and grows
                a sorted output list. At each iteration, insertion sort removes
                one element from the input data, finds the location it belongs
                within the sorted list, and inserts it there. It repeats until no
                input elements remain.
            </p>
            <p>Sorting is typically done in-place, by iterating up the array,
                growing the sorted list behind it. At each array-position, it
                checks the value there against the largest value in the sorted
                list (which happens to be next to it, in the previous array-position
                checked). If larger, it leaves the element in place and moves to
                the next. If smaller, it finds the correct position within the
                sorted list, shifts all the larger values up to make a space, and
                inserts into that correct position.
            </p>
        </div>
    ),
    complexity: (
        <tbody>
        <tr>
            <th scope="row">Best Case (Time):</th>
            <td>O (n)</td>
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