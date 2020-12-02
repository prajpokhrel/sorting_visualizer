// Get random array between intervals
export const randomIntBetweenIntervals = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Check if arrays are equal or not when comparing with system default sort and
// my sorting algorithms.
export const compareSortedArray = (defaultSorted, customSorted) => {
    if (defaultSorted.length !== customSorted.length) return false;
    for (let i = 0; i < defaultSorted.length; i++) {
        if (defaultSorted[i] !== customSorted[i]) return false;
    }
    return true;
};

// Legends: Create a legend based upon algorithms
export const addLegend = (stateA, stateB, stateC, stateD) => {
    return { stateA, stateB, stateC, stateD };
};