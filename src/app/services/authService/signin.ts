import { httpClient } from '../httpClient';

export interface ISignupParams {
  email: string;
  password: string;
}
async function signin({ email, password }: ISignupParams) {
  // await sleep(5000);
  const { data } = await httpClient.post<{ accessToken: string }>(
    '/auth/signin',
    {
      email,
      password,
    },
  );
  return data;
}

export { signin };
