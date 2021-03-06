import React, {useState} from 'react'
import Affairs from './Affairs'
import {v1} from "uuid";

// types
export type AffairPriorityType = "high" | "middle" | "low"; // need to fix any
export type AffairType = {
    _id: number;
    name: string;
    priority: string;
} // need to fix any
export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    switch (filter) {
        case "high": {
            return affairs.filter(a => a.priority === "high");
        }
        case "middle": {
            return affairs.filter(a => a.priority === "middle");
        }
        case "low": {
            return affairs.filter(a => a.priority === "low");
        }
        default: {
            return affairs;
        }
    }

    // if (filter === 'high') {
    //     return affairs.filter(a => a.priority === "high");
    // } else if (filter === 'middle') {
    //     return affairs.filter(a => a.priority === "middle");
    // } else if (filter === 'low') {
    //     return affairs.filter(a => a.priority === "low");
    // } else {
    //     return affairs;
    // }
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(a => a._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))// need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (???????????? ????????????????)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*?????? ?????????????? ????????????????????, ???????? ??????????????????*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
