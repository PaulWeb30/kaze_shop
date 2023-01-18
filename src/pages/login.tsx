import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { LoginDto } from '@/types/auth'
import { setCookie } from 'nookies'
import axios from 'axios'
import { error } from 'console'
const Login = () => {
	const LoginFormSchema = yup.object().shape({
		email: yup
			.string()
			.required('Почта обязательная')
			.matches(
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Inccorrect email'
			),
		password: yup
			.string()
			.required('Пароль обязательный')
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
				'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
			),
		name: yup.string().matches(/^([^0-9]*)$/, 'without numbers'),
	})

	const loginForm = useForm<{ email: string; password: string; name: string }>({
		mode: 'onChange',
		resolver: yupResolver(LoginFormSchema),
	})

	const onSubmit = async (dto: LoginDto) => {
		try {
			console.log('send', dto)
			// setCookie(null, 'rtoken', '2', {
			// 	maxAge: 30 * 24 * 60 * 60,
			// 	path: '/',
			// })
		} catch (err) {
			console.warn('Register error', err)
			if (err.response) {
				console.warn('Register error', err.response.data.message)
			}
		}
	}

	return (
		<main className='content'>
			<div className='container'>
				<form onSubmit={loginForm.handleSubmit(onSubmit)}>
					<p>
						email
						<input type='text' {...loginForm.register('email')} />
						{loginForm.formState.errors.email &&
							loginForm.formState.errors.email.message}
					</p>
					<p>
						password
						<input type='text' {...loginForm.register('password')} />
						{loginForm.formState.errors.password &&
							loginForm.formState.errors.password.message}
					</p>
					<p>
						name
						<input type='text' {...loginForm.register('name')} />
						{loginForm.formState.errors.name &&
							loginForm.formState.errors.name.message}
					</p>
					<button type='submit'>login</button>
				</form>
				<div></div>
			</div>
		</main>
	)
}

export default Login
