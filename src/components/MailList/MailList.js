// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import {Component} from 'react'
import './MailList.module.css'

class MailList extends Component {
    render() {
        return (
            <div className={css.container}>
                <a className={css.link}></a>
            </div>
        )
    }
}