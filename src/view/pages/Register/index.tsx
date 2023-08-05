import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useRegisterController } from './useRegisterController';

export function Register() {
  const { handleSubmit, errors, register, isLoading } = useRegisterController();
  return (
    <div className="">
      <header className=" gap-4 flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
          Crie sua conta
        </h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            Já possui uma conta?
          </span>
          <Link
            to={'/login'}
            className="text-teal-900 tracking-[-0.5px] font-medium"
          >
            Fazer login
          </Link>
        </p>
      </header>

      <form
        action="/"
        onSubmit={handleSubmit}
        className="mt-[60px] flex flex-col gap-4"
      >
        <Input
          autoComplete="off"
          type="text"
          placeholder="Nome"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          autoComplete="off"
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          error={errors.password?.message}
          type="password"
          placeholder="Senha"
          {...register('password')}
        />

        <Button isLoading={isLoading}>Criar conta</Button>
      </form>
    </div>
  );
}
