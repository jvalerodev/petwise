import Link from 'next/link';

const LoginForm = () => {
  return (
    <form className="w-1/2 bg-white p-10 rounded-xl space-y-8 shadow-sm">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-600">¡Bienvenido!</h1>

        <p className="text-lg text-gray-400">Ingresa tus credenciales.</p>
      </div>

      <div className="space-y-5">
        <input type="text" placeholder="Correo electrónico" className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500" />

        <input type="password" placeholder="Contraseña" className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500" />

        <div className="text-end">
          <Link href="/" className="text-gray-600 hover:text-teal-500 transition-colors duration-150">Olvidé mi contraseña</Link>
        </div>

        <button className="w-full bg-teal-500 py-3 rounded-md text-white text-lg font-bold hover:bg-teal-600 transition-colors duration-150">
          Iniciar sesión
        </button>

        <div className="text-end">
          <p className="inline text-gray-600">¿No tienes una cuenta? </p>

          <Link href="/create-account" className="text-teal-500 hover:text-teal-600 transition-colors duration-150">¡Crea una!</Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
