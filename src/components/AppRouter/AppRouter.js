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
import { Route, Link, Switch } from 'react-router-dom'
import InboxListW from '../InboxList/InboxList'

class AppRouter extends React.Component {
    render() {
        return(
            <div className={css.wrapper}>
                <div className={css.container}>
                    <nav className={css.nav}>
                        <ul className={css.navList + ' t-nav-list'}>
                            <li className={css.navElement}>
                                <Link className={css.link + ' t-link-home'} className={css.link} to="/app">Home</Link>
                            </li>    
                            <li className={css.navElement}>
                                <Link className={css.link + ' t-link-inbox'} to="/app/inbox" className={css.link}>Inbox</Link>
                            </li>    
                            <li className={css.navElement}>
                                <Link className={css.link + ' t-link-outbox'} to="/app/outbox" className={css.link}>Outbox</Link>
                            </li>
                        </ul>  
                    </nav>
                    <div className={css.content}>
                        <h3 className={css.title}></h3>
                        <div className={css.content}>
                            <Switch>
                                <Route path="/app" component={Home} exact={true} />
                                <Route path="/app/inbox" component={InboxListW} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppRouter