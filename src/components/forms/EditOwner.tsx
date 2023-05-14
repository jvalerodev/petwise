import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editOwnerSchema } from '@/helpers/yup/schemas';
import Message from '@/components/alerts/Message';
import type { Owner, EditOwnerFormValues } from '@/types/types';
import LoadingSpinner from '@/components/layout/LoadingSpinner';
import useOwners from '@/hooks/useOwners';

interface Props {
  owner: Owner | null;
}

const EditPetForm = ({ owner }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<EditOwnerFormValues>({
    resolver: yupResolver(editOwnerSchema),
    defaultValues: {
      name: owner?.name,
      lastName: owner?.lastName,
      dni: owner?.dni,
      email: owner?.email,
      phone: owner?.phone
    }
  });

  const { result, error, loading, handleUpdateOwner } = useOwners({ reset });

  return (
    <>
      {loading && <LoadingSpinner loading={loading} />}

      <form
        onSubmit={handleSubmit(
          async (data) => await handleUpdateOwner(owner, data)
        )}
        className="bg-white px-8 py-5 rounded-xl space-y-8 shadow-sm"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-600">
            Editar propietario
          </h1>

          <p className="text-lg text-gray-400">
            Ingresa los datos que deseas modificar.
          </p>
        </div>

        {result && <Message text={result} />}

        {error && <Message text={error} isError />}

        <div className="space-y-5">
          <div className="flex space-x-5">
            <div className="flex-1">
              {errors.name && (
                <Message className="mb-1" text={errors.name.message} isError />
              )}

              <label htmlFor="name" className="text-gray-600 pt-1">
                Nombre *
              </label>

              <input
                id="name"
                type="text"
                placeholder="Carlos"
                className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
                {...register('name')}
              />
            </div>

            <div className="flex-1">
              {errors.lastName && (
                <Message
                  className="mb-1"
                  text={errors.lastName.message}
                  isError
                />
              )}

              <label htmlFor="lastName" className="text-gray-600">
                Apellido *
              </label>

              <input
                id="lastName"
                type="text"
                placeholder="Domínguez"
                className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
                {...register('lastName')}
              />
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="flex-1">
              {errors.dni && (
                <Message className="mb-1" text={errors.dni.message} isError />
              )}

              <label htmlFor="dni" className="text-gray-600">
                DNI *
              </label>

              <input
                id="dni"
                type="text"
                placeholder="12345678"
                className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
                {...register('dni')}
              />
            </div>

            <div className="flex-1">
              {errors.email && (
                <Message className="mb-1" text={errors.email.message} isError />
              )}

              <label htmlFor="email" className="text-gray-600">
                Correo electrónico *
              </label>

              <input
                id="email"
                type="text"
                placeholder="example@mail.com"
                className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
                {...register('email')}
              />
            </div>

            <div className="flex-1">
              <label htmlFor="phone" className="text-gray-600">
                Phone
              </label>

              <input
                id="phone"
                type="text"
                placeholder="87654321"
                className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
                {...register('phone')}
              />
            </div>
          </div>

          <div className="py-5">
            <button className="w-full bg-teal-500 py-3 rounded-md text-white text-lg font-bold hover:bg-teal-600 transition-colors duration-150">
              Guardar cambios
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditPetForm;
