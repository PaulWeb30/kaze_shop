import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ChangeUserPasswordDto } from '@/types/auth'
import { ChangeUserPasswordShema } from '@/utils/validation'
import cl from '../../styles/cabinet.module.scss'
import Image from 'next/image'
import hidenIcon from '../../assets/icons/close_eye.svg'
import showIcon from '../../assets/icons/show_eye.svg'
const ChangeUserPassword = () => {
	const [passwordShown, setPasswordShown] = useState(false)
	const [confirmPasswordShown, setConfirmPasswordShown] = useState(false)
	const changeUserPasswordForm = useForm<ChangeUserPasswordDto>({
		mode: 'onChange',
		resolver: yupResolver(ChangeUserPasswordShema),
	})
	const onSubmit = async (dto: ChangeUserPasswordDto) => {
		console.log(dto)
	}

	const togglePasswordShown = () => {
		setPasswordShown(prev => !prev)
	}

	const toggleConfirmPasswordShown = () => {
		setConfirmPasswordShown(prev => !prev)
	}

	return (
		<form
			onSubmit={changeUserPasswordForm.handleSubmit(onSubmit)}
			className={cl.cabinet_tabcontent}
		>
			<div className={cl.cabinet_field}>
				<label className='auth_label' htmlFor='email'>
					Введите пароль
				</label>
				<div className='auth_input'>
					<input
						placeholder='Введите пароль'
						type={passwordShown ? 'text' : 'password'}
						{...changeUserPasswordForm.register('password')}
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
					{changeUserPasswordForm.formState.errors.password &&
						changeUserPasswordForm.formState.errors.password.message}
				</span>
			</div>
			<div className={cl.cabinet_field}>
				<label className='auth_label' htmlFor='email'>
					Повторите пароль
				</label>
				<div className='auth_input'>
					<input
						placeholder='Повторите пароль'
						type={confirmPasswordShown ? 'text' : 'password'}
						{...changeUserPasswordForm.register('confirmPassword')}
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
					{changeUserPasswordForm.formState.errors.confirmPassword &&
						changeUserPasswordForm.formState.errors.confirmPassword.message}
				</span>
			</div>
			<button className={cl.cabinet_btn} type='submit'>
				Cохранить
			</button>
		</form>
	)
}

export default ChangeUserPassword
