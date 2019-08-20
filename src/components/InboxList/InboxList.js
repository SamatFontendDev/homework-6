// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React from 'react'
import { withData } from '../../context/Data'

const InboxList = () => {
    return(
        <div>
            {data.map(todo => (
                <p>{todo}</p>
            ))}
        </div>
    )
}

const InboxListW = withData(<InboxList/>);

export default InboxListW;