import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
        // console.log(event.currentTarget.value, page)
        //event == count of items to show
        onChange(page, event.currentTarget.value
            ? event.currentTarget.value
            : itemsCountForPage)
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        onChangeCallback(event, page)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                variant="outlined"
                shape={'rounded'}
                id={id + '-pagination'}
                page={page}
                count={lastPage}
                onChange={(event: React.ChangeEvent<unknown>, page: number)=> onChangeCallback(event,page)}
                // showFirstButton
                // showLastButton
                // hideNextButton
                // hidePrevButton
                color="primary"
                // sx={{
                //     '& .MuiPaginationItem-root': {
                //         color: 'white',
                //         backgroundColor: '#3f51b5',
                //         '&:hover': {
                //             backgroundColor: '#1a237e',
                //         },
                //     },
                // }}
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                className={s.select15}
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChangeOption={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
