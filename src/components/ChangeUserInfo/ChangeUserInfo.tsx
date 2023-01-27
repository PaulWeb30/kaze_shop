import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ChangeUserInfoDto } from '@/types/auth'
import { ChangeUserInfoShema } from '@/utils/validation'
import cl from '../../styles/changeUserInfo.module.scss'
const ChangeUserInfo = () => {
	const changeUserInfoForm = useForm<ChangeUserInfoDto>({
		mode: 'onChange',
		resolver: yupResolver(ChangeUserInfoShema),
	})

	const onSubmit = async (dto: ChangeUserInfoDto) => {
		console.log(dto)
	}
	return (
		<div className={cl.changeInfo_body}>
			<form
				onSubmit={changeUserInfoForm.handleSubmit(onSubmit)}
				className={cl.changeInfo_form}
			>
				<div className={cl.changeInfo_field}>
					<label className='auth_label' htmlFor='email'>
						Имя
					</label>
					<div className='auth_input'>
						<input
							placeholder='Введите имя'
							type='text'
							{...changeUserInfoForm.register('name')}
						/>
					</div>
					<span className='auth_error'>
						{changeUserInfoForm.formState.errors.name &&
							changeUserInfoForm.formState.errors.name.message}
					</span>
				</div>
				<div className={cl.changeInfo_field}>
					<label className='auth_label' htmlFor='email'>
						Фамилия
					</label>
					<div className='auth_input'>
						<input
							placeholder='Введите фамилию'
							type='text'
							{...changeUserInfoForm.register('surname')}
						/>
					</div>
					<span className='auth_error'>
						{changeUserInfoForm.formState.errors.surname &&
							changeUserInfoForm.formState.errors.surname.message}
					</span>
				</div>
				<div className={cl.changeInfo_field}>
					<label className='auth_label' htmlFor='email'>
						Страна
					</label>
					<div className='auth_input'>
						<input
							placeholder='Введите страну'
							type='text'
							{...changeUserInfoForm.register('country')}
						/>
					</div>
					<span className='auth_error'>
						{changeUserInfoForm.formState.errors.country &&
							changeUserInfoForm.formState.errors.country.message}
					</span>
				</div>
				<div className={cl.changeInfo_field}>
					<label className='auth_label' htmlFor='email'>
						Город
					</label>
					<div className='auth_input'>
						<input
							placeholder='Введите город'
							type='text'
							{...changeUserInfoForm.register('city')}
						/>
					</div>
					<span className='auth_error'>
						{changeUserInfoForm.formState.errors.city &&
							changeUserInfoForm.formState.errors.city.message}
					</span>
				</div>
				<div className={cl.changeInfo_field}>
					<label className='auth_label' htmlFor='email'>
						Отделение
					</label>
					<div className='auth_input'>
						<input
							placeholder='Введите отделение'
							type='text'
							{...changeUserInfoForm.register('post_office')}
						/>
					</div>
					<span className='auth_error'>
						{changeUserInfoForm.formState.errors.post_office &&
							changeUserInfoForm.formState.errors.post_office.message}
					</span>
				</div>

				<button className={cl.changeInfo_btn} type='submit'>
					Cохранить
				</button>
			</form>
		</div>
	)
}

export default ChangeUserInfo
