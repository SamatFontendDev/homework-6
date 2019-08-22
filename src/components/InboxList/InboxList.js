// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React from 'react'
import { withData } from '../../context/Data'
import MailList from '../MailList/MailList'

const InboxList = (obj) => {
    const dataInbox = obj.data.inbox;
    console.log(obj);
    return(
        <div>
            {dataInbox.map((todo, index) => (
                <MailList match={obj.match}  key={index} text={todo} />
            ))}
        </div>
    )
}

const InboxListW = withData(InboxList);

export default InboxListW;