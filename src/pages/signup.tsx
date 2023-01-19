import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CreateUserDto } from '@/types/auth'
import { RegisterFormSchema } from '@/utils/validation'
const Signup = () => {
	const signupForm = useForm<CreateUserDto>({
		mode: 'onChange',
		resolver: yupResolver(RegisterFormSchema),
	})

	const onSubmit = async (dto: CreateUserDto) => {
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
				<form onSubmit={signupForm.handleSubmit(onSubmit)}>
					<p>
						name
						<input type='text' {...signupForm.register('name')} />
						{signupForm.formState.errors.name &&
							signupForm.formState.errors.name.message}
					</p>
					<p>
						surname
						<input type='text' {...signupForm.register('surname')} />
						{signupForm.formState.errors.surname &&
							signupForm.formState.errors.surname.message}
					</p>
					<p>
						email
						<input type='email' {...signupForm.register('email')} />
						{signupForm.formState.errors.email &&
							signupForm.formState.errors.email.message}
					</p>
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
						<input type='text' {...signupForm.register('confirmPassword')} />
						{signupForm.formState.errors.confirmPassword &&
							signupForm.formState.errors.confirmPassword.message}
					</p>

					<button type='submit'>signup</button>
				</form>
				<div></div>
			</div>
		</main>
	)
}

export default Signup
