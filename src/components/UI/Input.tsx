import React, { FC } from 'react'

interface InputProps {
	label: string
	type: string
	placeholder: string
	className?: string
}

const Input: FC<InputProps> = ({ type, label }) => {
	return (
		// <div className='auth_field'>
		// 	<label className='auth_label' htmlFor='email'>
		// 		E-mail
		// 	</label>
		// 	<div className='auth_input'>
		// 		<input
		// 			placeholder='Введите e-mail'
		// 			type='text'
		// 			{...loginForm.register('email')}
		// 		/>
		// 	</div>
		// 	<span className='auth_error'>
		// 		{loginForm.formState.errors.email &&
		// 			loginForm.formState.errors.email.message}
		// 	</span>
		// </div>
		<h1>e</h1>
	)
}

export default Input
