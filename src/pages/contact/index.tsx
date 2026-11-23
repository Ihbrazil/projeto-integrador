import UserTemplate from '../../templates/user-template';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const schemaValidation = Yup.object().shape({
  name: Yup.string().min(10, 'Nome deve ter no mínimo 10 caracteres').required('O campo nome é obrigatório'),
  email: Yup.string().email('Digite um e-mail válido').required('O campo e-mail é obrigatório'),
  message: Yup.string().min(20, 'Mensagem deve ter no mínimo 20 caracteres').required('O campo mensagem é obrigatório'),
});

export default function Contact() {
  const {
      register,
      handleSubmit,
      formState: { errors },
      } = useForm<ContactForm>({
        resolver: yupResolver(schemaValidation),
      });

  function enviar() {
    alert("Mensagem não enviada. Formulário ainda não disponível!");
  }

  return (
    <UserTemplate>
      <section className="w-full max-w-2xl mx-auto py-6">
        <h1 className="text-3xl font-bold text-primary mb-6">Unybay</h1>
        <p className="text-center font-bold text-black mb-6">Fale conosco através do formulário abaixo</p>
        <form
          className="space-y-4"
          onSubmit={handleSubmit(enviar)}>
          <div>
            <input
              {...register('name')}
              className="w-full border-2 h-[40px] px-2 rounded-md"
              placeholder="Nome Completo"
            />
            {errors.name && <span className="text-red-700">{errors.name.message}</span>}
          </div>
          <div>
            <input
              {...register('email')}
              className="w-full border-2 h-[40px] px-2 rounded-md"
              placeholder="Digite seu email"
            />
            {errors.email && <span className="text-red-700">{errors.email.message}</span>}
          </div>
          <div>
            <textarea
              {...register('message')}
              rows={6}
              className="w-full border-2 rounded-md px-3 py-2"
              placeholder="Escreva sua mensagem"
            />
            {errors.message && <span className="text-red-700">{errors.message.message}</span>}
          </div>

          <button
            className="bg-primary text-white px-8 py-2 rounded-lg"
          >
              Enviar
          </button>
        </form>
      </section>
    </UserTemplate>
  );
}
