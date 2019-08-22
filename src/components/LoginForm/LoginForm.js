// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { Component } from 'react'
import { withAuth } from '../../context/Auth/Auth';
import css from './LoginForm.module.css';

class Form extends Component {
    state={
        email: '',
        password: ''
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        const { authorize, history } = this.props;
        
        authorize(email, password);
        history.push('/app')
    }

    render() {
        return(
            <div className={css.bg}>
                <form onSubmit={e => this.handleSubmit(e)} className={css.form + ' t-form'}>
                    <p>
                        <label htmlFor={css.mail}>
                            <span className={css.labelText}>Почта</span>
                        </label>
                        <input type="email" name="email"  onChange={e => this.handleChange(e)} value={this.state.email} id="mail" className={css.input + ' t-input-email'} />
                    </p>
                    <p>
                        <label htmlFor="password">
                            <span className={css.labelText}>Пароль</span>
                        </label>
                        <input type="password" name="password" onChange={e => this.handleChange(e)} value={this.state.password} id="password" className={css.input + ' t-input-password'} />
                    </p>
                    <div className={css.buttons}>
                        <button className={css.button + ' t-login'}>Войти</button>
                    </div>
                </form>
            </div>
        )
    }
}

const LoginForm = withAuth(Form);

export default LoginForm