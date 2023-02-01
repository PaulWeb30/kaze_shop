import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginDto } from '@/types/auth'
import { setCookie } from 'nookies'
import { NotAuthorized } from '@/hoc/OnlyNotAuthorized'
import Link from 'next/link'
import { LoginFormSchema } from '../utils/validation'
import { addUserInfo } from '@/redux/slices/user'
import { useAppDispatch } from '@/redux/hooks'
import Image from 'next/image'
import hidenIcon from '../assets/icons/close_eye.svg'
import showIcon from '../assets/icons/show_eye.svg'
import AuthImg from '../assets/images/auth_photo.png'
import { Api } from '@/services'
import SpinnerLayout from '@/layouts/SpinnerLayout'
import { useRouter } from 'next/router'
const Login = () => {
	const dispatch = useAppDispatch()

	const router = useRouter()
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [passwordShown, setPasswordShown] = useState(false)
	const [loginLoading, setLoginLoading] = useState<boolean>(false)
	const loginForm = useForm<LoginDto>({
		mode: 'onChange',
		resolver: yupResolver(LoginFormSchema),
	})

	const togglePasswordShown = () => {
		setPasswordShown(prev => !prev)
	}

	const onSubmit = async (dto: LoginDto) => {
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

	return (
		<SpinnerLayout>
			<main className='content'>
				<div className='container'>
					<div className='page_coordinator'>
						<Link href={'/'}> Главная</Link> | <span>Вход</span>
					</div>
					<div className='auth_block'>
						<div className='auth_image'>
							<Image
								src={AuthImg}
								alt='link to user basket'
								width={390}
								height={550}
								quality={90}
								priority={true}
							/>
						</div>
						<div className='auth_form'>
							<h3 className='auth_title'>Вход</h3>
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
											loginForm.formState.errors.email.message}
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
										<div
											onClick={togglePasswordShown}
											className='auth_hidden-icon'
										>
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
											loginForm.formState.errors.password.message}
									</span>
								</div>
								<div className='auth_detail'>
									<div className='auth_checkbox'>
										<input type='checkbox' />
										<span>Запомнить меня</span>
									</div>
									<Link href={'/forgot_password'} className='auth_detail_link'>
										Забыл пароль
									</Link>
								</div>
								{errorMessage && (
									<span className='auth_error'>{errorMessage}</span>
								)}
								<button
									className='auth_btn'
									type='submit'
									disabled={loginLoading}
								>
									{loginLoading ? 'Loading...' : 'Войти'}
								</button>

								<p className='auth_more'>
									<Link className='auth_link' href='/signup'>
										Все еще нет аккаунта? <span>Зарегистрироваться</span>
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</main>
		</SpinnerLayout>
	)
}

export const getServerSideProps = NotAuthorized(async context => {
	return { props: {} }
})

export default Login
