import React from 'react'
import iconUp from '../../../../img/icon_up.png'
import iconDown from '../../../../img/icon_down.png'
import dropDown from '../../../../img/drop-down.png'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import s from './../../HW15.module.css'


// добавить в проект иконки и импортировать
// const downIcon = iconDown
const downIcon = ArrowDropDownIcon
// const upIcon = iconUp
const upIcon = ArrowDropUpIcon
const noneIcon = dropDown

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    switch (sort) {
        case '' :
            return down
        case down :
            return up
        case up :
            return ''
        default:
            return down
    }
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    // const icon = (sort === down)
    //     ? downIcon
    //     : (sort === up)
    //         ? upIcon
    //         : noneIcon
    const icon = (sort === down)
        ? downIcon
        : (sort === up)
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <div className={s.iconWrapper}>
                {
                    (sort === down) ?
                        <>
                            <div className={s.iconBlock}></div>
                            <div className={s.iconBlock}><ArrowDropDownIcon fontSize={'large'}/></div>
                        </>
                        : (sort === up)
                            ? <>
                                <div className={s.iconBlock}><ArrowDropUpIcon fontSize={'large'}/></div>
                                <div className={s.iconBlock}></div>
                            </>
                            : <>
                                <div className={s.iconBlock}><ArrowDropUpIcon fontSize={'large'}/></div>
                                <div className={s.iconBlock}><ArrowDropDownIcon fontSize={'large'}/></div>
                            </>
                }
            </div>
        </span>
    )
}

{/*<img*/
}
{/*    id={id + '-icon-' + sort}*/
}
{/*    src={icon}*/
}
{/*/>*/
}

export default SuperSort


