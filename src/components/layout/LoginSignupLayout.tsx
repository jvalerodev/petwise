import { MdPets as PetIcon } from 'react-icons/md';
import Presentation from './Presentation';

interface Props {
  children: JSX.Element
}

const LoginSignupLayout = ({ children }: Props) => {
  return (
    <main className="flex h-screen">
      <div className="hidden lg:flex flex-col flex-1 items-center justify-center bg-teal-500 space-y-5">
        <Presentation />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-3">
        <h1 className="lg:hidden flex items-center justify-center text-teal-500 text-6xl font-bold mb-5">
          P
          <PetIcon className="text-5xl" />
          tWise
        </h1>

        {children}
      </div>
    </main>
  );
};

export default LoginSignupLayout;
