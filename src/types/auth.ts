export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  name: string;
  surname: string
  phoneNumber: string
  confirmPassword: string
} & LoginDto
