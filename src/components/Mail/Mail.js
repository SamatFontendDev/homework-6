// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react'
import css from './Mail.module.css'

class Mail extends React.Component{
    render(){
        const {data} = this.props;
        return(
            <div className={css.container}>
                {data}
            </div>
        )
    }
}

export default Mail