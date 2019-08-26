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
import InboxMail from '../InboxMail/InboxMail'
import OutboxListW from '../OutboxList/OutboxList'
import OutboxMail from '../OutboxMail/OutboxMail'

class AppRouter extends React.Component {
    render() {
        const location = this.props.location.pathname;
        console.log(location);
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
                        <h3 className={css.title}>{location === '/app' ? 'Home' : location.includes('/app/inbox') ? 'Inbox' : location.includes('/app/outbox') ? 'Outbox' : ''}</h3>yar
                        <div className={css.content}>
                            <Switch>
                                <Route path="/app" component={Home} exact />
                                <Route path="/app/inbox" component={InboxListW} exact />
                                <Route path="/app/inbox/:id" component={InboxMail} exact />
                                <Route path="/app/outbox" component={OutboxListW} exact />
                                <Route path="/app/outbox/:id" component={OutboxMail} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppRouter