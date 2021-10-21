import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://avatars.mds.yandex.net/get-zen_doc/198334/pub_5acfd6c1a936f4899b1a2c88_5acfd7925816698601fc163f/scale_1200',
    name: 'Kratos',
    message: 'God of War',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
