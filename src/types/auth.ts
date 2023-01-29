export type LoginDto = {
	email: string
	password: string
}

export type CreateUserDto = {
	name: string
	surname: string
	phoneNumber: string
	confirmPassword: string
} & LoginDto

export type User = {
	id: number
	name: string
	surname: string
	phoneNumber: string
	email: string
	country: string | null
	city: string | null
	postOffice: string | null
}
export type AuthResponse = {
	type?: 'OWNER' | 'ADMIN'
	accessToken: string
	user: User
}

export type ChangeUserInfoDto = {
	name: string
	surname: string
	city: string
	country: string
	postOffice: string
}

export type ChangeUserPasswordDto = {
	password: string
	confirmPassword: string
}

export type ForgotPasswordDto = {
	email: string
}
