import {
	CreateUserDto,
	LoginDto,
	AuthResponse,
	ChangeUserInfoDto,
	ChangeUserPasswordDto,
} from '@/types/auth'
import { AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'
import { API_URL } from './index'
export const UserApi = (instance: AxiosInstance) => ({
	async login(dto: LoginDto) {
		const { data } = await axios.post<LoginDto, { data: AuthResponse }>(
			API_URL + '/auth/login',
			dto
		)
		return data
	},
	async registration(dto: CreateUserDto) {
		const { data } = await axios.put<CreateUserDto, { data: AuthResponse }>(
			API_URL + '/auth/signup',
			dto
		)
		return data
	},
	async changeInfo(dto: ChangeUserInfoDto) {
		const { data } = await instance.post<
			ChangeUserInfoDto,
			{ data: AuthResponse }
		>('/kaze_shop/user/update', dto)
		return data
	},
	async changePassword(dto: ChangeUserPasswordDto) {
		const { data } = await instance.patch<
			ChangeUserPasswordDto,
			{ data: AuthResponse }
		>('/kaze_shop/auth/change', dto)
		return data
	},
})
