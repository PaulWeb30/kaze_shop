import { CreateUserDto, LoginDto, AuthResponse } from '@/types/auth'
import { AxiosInstance, AxiosResponse } from 'axios'

export const UserApi = (instance: AxiosInstance) => ({
	async login(dto: LoginDto) {
		const data = await instance.post<LoginDto, {data: AuthResponse}>(
			'/auth/login',
			dto
		)
		return data
	},
	async registration(dto: CreateUserDto) {
		const data = await instance.post<LoginDto, {data: AuthResponse}>(
			'/auth/signup',
			dto
		)
		return data
	},
	async getMe() {
		const { data } = await instance.get('/auth/refresh')
		return data
	},
})
