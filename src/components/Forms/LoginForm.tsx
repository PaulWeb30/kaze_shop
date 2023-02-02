 import React, { FC, useState } from 'react'
// import { useFormContext } from 'react-hook-form'
// const LoginForm: FC = () => {
// 	const [passwordShown, setPasswordShown] = useState(false)
// 	const { handleSubmit, formState, register } = useFormContext()

// 	return (
// 		<form onSubmit={handleSubmit(onSubmit)}>
// 			<div className='auth_field'>
// 				<label className='auth_label' htmlFor='email'>
// 					E-mail
// 				</label>
// 				<div className='auth_input'>
// 					<input
// 						placeholder='Введите e-mail'
// 						type='text'
// 						{...register('email')}
// 					/>
// 				</div>
// 				<span className='auth_error'>
// 					{formState.errors.email && formState.errors.email.message + ''}
// 				</span>
// 			</div>
// 			<div className='auth_field'>
// 				<label className='auth_label' htmlFor='email'>
// 					Пароль
// 				</label>
// 				<div className='auth_input'>
// 					<input
// 						placeholder='Введите пароль'
// 						type={passwordShown ? 'text' : 'password'}
// 						{...register('password')}
// 					/>
// 					<div onClick={togglePasswordShown} className='auth_hidden-icon'>
// 						<Image
// 							src={passwordShown ? showIcon : hidenIcon}
// 							alt='show password icon'
// 							width={24}
// 							height={24}
// 						/>
// 					</div>
// 				</div>

// 				<span className='auth_error'>
// 					{loginForm.formState.errors.password &&
// 						loginForm.formState.errors.password.message}
// 				</span>
// 			</div>
// 			<div className='auth_detail'>
// 				<div className='auth_checkbox'>
// 					<input type='checkbox' />
// 					<span>Запомнить меня</span>
// 				</div>
// 				<Link href={'/forgot_password'} className='auth_detail_link'>
// 					Забыл пароль
// 				</Link>
// 			</div>
// 			{errorMessage && <span className='auth_error'>{errorMessage}</span>}
// 			<button className='auth_btn' type='submit' disabled={loginLoading}>
// 				{loginLoading ? 'Loading...' : 'Войти'}
// 			</button>

// 			<p className='auth_more'>
// 				<Link className='auth_link' href='/signup'>
// 					Все еще нет аккаунта? <span>Зарегистрироваться</span>
// 				</Link>
// 			</p>
// 		</form>
// 	)
// }

// export default LoginForm
