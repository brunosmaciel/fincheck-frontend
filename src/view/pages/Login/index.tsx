import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {
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
            to={"/register"}
            className="text-teal-900 tracking-[-0.5px] font-medium"
          >
            Crie uma conta
          </Link>
        </p>
      </header>

      <form action="/" className="mt-[60px] flex flex-col gap-4">
        <Input
          autoComplete="off"
          type="email"
          placeholder="E-mail"
          name="email"
        />
        <Input type="password" placeholder="Senha" name="password" />

        <Button>Entrar</Button>
      </form>
    </div>
  );
}
