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
							<div className='auth_field'>
								<label className='auth_label' htmlFor='name'>
									Name
								</label>
								<input type='text' {...signupForm.register('name')} />
								{signupForm.formState.errors.name &&
									signupForm.formState.errors.name.message}
							</div>
							<p>
								surname
								<input type='text' {...signupForm.register('surname')} />
								{signupForm.formState.errors.surname &&
									signupForm.formState.errors.surname.message}
							</p>
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
							<p>
								phoneNumber
								<input type='tel' {...signupForm.register('phoneNumber')} />
								{signupForm.formState.errors.phoneNumber &&
									signupForm.formState.errors.phoneNumber.message}
							</p>
							<p>
								password
								<input type='text' {...signupForm.register('password')} />
								{signupForm.formState.errors.password &&
									signupForm.formState.errors.password.message}
							</p>
							<p>
								confirm password
								<input
									type='text'
									{...signupForm.register('confirmPassword')}
								/>
								{signupForm.formState.errors.confirmPassword &&
									signupForm.formState.errors.confirmPassword.message}
							</p>
							<button type='submit'>signup</button>
						</form>
					</div>
				</div>

				<Link href='/login'>login</Link>
			</div>
		</main>
	)
}

export default Signup
