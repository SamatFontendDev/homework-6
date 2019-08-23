// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React from 'react'
import { withData } from '../../context/Data'
import MailList from '../MailList/MailList'

const OutboxList = (obj) => {
    const dataOutbox = obj.data.outbox;

    return (
        <div>
            <div>
                {
                    dataOutbox.map((todo, index) => (
                        <MailList match={obj.match} key={index} text={todo}/>
                    ))
                }
            </div>
        </div>
    )
}

const OutboxListW = withData(OutboxList)

export default OutboxListW
