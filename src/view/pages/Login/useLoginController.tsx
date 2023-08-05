import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { authService } from '../../../app/services/authService';
import { toast } from 'react-hot-toast';
const schema = z.object({
  email: z
    .string()
    .nonempty('E-mail é obrigatorio')
    .email('Informe um email válido'),
  password: z
    .string()
    .nonempty('Senha é obrigatoria')
    .min(8, 'A senha de conter pelo menos 8 dígitos'),
});
type ILoginInputs = z.infer<typeof schema>;
export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>({
    resolver: zodResolver(schema),
  });
  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: ILoginInputs) => {
      const { accessToken } = await authService.signin(data);
      return accessToken;
    },
    mutationKey: ['signin'],
  });
  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const accessToken = await mutateAsync(data);

      toast.success(accessToken);
    } catch {
      toast.error('Erro ao fazer login');
    }
  });

  return { handleSubmit, register, errors, isLoading };
}
