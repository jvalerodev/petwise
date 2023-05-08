import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/helpers/yup/schemas';
import useAuth from '@/hooks/useAuth';
import { type LoginFormValues } from '@/types/types';
import LoadingSpinner from '../layout/LoadingSpinner';
import Message from '@/components/alerts/Message';

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<LoginFormValues>({ resolver: yupResolver(loginSchema) });

  const { loading, error, handleLogin } = useAuth({ reset });

  return (
    <>
      {loading && <LoadingSpinner loading={loading} />}

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="sm:w-3/5 lg:w-1/2 bg-white p-10 rounded-xl space-y-8 shadow-sm"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-600">¡Bienvenido!</h1>

          <p className="text-lg text-gray-400">Ingresa tus credenciales.</p>
        </div>
        {error && <Message text={error} isError={true} />}
        <div className="space-y-5">
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

          <div className="text-end">
            <Link
              href="/"
              className="text-gray-600 hover:text-teal-500 transition-colors duration-150"
            >
              Olvidé mi contraseña
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 py-3 rounded-md text-white text-lg font-bold hover:bg-teal-600 transition-colors duration-150"
          >
            Iniciar sesión
          </button>

          <div className="text-end">
            <p className="inline text-gray-600">¿No tienes una cuenta? </p>

            <Link
              href="/create-account"
              className="text-teal-500 hover:text-teal-600 transition-colors duration-150"
            >
              Crea una
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
