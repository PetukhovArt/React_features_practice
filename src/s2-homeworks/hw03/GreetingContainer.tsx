import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'


type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string,
                            setError: (error: string) => void,
                            setName: (name: string) => void,
                            addUserCallback: (name: string) => void) => {
    if (!name.trim()) {
        setError('Введите имя!')
    } else {
        addUserCallback(name)
        setName(''); //очищаем инпут
    }
}

export const pureOnBlur = (name: string, setError: (error: string) => void) => { // при наведении фокуса
    if (!name.trim()) setError('Введите имя!')
}

export const pureOnEnter = (event: KeyboardEvent<HTMLInputElement>, addUser:()=>void) => { // если нажата кнопка Enter - добавить
    if (event.key === 'Enter') {
        addUser();
    }
}

// function GreetingContainer(props: GreetingPropsType) {

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback,}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length
    const lastUserName = users[users.length-1]?.name

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
