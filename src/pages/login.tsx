import Image from 'next/image';
import { MdOutlinePets } from 'react-icons/md';
import LoginForm from '@/components/forms/Login';

const Login = () => {
  return (
    <main className="flex h-screen">
      <div className="hidden lg:flex flex-col flex-1 items-center justify-center bg-teal-500 space-y-5">
        <div className="space-y-5">
          <h1 className="text-white text-6xl font-bold flex items-center justify-center">
            P
            <MdOutlinePets className="inline text-5xl" />
            tWise
          </h1>

          <p className="text-3xl text-gray-600">El mejor amigo de tu mejor amigo</p>

          <Image src="/pets.png" alt="Pets" width="230" height="220" className="mx-auto" />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
