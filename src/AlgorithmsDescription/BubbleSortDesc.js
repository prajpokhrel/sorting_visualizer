import React from "react";
import {addLegend} from "../Algorithms/HelperMethods";


export const BubbleSortLegend = addLegend('Comparing', 'Swapping');

export const BubbleSortDescription = {
    title: "Bubble Sort",
    description: (
        <div>
            <p><a href="https://en.wikipedia.org/wiki/Bubble_sort" target="_blank">
                Bubble Sort
            </a>&nbsp;, sometimes referred to as sinking sort, is a simple
                sorting algorithm that repeatedly steps through the list, compares
                adjacent elements and swaps them if they are in the wrong order. The
                pass through the list is repeated until the list is sorted. The
                algorithm, which is a comparison sort, is named for the way smaller
                or larger elements "bubble" to the top of the list.</p>
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

export const defaultDescription = {
    title: "Please select an algorithm!",
    description: (
        <p>You must select an algorithm to visualize them in action.</p>
    ),
    complexity: (
        <p>No algorithm selected :(</p>
    )
}