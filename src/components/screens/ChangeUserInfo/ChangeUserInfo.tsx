import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ChangeUserInfoDto } from '@/types/auth'
import { ChangeUserInfoShema } from '@/utils/validation'
import cl from '../../../styles/changeUserInfo.module.scss'
const ChangeUserInfo = () => {
	const changeUserInfoForm = useForm<ChangeUserInfoDto>({
		mode: 'onChange',
		resolver: yupResolver(ChangeUserInfoShema),
	})
	return (
		<main className='content'>
			<div className='container'>
				<div className='page_coordinator'>
					... | <span>Вход</span> | <span>Изменить данные</span>
				</div>
				<div className={cl.changeInfo_form}>
					<h3 className='auth_title'>Изменить данные</h3>
					<form>
						<div className='auth_field'>
							<label className='auth_label' htmlFor='email'>
								Name
							</label>
							<div className='auth_input'>
								<input
									placeholder='Введите e-mail'
									type='text'
									{...changeUserInfoForm.register('name')}
								/>
							</div>
							<span className='auth_error'>
								{changeUserInfoForm.formState.errors.name &&
									changeUserInfoForm.formState.errors.name.message}
							</span>
						</div>
						<div className='auth_field'>
							<label className='auth_label' htmlFor='email'>
								Name
							</label>
							<div className='auth_input'>
								<input
									placeholder='Введите e-mail'
									type='text'
									{...changeUserInfoForm.register('name')}
								/>
							</div>
							<span className='auth_error'>
								{changeUserInfoForm.formState.errors.name &&
									changeUserInfoForm.formState.errors.name.message}
							</span>
						</div>
						<div className='auth_field'>
							<label className='auth_label' htmlFor='email'>
								Name
							</label>
							<div className='auth_input'>
								<input
									placeholder='Введите e-mail'
									type='text'
									{...changeUserInfoForm.register('name')}
								/>
							</div>
							<span className='auth_error'>
								{changeUserInfoForm.formState.errors.name &&
									changeUserInfoForm.formState.errors.name.message}
							</span>
						</div>
						<div className='auth_field'>
							<label className='auth_label' htmlFor='email'>
								Name
							</label>
							<div className='auth_input'>
								<input
									placeholder='Введите e-mail'
									type='text'
									{...changeUserInfoForm.register('name')}
								/>
							</div>
							<span className='auth_error'>
								{changeUserInfoForm.formState.errors.name &&
									changeUserInfoForm.formState.errors.name.message}
							</span>
						</div>

						<button className='auth_btn' type='submit'>
							ccewfwe
						</button>
					</form>
				</div>
			</div>
		</main>
	)
}

export default ChangeUserInfo
