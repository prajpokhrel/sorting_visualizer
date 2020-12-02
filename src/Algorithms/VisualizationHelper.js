export const newMonitor = (array) => {
    return [
        {
            array: [...array],
            stateA: [],
            stateB: [],
            stateC: [],
            stateD: [],
            sortedIndex: []
        }
    ]
}

export const addToMonitor = (
    monitor,
    array,
    sortedIndex= [],
    stateA = [],
    stateB = [],
    stateC = [],
    stateD = []) => {

    monitor.push({
        array: [...array],
        stateA: [...stateA],
        stateB: [...stateB],
        stateC: [...stateC],
        stateD: [...stateD],
        sortedIndex: [...sortedIndex]
    });

}

export const lastSorted = (monitor) => {
    return monitor[monitor.length - 1].sortedIndex;
}

export const createRange = (start, end) => {
    return [...Array(end - start).keys()].map((elem) => elem + start);
};


export const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

