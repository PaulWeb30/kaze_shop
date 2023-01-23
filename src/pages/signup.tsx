import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { CreateUserDto } from '@/types/auth'
import { NotAuthorized } from '@/hoc/OnlyNotAuthorized'
import { RegisterFormSchema } from '@/utils/validation'
import Link from 'next/link'
import Image from 'next/image'
import AuthImg from '../assets/images/auth_photo.png'
import hidenIcon from '../assets/icons/close_eye.svg'
import showIcon from '../assets/icons/show_eye.svg'
import { useRouter } from 'next/router'
import { Api } from '@/services'

const Signup = () => {
	const router = useRouter()
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [phoneNumberValue, setPhoneNumberValue] = useState<string>('')
	const [phoneNumberError, setPhoneNumberError] = useState<string>('')
	const [passwordShown, setPasswordShown] = useState(false)
	const [confirmPasswordShown, setConfirmPasswordShown] = useState(false)
	const [privacyPolicyState, setPrivacyPolicyState] = useState<boolean>(false)
	const signupForm = useForm<CreateUserDto>({
		mode: 'onChange',
		resolver: yupResolver(RegisterFormSchema),
	})

	const onSubmit = async (dto: CreateUserDto) => {
		if (!phoneNumberValue.startsWith('38')) {
			setPhoneNumberError('Incorrect number')
		} else {
			setPhoneNumberError('')
		}
		const data = {
			...dto,
			phoneNumber: phoneNumberValue,
		}
		try {
			await Api().user.registration(data)
			router.push('/login')
		} catch (err) {
			console.warn('Register error', err)
			if (err.response) {
				console.warn('Register error', err.response.data.message)
				setErrorMessage(err.response.data.message)
			}
			router.push('/404')
		}
	}
	const togglePasswordShown = () => {
		setPasswordShown(prev => !prev)
	}

	const toggleConfirmPasswordShown = () => {
		setConfirmPasswordShown(prev => !prev)
	}
	const handlePhoneNumberValue = (value: string) => {
		setPhoneNumberValue(value)
	}
	return (
		<main className='content'>
			<div className='container'>
				<div className='page_coordinator'>
					Главная | <span>Регистрация</span>
				</div>
				<div className='auth_block'>
					<div className='auth_image none'>
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
										<input
											placeholder='Введите имя'
											type='text'
											{...signupForm.register('name')}
										/>
									</div>
									<span className='auth_error'>
										{signupForm.formState.errors.name &&
											signupForm.formState.errors.name.message}
									</span>
								</div>
								<div className='auth_field'>
									<label className='auth_label' htmlFor='surname'>
										Фамилия
									</label>
									<div className='auth_input'>
										<input
											placeholder='Введите фамилию'
											type='text'
											{...signupForm.register('surname')}
										/>
									</div>
									<span className='auth_error'>
										{signupForm.formState.errors.surname &&
											signupForm.formState.errors.surname.message}
									</span>
								</div>

								<div className='auth_field'>
									<label className='auth_label' htmlFor='email'>
										E-mail
									</label>
									<div className='auth_input'>
										<input
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
								<div className='auth_field'>
									<label className='auth_label' htmlFor='phoneNumber'>
										Номер телефона
									</label>

									<PhoneInput
										specialLabel={''}
										autocompleteSearch={false}
										country={'ua'}
										onlyCountries={['ua', 'rs']}
										value={phoneNumberValue}
										onChange={phone => handlePhoneNumberValue(phone)}
										containerClass={'auth_input'}
										inputClass={'auth_phoneInput'}
										dropdownClass={'auth_dropdown'}
										inputProps={{
											name: 'phoneNumber',
											required: true,
										}}
									/>
									<span className='auth_error'>
										{phoneNumberError && phoneNumberError}
									</span>
								</div>
								<div className='auth_field'>
									<label className='auth_label' htmlFor='password'>
										Пароль
									</label>
									<div className='auth_input'>
										<input
											placeholder='Введите пароль'
											type={passwordShown ? 'text' : 'password'}
											{...signupForm.register('password')}
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
										{signupForm.formState.errors.password &&
											signupForm.formState.errors.password.message}
									</span>
								</div>
								<div className='auth_field'>
									<label className='auth_label' htmlFor='confirmPassword'>
										Повторите пароль
									</label>
									<div className='auth_input'>
										<input
											placeholder='Повторите пароль'
											type={confirmPasswordShown ? 'text' : 'password'}
											{...signupForm.register('confirmPassword')}
										/>
										<div
											onClick={toggleConfirmPasswordShown}
											className='auth_hidden-icon'
										>
											<Image
												src={confirmPasswordShown ? showIcon : hidenIcon}
												alt='show password icon'
												width={24}
												height={24}
											/>
										</div>
									</div>
									<span className='auth_error'>
										{signupForm.formState.errors.confirmPassword &&
											signupForm.formState.errors.confirmPassword.message}
									</span>
								</div>
							</div>
							<div className='auth_privacy'>
								<div className='auth_checkbox'>
									<input
										type='checkbox'
										defaultChecked={privacyPolicyState}
										onChange={() => setPrivacyPolicyState(prev => !prev)}
									/>
									<span>Я согласен с условиями</span>
								</div>
								<Link href='#' target={'_blank'} className='auth_privacy_link'>
									Политики конфиденциальности
								</Link>
							</div>
							{errorMessage && (
								<span className='auth_error'>{errorMessage}</span>
							)}
							<button
								disabled={!privacyPolicyState}
								className='auth_btn wdth'
								type='submit'
							>
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
export const getServerSideProps = NotAuthorized(async context => {
	return { props: {} }
})
export default Signup
