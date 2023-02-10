import React from 'react'
import { AffairType } from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

// * 9 - в файле Affair.tsx дописать типизацию пропсов
// * 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
// * 11 - в файле Affair.tsx отобразить приходящие данные

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(props.affair._id)
    }

    const nameClass = s.name + ' ' + s2[props.affair.priority]
    const buttonClass = s.closeButton + ' ' + s2[props.affair.priority]
    const affairClass = s.affair + ' ' + s2[props.affair.priority]

    return (
        <div id={'hw2-affair-' + props.affair._id} className={affairClass}>

            <div id={'hw2-name-' + props.affair._id} className={nameClass}>
                {props.affair.name}
            </div>

            <div id={'hw2-priority-' + props.affair._id} hidden>
                {props.affair.priority}
            </div>

            <button
                id={'hw2-button-delete-' + props.affair._id}
                className={buttonClass}
                onClick={()=>deleteCallback(props.affair._id)}
            >X</button>

        </div>
    )
}

export default Affair
