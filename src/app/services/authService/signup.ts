import { httpClient } from '../httpClient';

export interface ISignupParams {
  name: string;
  email: string;
  password: string;
}
async function signup({ email, name, password }: ISignupParams) {
  // await sleep(5000);
  const { data } = await httpClient.post<{ accessToken: string }>(
    '/auth/signup',
    {
      name,
      email,
      password,
    },
  );
  return data;
}

export { signup };
