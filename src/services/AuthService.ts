import axios from 'axios'
export const auth = {
	login() {
		return axios.post('/login')
	},
	signup() {
		return axios.post('/signup')
	},
}
