import React, {ChangeEvent, MouseEventHandler, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {v1} from "uuid";

type GreetingContainerPropsType = {
    users: Array<UserType>; // need to fix any
    addUserCallback: (user: UserType) => void; // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {// need to fix any
        setName(event.currentTarget.value)
        if (event.currentTarget.value) {
            setError("")
        } else {
            setError("Invalid name")
        }// need to fix
    }
    const addUser: MouseEventHandler<HTMLButtonElement> = () => {
        if (!name) {
            setError("Invalid name")
        } else {
            addUserCallback({_id: v1(), name: name})
            alert(`Hello ${name}!`);
            setName("")
            setError("")
        }
    }
    const totalUsers = users.length // need to fix

    return (
        <>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
            <ul>
                {users.map(({_id, name}) => <li key={_id}>{name}</li>)}
            </ul>

        </>
    )
}

export default GreetingContainer
