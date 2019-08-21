// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
import React from 'react'
import css from './AppRouter.module.css'
import Home from '../Home/Home'
import { Route, Link } from 'react-router-dom';


class AppRouter extends React.Component {
    render() {
        return(
            <div className={css.wrapper}>
                <div className={css.container}>
                    <nav className={css.nav}>
                        <ul className={css.navList}>
                            <li className={css.navElement}>
                                <Link className={css.link} to="/app">Home</Link>
                            </li>    
                            <li className={css.navElement}>
                                <Link to="/app/inbox" className={css.link}>Inbox</Link>
                            </li>    
                            <li className={css.navElement}>
                                <Link to="/app/outbox" className={css.link}>Outbox</Link>
                            </li>    
                        </ul>  
                    </nav>
                    <div className={css.content}>
                        <h3 className={css.title}></h3>
                        <div className={css.content}></div>
                        <Route path="/app" component={Home} />
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default AppRouter