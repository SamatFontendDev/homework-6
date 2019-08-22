// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react'
import css from './MailList.module.css'
import { Link } from 'react-router-dom'

class MailList extends React.Component {
    render() {
        const {text, match} = this.props
        console.log(this.props);
        
        return (
            <div className={css.container + ' t-inbox-list'}>
                <Link to={`${match.url}/inbox-mail/${text.id}`} className={css.link}>{text.body.slice(0,55) + '...'}</Link>
            </div>
        )
    }
}

export default MailList