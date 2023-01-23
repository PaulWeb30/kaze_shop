import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginDto } from '@/types/auth'
import { setCookie } from 'nookies'
import Link from 'next/link'
import { LoginFormSchema } from '../utils/validation'
import { addUserInfo } from '@/redux/slices/user'
import { useAppDispatch } from '@/redux/hooks'
import Image from 'next/image'
import AuthImg from '../assets/images/auth_photo.png'
import { Api } from '@/services'
import { useRouter } from 'next/router'
const Login = () => {
	const dispatch = useAppDispatch()
	const router = useRouter()
	const [errorMessage, setErrorMessage] = useState<string>('')
	const loginForm = useForm<LoginDto>({
		mode: 'onChange',
		resolver: yupResolver(LoginFormSchema),
	})

	const onSubmit = async (dto: LoginDto) => {
		try {
			const data = await Api().user.login(dto)
		} catch (err) {
			console.warn('Register error', err)
			if (err.response) {
				console.warn('Register error', err.response.data.message)
				setErrorMessage(err.response.data.message)
			}
			router.push('/404')
		}
	}

	return (
		<main className='content'>
			<div className='container'>
				<div className='page_coordinator'>
					Главная | <span>Вход</span>
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
										type='text'
										{...loginForm.register('password')}
									/>
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
								<Link href={'#'} className='auth_detail_link'>
									Забыл пароль
								</Link>
							</div>
							{errorMessage && (
								<span className='auth_error'>{errorMessage}</span>
							)}
							<button className='auth_btn' type='submit'>
								Войти
							</button>

							<Link className='auth_link' href='/signup'>
								Все еще нет аккаунта? <span>Зарегистрироваться</span>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Login
