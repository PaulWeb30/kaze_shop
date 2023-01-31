import React, { useState } from 'react'
import SpinnerLayout from '@/layouts/SpinnerLayout'
import { ForgotPasswordDto } from '@/types/auth'
import { ForgotPasswordSchema } from '@/utils/validation'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { yupResolver } from '@hookform/resolvers/yup'
import { NotAuthorized } from '@/hoc/OnlyNotAuthorized'
import { Api } from '@/services'
import { useRouter } from 'next/router'
import AuthImg from '../assets/images/auth_photo.png'
const forgot_password = () => {
	const router = useRouter()
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [loginLoading, setLoginLoading] = useState<boolean>(false)
	const forgotPasswordForm = useForm<ForgotPasswordDto>({
		mode: 'onChange',
		resolver: yupResolver(ForgotPasswordSchema),
	})
	const onSubmit = async (dto: ForgotPasswordDto) => {
		console.log(dto)
		try {
			setLoginLoading(true)
			await Api().user.forgotPassword(dto)
			router.push('/login')
		} catch (e) {
			setLoginLoading(false)
			router.push('/404')
		}
	}
	return (
		<SpinnerLayout>
			<main className='content'>
				<div className='container'>
					<div className='page_coordinator'>
						Главная | <span>Забыли пароль</span>
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
							<h3 className='auth_title'>Забыли пароль</h3>
							<form onSubmit={forgotPasswordForm.handleSubmit(onSubmit)}>
								<div className='register_form'>
									<div className='auth_field'>
										<label className='auth_label' htmlFor='email'>
											E-mail
										</label>
										<div className='auth_input'>
											<input
												placeholder='Введите e-mail'
												type='text'
												{...forgotPasswordForm.register('email')}
											/>
										</div>
										<span className='auth_error'>
											{forgotPasswordForm.formState.errors.email &&
												forgotPasswordForm.formState.errors.email.message}
										</span>
									</div>
								</div>
								{errorMessage && (
									<span className='auth_error'>{errorMessage}</span>
								)}
								<button
									className='auth_btn'
									type='submit'
									disabled={loginLoading}
								>
									{loginLoading ? 'Loading...' : 'Восстановить пароль'}
								</button>
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

export default forgot_password
