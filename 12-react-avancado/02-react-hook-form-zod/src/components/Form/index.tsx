import './Form.css'

import { z } from 'zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Criando um sistema de obragações no formulário
const registerUserFormSchema = z.object({
    // Assim o usuário receberá uma mensagem caso não esteja escrevendo o e-mail corretamente
    // min é o mínimo de caracteres que o input pode receber.
    email: z.string().min(1, 'Campo obrigatório').email('Preencha o e-mail corretamente'),
    password: z.string().min(6, 'No mínimo 6 caracteres'),
    comfirmPassword: z.string().min(6, 'No mínimo 6 caracteres')
});

// Defindo os tipos desses campos. É o zod.
// z.infer<> é uma utilidade de tipo. Vai extrair para gente automaticamente o tipo, baseado no esqueca do zod que criamos acima.
type resgisterUserFormData = z.infer<typeof registerUserFormSchema>

const Form = () => {

    // handleSubimit - toda a parter de gerenciamento do submit do formulário, vai ser feito por meio do React Hook Form, não a gente que faz.
    // register - vai servir para conectar da campo do nosso formulário, aqui dentro do componente. Não precisamos usar o name no input, pois o register faz isso pra nós.
    // formState - errors: obter as mensagens de erro dos campos.
    //             isSubmitting: indicar quando o formulário está sendo enviado.
    const {
        handleSubmit, register, formState: { errors, isSubmitting }
    } = useForm<resgisterUserFormData>({
        // Vai definir que a validação vai acontecer quando o campo perde o foco. No momento o usuário sai do campo do input, vai acontecer a validação
        mode: 'onBlur',

        // Vai retornar todos os erros de um campo. (ex: campo vazio, caracteres insuficientes) Vai retornar para o objeto errors.
        criteriaMode: 'all',

        // Vai conectar o React Hook Form com o zod. Vai definir que a validação desse nosso formulário vai acontecer a partir do zod.
        resolver: zodResolver(registerUserFormSchema)
    });

    // Simulando a envio de dados para um Banco de Dados
    const onSubmit: SubmitHandler<resgisterUserFormData> = async (data: resgisterUserFormData) => {
        await fetch('http://localhost:3333/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    }

    return (
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Informe seu e-mail" {...register("email")} />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Informe sua senha" {...register("password")} />

            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" id="confirmPassword" placeholder="Confirme sua senha" {...register("comfirmPassword")} />

            <button type="submit" disabled={isSubmitting} >Cadastre-se</button>
        </form>
    )
}

export default Form;