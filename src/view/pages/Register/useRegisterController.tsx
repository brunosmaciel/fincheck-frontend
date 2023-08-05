import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { authService } from '../../../app/services/authService';
import { ISignupParams } from '../../../app/services/authService/signup';
import { toast } from 'react-hot-toast';

const schema = z.object({
  name: z.string().nonempty('Nome é obrigatorio'),
  email: z
    .string()
    .nonempty('E-mail é obrigatorio')
    .email('Informe um email válido'),
  password: z
    .string()
    .nonempty('Senha é obrigatoria')
    .min(8, 'A senha de conter pelo menos 8 dígitos'),
});
type IRegisterInputs = z.infer<typeof schema>;
export function useRegisterController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<IRegisterInputs>({
    resolver: zodResolver(schema),
  });
  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: ISignupParams) => {
      const { accessToken } = await authService.signup(data);
      return accessToken;
    },
    mutationKey: ['signup'],
  });
  const handleSubmit = hookFormHandleSubmit(async (inputData) => {
    try {
      const accessToken = await mutateAsync(inputData);

      console.log(accessToken);
    } catch (error) {
      toast.error('Ocorreu um erro ao criar sua conta');
    }
  });

  return { handleSubmit, register, errors, isLoading, mutateAsync };
}
