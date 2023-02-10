import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'
import {strict} from 'assert';

/*
* 1 - описать типы AffairPriorityType, AffairType  OK
* 2 - указать нужный тип для defaultAffairs  OK
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами ОК
* 4 - выполнить пункт 3 для функции deleteAffair ОК
* 5 - указать нужный тип в useState с affairs  OK
* 6 - дописать тип и логику функции deleteAffairCallback ОК
*
* 7 - в файле Affairs.tsx дописать типизацию пропсов OK
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow ОК
*
* 9 - в файле Affair.tsx дописать типизацию пропсов
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
* 11 - в файле Affair.tsx отобразить приходящие данные
* */

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'Anime', priority: 'low'},
    {_id: 3, name: 'Games', priority: 'low'},
    {_id: 4, name: 'Work', priority: 'high'},
    {_id: 5, name: 'Html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === 'all') return affairs;
    else return affairs.filter(el => el.priority === filter);
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(affairsEl => affairsEl._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // keep default array
    const [filter, setFilter] = useState<FilterType>('all') //keep button name

    const filteredAffairs = filterAffairs(affairs, filter) //keep filtered array

    const deleteAffairCallback = (_id: number) => {
        setAffairs(deleteAffair(affairs,_id))
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs} // filtered array sent to component
                    deleteAffairCallback={deleteAffairCallback} // cut array sent to component
                    filter={filter} //useState sent to component
                    setFilter={setFilter} //useState sent to component
                />
            </div>
        </div>
    )
}

export default HW2
