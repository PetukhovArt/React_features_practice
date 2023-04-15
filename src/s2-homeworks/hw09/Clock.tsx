import React, {useState, MouseEvent, MouseEventHandler} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

/*
* 1 - в файле Clock.tsx дописать функции stop, start, onMouseEnter, onMouseLeave
* 2 - в файле Clock.tsx из переменной date вычислить значения stringTime, stringDate, stringDay, stringMonth
* 3 - в файле Clock.tsx дизэйблить кнопки стоп / старт если таймер не запущен / запущен соответственно
* 4 - сделать стили в соответствии с дизайном
* */

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    const start = () => {
        // stop()
        const id = +setInterval(() => { //id:number
            setDate(new Date)
        }, 1000)
        setTimerId(id)
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    }

    const stop = () => {
        clearInterval(timerId)
        setTimerId(undefined)
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
    let formatter = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });
    // const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    // const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    // const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    // const stringTime = `${hours}:${minutes}:${seconds}` || <br/>
    const stringTime=formatter.format(date)

    const day = date.getDate()< 10 ? '0' + date.getDate() : date.getDate()
    const month = (date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)
    const stringDate = `${day}.${month}.${date.getFullYear()}` || <br/>

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = date.toLocaleString('en-US', {weekday: 'long'}) || <br/> // пишут студенты
    const stringMonth = date.toLocaleString('en-US', {month: 'long'}) || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    Start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    Stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
