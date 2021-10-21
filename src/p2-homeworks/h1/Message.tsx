import React from 'react'
import styles from './Message.module.css'

type MessageProps = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageProps) {
    const {message, avatar, messageBody, name, messageText, time, appendix} = styles
    return (
        <div className={message}>
            <div className={avatar}>
                <img src={props.avatar} alt="Avatar"/>
            </div>
            <div className={messageBody}>
                <div>
                    <div className={name}>{props.name}</div>
                    <div className={messageText}>{props.message}</div>
                </div>
                <div className={time}>{props.time}</div>
                <span className={appendix}> </span>
            </div>
        </div>
    )
}

export default Message
