import * as yup from 'yup'

export const LoginFormSchema = yup.object().shape({
	email: yup.string().email('Wrong email').required('Email required'),
	password: yup
		.string()
		.min(6, 'The password must be at least 6 characters long')
		.required('Password required'),
})

export const RegisterFormSchema = yup
	.object()
	.shape({
		fullName: yup.string().required('Name and surname required'),
	})
	.concat(LoginFormSchema)
