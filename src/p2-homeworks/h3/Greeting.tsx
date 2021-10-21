import React, {ChangeEvent, MouseEventHandler} from 'react'
import style from './Greeting.module.css'

type GreetingPropsType = {
    name: string; // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void; // need to fix any
    addUser: MouseEventHandler<HTMLButtonElement>; // need to fix any
    error: string; // need to fix any
    totalUsers: number; // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? style.error : style.valid // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span className={style.totalUsers}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
