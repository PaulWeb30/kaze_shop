import * as yup from 'yup'

export const LoginFormSchema = yup.object().shape({
	email: yup
		.string()
		.required('Почта обязательная')
		.matches(
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Inccorrect email'
		),
	password: yup
		.string()
		.required('Пароль обязательный')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
			'Пароль должен содержать не менее 8 символов, один в верхнем регистре, один в нижнем регистре, одну цифру и один специальный регистр'
		),
})

export const RegisterFormSchema = yup
	.object()
	.shape({
		name: yup.string().required('Name required').min(2, 'Minimum 2 symbols'),
		surname: yup
			.string()
			.required('Surname required')
			.min(2, 'Minimum 2 symbols'),
		// phoneNumber: yup
		// 	.string()
		// 	.required('Number required')
		// 	.min(9, 'Incorrect number'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
	})
	.concat(LoginFormSchema)
