import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CreateUserDto } from '@/types/auth'
import { RegisterFormSchema } from '@/utils/validation'
import Link from 'next/link'
import Image from 'next/image'
import AuthImg from '../assets/images/auth_photo.png'
import { useRouter } from 'next/router'
import { Api } from '@/services'
const Signup = () => {
	const router = useRouter()
	const signupForm = useForm<CreateUserDto>({
		mode: 'onChange',
		resolver: yupResolver(RegisterFormSchema),
	})

	const onSubmit = async (dto: CreateUserDto) => {
		try {
			await Api().user.registration(dto)
		} catch (err) {
			console.warn('Register error', err)
			if (err.response) {
				console.warn('Register error', err.response.data.message)
			}
			router.push('/404')
		}
	}
	return (
		<main className='content'>
			<div className='container'>
				<div className='page_coordinator'>
					Главная | <span>Регистрация</span>
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
						<h3 className='auth_title'>Регистрация</h3>
						<form onSubmit={signupForm.handleSubmit(onSubmit)}>
							<div className='register_form'>
								<div className='auth_field'>
									<label className='auth_label' htmlFor='name'>
										Имя
									</label>
									<div className='auth_input'>
									<input autoComplete='off'
										placeholder='Введите имя'
										type='text' {...signupForm.register('name')} />
									{signupForm.formState.errors.name &&
										signupForm.formState.errors.name.message}</div>
								</div>
								<div className='auth_field'>
									<label className='auth_label' htmlFor='surname'>
										Фамилия
									</label>
									<div className='auth_input'>
									<input autoComplete='off'
										placeholder='Введите фамилию'
										type='text' {...signupForm.register('surname')} />
									{signupForm.formState.errors.surname &&
										signupForm.formState.errors.surname.message}</div>
								</div>
							
							
							<div className='auth_field'>
								<label className='auth_label' htmlFor='email'>
									E-mail
								</label>
								<div className='auth_input'>
									<input
										autoComplete='off'
										placeholder='Введите e-mail'
										type='text'
										{...signupForm.register('email')}
									/>
								</div>
								<span className='auth_error'>
									{signupForm.formState.errors.email &&
									signupForm.formState.errors.email.message}
								</span>
								</div>
								<div className='auth_field mgbt'>
									<label className='auth_label' htmlFor='phoneNumber'>
										Номер телефона
									</label>
									<div className='auth_input'>
									<input autoComplete='off'
										placeholder='+38 (---) --- -- --'
										type='text' {...signupForm.register('phoneNumber')} />
									{signupForm.formState.errors.phoneNumber &&
									signupForm.formState.errors.phoneNumber.message}</div>
								</div>
							
								<div className='auth_field'>
									<label className='auth_label' htmlFor='password'>
										Пароль
									</label>
									<div className='auth_input'>
									<input autoComplete='off'
										placeholder='Введите пароль'
										type='text'{...signupForm.register('password')} />
									{signupForm.formState.errors.password &&
									signupForm.formState.errors.password.message}</div>
								</div>
								<div className='auth_field'>
									<label className='auth_label' htmlFor='confirmPassword'>
										Повторите пароль
									</label>
									<div className='auth_input'>
									<input
										autoComplete='off'
										placeholder='Повторите пароль'
										type='text'
									{...signupForm.register('confirmPassword')}
									/>
									{signupForm.formState.errors.confirmPassword &&
									signupForm.formState.errors.confirmPassword.message}</div>
								</div>
							</div>
							<div className='auth_privacy'> 
								<input type="checkbox" /> 
								Я согласен с условиями 
								<Link href='/' className='auth_privacy_link'>Политики конфиденциальности</Link>
							</div>
							<button className='auth_btn wdth' type='submit'>
								Зарегистрироваться
							</button>
						</form>
						<Link className='auth_link' href='/login'>
							Уже есть аккаунт? <span>Войти</span>
						</Link>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Signup
