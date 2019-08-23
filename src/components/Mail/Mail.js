// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react'
import css from './Mail.module.css'

class Mail extends React.Component{
    render(){
        const {from, body, to} = this.props
        console.log(this.props);
        
        return(
            <div className={css.container}>
                {from && <p className={`t-mail-from`}>From: <b>{from}</b></p>}
                {to && <p className={`t-mail-to`}>To: <b>{to}</b></p>}
                <p>{body}</p>
            </div>
        )
    }
}

export default Mail