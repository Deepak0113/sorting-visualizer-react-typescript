const SelectionSort = (array: number[]) => {
    let i, j, len = array.length, minInd;
    let sortSteps = [];

    for(i=0; i<len-1; i++){
        minInd = i;

        for(j=i+1; j<len; j++){
            if(array[j] < array[minInd]){
                minInd = j;
                sortSteps.push([i,j,true,false]);
            }else{
                sortSteps.push([i,j,false,false]);
            }
        }

        // if(array[minInd] < array[i]){
            sortSteps.push([i,minInd,true,true]);
            [array[minInd], array[i]] = [array[i], array[minInd]];
        // }
    }

    sortSteps.push([len-1,len-1,false,true])

    return sortSteps;
}

const InsertionSort = (array: number[]) => {
    return array;
}

const MergeSort = (array: number[]) => {
    return array;
}

const BubbleSort = (array: number[]) => {
    return array;
}

const QuickSort = (array: number[]) => {
    return array;
}

export {
    SelectionSort,
    InsertionSort,
    MergeSort,
    BubbleSort,
    QuickSort
}