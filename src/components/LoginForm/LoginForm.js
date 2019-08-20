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
            email: e.target.value,
            password: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        
    }

    render() {
        return(
            <div className={css.bg}>
                <form className={css.form}>
                    <p>
                        <label for={css.mail}>
                            <span className={css.labelText}>Почта</span>
                        </label>
                        <input value={this.state.email} id="mail" className={css.input} />
                    </p>
                    <p>
                        <label for="password">
                            <span className={css.labelText}>Пароль</span>
                        </label>
                        <input value={this.state.password} id="password" className={css.input} />
                    </p>
                    <div className={css.buttons}>
                        <button className={css.button}>Войти</button>
                    </div>
                </form>
            </div>
        )
    }
}

const LoginForm = withAuth(Form);

export default LoginForm