import React, { useState } from 'react'
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginFormSchema } from '@/utils/validation'
import Link from 'next/link'
import Image from 'next/image'
import hidenIcon from '../../assets/icons/close_eye.svg'
import showIcon from '../../assets/icons/show_eye.svg'
import { LoginDto } from '@/types/auth'
import { Api } from '@/services'
import { useAppDispatch } from '@/redux/hooks'
import { addUserInfo } from '@/redux/slices/user'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'
const LoginForm = () => {
	const loginForm = useForm({
		mode: 'onChange',
		resolver: yupResolver(LoginFormSchema),
	})
	const router = useRouter()
	const dispatch = useAppDispatch()
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [passwordShown, setPasswordShown] = useState(false)
	const [loginLoading, setLoginLoading] = useState<boolean>(false)
	//if useLoginDto i have TS ignore((
	const onSubmit: SubmitHandler<any> = async (dto: LoginDto) => {
		try {
			setLoginLoading(true)
			const data = await Api().user.login(dto)
			setCookie(null, 'accessToken', data.accessToken, {
				maxAge: 30 * 24 * 60 * 60,
				path: '/',
			})
			if (data.user) {
				dispatch(addUserInfo(data.user))
			}
			router.push('/cabinet')
		} catch (err) {
			setLoginLoading(false)
			console.warn('Register error', err)
			if (err.response) {
				console.warn('Register error after response', err.response.data.message)
				setErrorMessage(err.response.data.message)
			} else {
				router.push('/404')
			}
		}
	}

	const togglePasswordShown = () => {
		setPasswordShown(prev => !prev)
	}

	return (
		<FormProvider {...loginForm}>
			<form onSubmit={loginForm.handleSubmit(onSubmit)}>
				<div className='auth_field'>
					<label className='auth_label' htmlFor='email'>
						E-mail
					</label>
					<div className='auth_input'>
						<input
							placeholder='Введите e-mail'
							type='text'
							{...loginForm.register('email')}
						/>
					</div>
					<span className='auth_error'>
						{loginForm.formState.errors.email &&
							loginForm.formState.errors.email.message + ''}
					</span>
				</div>
				<div className='auth_field'>
					<label className='auth_label' htmlFor='email'>
						Пароль
					</label>
					<div className='auth_input'>
						<input
							placeholder='Введите пароль'
							type={passwordShown ? 'text' : 'password'}
							{...loginForm.register('password')}
						/>
						<div onClick={togglePasswordShown} className='auth_hidden-icon'>
							<Image
								src={passwordShown ? showIcon : hidenIcon}
								alt='show password icon'
								width={24}
								height={24}
							/>
						</div>
					</div>

					<span className='auth_error'>
						{loginForm.formState.errors.password &&
							loginForm.formState.errors.password.message + ''}
					</span>
				</div>
				<div className='auth_detail'>
					<div className='auth_checkbox'>
						<input type='checkbox' />
						<span>Запомнить меня</span>
					</div>
					<Link href={'/forgot'} className='auth_detail_link'>
						Забыл пароль
					</Link>
				</div>
				{errorMessage && <span className='auth_error'>{errorMessage}</span>}
				<button
					className='auth_btn'
					type='submit'
					disabled={loginForm.formState.isSubmitting}
				>
					{loginLoading ? 'Loading...' : 'Войти'}
				</button>

				<p className='auth_more'>
					<Link className='auth_link' href='/signup'>
						Все еще нет аккаунта? <span>Зарегистрироваться</span>
					</Link>
				</p>
			</form>
		</FormProvider>
	)
}

export default LoginForm
