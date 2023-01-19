import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginDto } from '@/types/auth'
import { setCookie } from 'nookies'
import axios from 'axios'
import { LoginFormSchema } from '../utils/validation'
const Login = () => {
	const loginForm = useForm<LoginDto>({
		mode: 'onChange',
		resolver: yupResolver(LoginFormSchema),
	})

	const onSubmit = (dto: LoginDto) => {
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
						email1231
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

					<button type='submit'>login</button>
				</form>
				<div></div>
			</div>
		</main>
	)
}

export default Login
