import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useLoginController } from './useLoginController';

export function Login() {
  const { handleSubmit, register, errors, isLoading } = useLoginController();

  return (
    <div className="">
      <header className=" gap-4 flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
          Entre em sua conta
        </h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            Novo por aqui?
          </span>
          <Link
            to={'/register'}
            className="text-teal-900 tracking-[-0.5px] font-medium"
          >
            Crie uma conta
          </Link>
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        action="/"
        className="mt-[60px] flex flex-col gap-4"
      >
        <Input
          autoComplete="off"
          type="email"
          placeholder="E-mail"
          {...register('email')}
          error={errors?.email?.message}
        />
        <Input
          type="password"
          placeholder="Senha"
          {...register('password')}
          error={errors?.password?.message}
        />

        <Button isLoading={isLoading} type="submit" className="mt-2">
          Entrar
        </Button>
      </form>
    </div>
  );
}

Input.displayName = 'Input';
