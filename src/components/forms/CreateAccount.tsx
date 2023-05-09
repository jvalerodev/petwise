import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '@/helpers/yup/schemas';
import Message from '@/components/alerts/Message';
import useUser from '@/hooks/useUser';
import { type RegisterFormValues } from '@/types/types';
import LoadingSpinner from '@/components/layout/LoadingSpinner';

const CreateAccountForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
    defaultValues: { role: '' }
  });

  const { result, error, loading, handleRegister } = useUser({ reset });

  return (
    <>
      {loading && <LoadingSpinner loading={loading} />}

      <form
        onSubmit={handleSubmit(handleRegister)}
        className="sm:w-3/5 lg:w-1/2 bg-white p-10 rounded-xl space-y-8 shadow-sm"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-600">¡Bienvenido!</h1>

          <p className="text-lg text-gray-400">
            Ingresa tus datos para registrarte.
          </p>
        </div>

        {result && <Message text={result} />}

        {error && <Message text={error} isError={true} />}

        <div className="space-y-5">
          {errors.name && <Message text={errors.name.message} isError={true} />}

          <input
            type="text"
            placeholder="Nombre"
            className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
            {...register('name')}
          />

          {errors.lastName && (
            <Message text={errors.lastName.message} isError={true} />
          )}
          <input
            type="text"
            placeholder="Apellido"
            className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
            {...register('lastName')}
          />

          {errors.email && (
            <Message text={errors.email.message} isError={true} />
          )}
          <input
            type="text"
            placeholder="Correo electrónico"
            className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
            {...register('email')}
          />

          {errors.password && (
            <Message text={errors.password.message} isError={true} />
          )}
          <input
            type="password"
            placeholder="Contraseña"
            className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
            {...register('password')}
          />

          {errors.role && <Message text={errors.role.message} isError={true} />}
          <select
            className="w-full bg-gray-100 py-3 px-2 text-gray-600 rounded-md outline-teal-500 border-r-[16px] border-r-transparent"
            {...register('role')}
          >
            <option value="" disabled>
              Tipo de usuario
            </option>

            <option value="Veterinarian">Veterinario/a</option>
            <option value="Owner">Propietario/a</option>
          </select>

          <button className="w-full bg-teal-500 py-3 rounded-md text-white text-lg font-bold hover:bg-teal-600 transition-colors duration-150">
            Crear cuenta
          </button>

          <div className="text-end">
            <p className="inline text-gray-600">¿Ya tienes una cuenta? </p>

            <Link
              href="/login"
              className="text-teal-500 hover:text-teal-600 transition-colors duration-150"
            >
              Inicia sesión
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateAccountForm;
