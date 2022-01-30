import { SelectionSort } from './SortingAlgo';
import './App.css';
import { useEffect, useState } from 'react';

const ANIMATION_TIME = 5;
const DELTA_ANIMATION_TIME = ANIMATION_TIME / 2;
const SMALL_ANIMATION_TIME = DELTA_ANIMATION_TIME / 2;
const LENGTH = 50;

const randomNumber = (max:number, min:number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const resetArray = () => {
    const array = [];
    for(let i=0; i<LENGTH; i++) array.push(randomNumber(20,600))
    return array;
}

const graphlineSwap:GraphlineSwap = (graphlineX, graphlineY) => {
    let temp = graphlineX.style.height;
    graphlineX.style.height = graphlineY.style.height;
    graphlineY.style.height = temp;
    temp = graphlineX.childNodes[0].textContent as string;
    graphlineX.childNodes[0].textContent = graphlineY.childNodes[0].textContent;
    graphlineY.childNodes[0].textContent = temp;
}

export const App = () => {
    const [array, setArray] = useState<number[]>(resetArray());
    const [sortType, setSortType] = useState("");

    const handleResetArray = () => {
        setArray(resetArray());
        const graphline = document.getElementsByClassName("graphline") as HTMLCollectionOf<HTMLElement>;
        for(let i=0; i<LENGTH; i++) graphline[i].style.backgroundColor = "#5f9ea0";
    }

    const handleSelectionSort = () => {
        const sortingSteps = SelectionSort(array);

        for(let i=0; i<sortingSteps.length; i++){
            const x = sortingSteps[i][0] as number;
            const y = sortingSteps[i][1] as number;
            const isSwap = sortingSteps[i][3] as boolean;
            const graphline = document.getElementsByClassName("graphline") as HTMLCollectionOf<HTMLElement>;

            if(isSwap){
                if(x === y){
                    setTimeout(() => {
                        graphline[x].style.backgroundColor = "#00FF00";
                    },(i*ANIMATION_TIME) + DELTA_ANIMATION_TIME);
                } else{
                    setTimeout(() => {
                        graphline[x].style.backgroundColor = "#dc143c";
                        graphline[y].style.backgroundColor = "#dc143c";
                    },(i*ANIMATION_TIME) + SMALL_ANIMATION_TIME);

                    setTimeout(() => {
                        graphlineSwap(graphline[x], graphline[y]);
                        graphline[x].style.backgroundColor = "#00FF00";
                        graphline[y].style.backgroundColor = "#5f9ea0";
                    },(i*ANIMATION_TIME) + DELTA_ANIMATION_TIME);
                }
            } else{
                setTimeout(() => {
                    graphline[x].style.backgroundColor = "#ac7d0c";
                    graphline[y].style.backgroundColor = "#ac7d0c";
                },(i*ANIMATION_TIME));

                setTimeout(() => {
                    graphline[y].style.backgroundColor = "#5f9ea0";
                },(i*ANIMATION_TIME) + DELTA_ANIMATION_TIME);
            }
        }
    }

    useEffect(() => {
        switch (sortType) {
            case "SelectionSort":
                setArray([1,2,3,4,5])
                break;
            case "InsertionSort":
                setArray([1,2,3,4,5])
                break;
            case "MergeSort":
                setArray([1,2,3,4,5])
                break;
            case "BubbleSort":
                setArray([1,2,3,4,5])
                break;
            case "QuickSort":
                setArray([1,2,3,4,5])
                break;
            default:
                break;
        }
        setSortType("");
    },[sortType, array])

    return (
        <div className="app">
            <div className="topnav">
                <div className="left">
                    <button className='button' onClick={handleResetArray}>Reset</button>
                </div>
                <div className="right">
                    <button className="button" onClick={handleSelectionSort}>Selection Sort</button>
                </div>
            </div>
            <div className="graph">
                {
                    array.map((item, key) => {
                        return (
                            <div 
                            key={key}
                            className={`graphline`}
                            style={{"height": `${item}px`}}>
                                <p>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}