import AdminTemplate from '../../templates/admin-template';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import RichTextEditor from '../../components/rich-text-editor';

type FormProduct = {
  name: string;
  manufacturer: string;
  category: string;
  price: string;
  url1: string;
  url2: string;
  description: string;
};

const schemaValidation = Yup.object().shape({
  name: Yup.string().required('O campo nome é obrigatório'),
  manufacturer: Yup.string().required('O campo fabricante é obrigatório'),
  category: Yup.string().required('O campo categoria é obrigatório'),
  price: Yup.string().required('O campo preço é obrigatório'),
  url1: Yup.string().required('O campo URL1 é obrigatório'),
  url2: Yup.string().required('O campo URL2 é obrigatório'),
  description: Yup.string().required('O campo descrição é obrigatório'),
});

export default function FormProduct() {
  const [value, setValue] = useState('');

  const {
    register,
    formState: { errors },
  } = useForm<FormProduct>({
    resolver: yupResolver(schemaValidation),
  });

  return (
    <AdminTemplate>
      <form>
        <h1 className="text-[25px] mb-4">
          Novo Produto
        </h1>

        <div className="flex gap-2">
          <div className="flex-1">
            <input
              {...register('name')}
              className="w-full border-2 mt-2 h-[40px] px-2 rounded-md"
              placeholder="Nome do Produto"
            />

            {errors.name && (
              <span className="text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex-1">
            <input
              {...register('manufacturer')}
              className="w-full border-2 mt-2 h-[40px] px-2 rounded-md"
              placeholder="Nome do Fabricante"
            />

            {errors.manufacturer && (
              <span className="text-red-600">
                {errors.manufacturer.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <select
              {...register('category')}
              className="w-full border-2 mt-2 h-[40px] px-2 rounded-md"
              defaultValue=""
            >
              <option value="" disabled>
                Selecione uma Categoria
              </option>

              <option value="jogos">Jogos</option>
              <option value="roupas">Roupas</option>
              <option value="veiculos">Veículos</option>
            </select>

            {errors.category && (
              <span className="text-red-600">
                {errors.category.message}
              </span>
            )}
          </div>

          <div className="flex-1">
            <input
              {...register('price')}
              className="w-full border-2 mt-2 h-[40px] px-2 rounded-md"
              placeholder="Preço"
            />

            {errors.price && (
              <span className="text-red-600">
                {errors.price.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <input
              {...register('url1')}
              className="w-full border-2 mt-2 h-[40px] px-2 rounded-md"
              placeholder="URL da Imagem 1"
            />

            {errors.url1 && (
              <span className="text-red-600">
                {errors.url1.message}
              </span>
            )}
          </div>

          <div className="flex-1">
            <input
              {...register('url2')}
              className="w-full border-2 mt-2 h-[40px] px-2 rounded-md"
              placeholder="URL da Imagem 2"
            />

            {errors.url2 && (
              <span className="text-red-600">
                {errors.url2.message}
              </span>
            )}
          </div>
        </div>

        <div className="mt-4 mb-10">
          <RichTextEditor
            value={value}
            onChange={setValue}
          />
          {errors.description && (
            <span className="text-red-600">
              {errors.description.message}
            </span>
          )}
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 rounded-lg"
          >
            Sim
          </button>

          <button
            type="button"
            onClick={() => alert(false)}
            className="bg-white text-primary border border-primary px-8 py-2 rounded-lg"
          >
            Não
          </button>
        </div>
      </form>
    </AdminTemplate>
  );
}