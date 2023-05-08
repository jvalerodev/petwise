import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineMenuFold as MenuIcon } from 'react-icons/ai';
import { FaSignOutAlt as LogoutIcon } from 'react-icons/fa';
import { MdPets as PetIcon } from 'react-icons/md';
import useAuth from '@/hooks/useAuth';
import Menu from '@/utils/menu';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const { handleLogout } = useAuth({});

  return (
    <aside
      className={`${
        open ? 'w-56 md:w-72' : 'w-20'
      } h-screen fixed md:relative px-5 py-8 bg-teal-500 duration-300 shadow-2xl`}
    >
      <MenuIcon
        className={`absolute bg-white -right-3.5 top-9 p-1 text-teal-500 text-3xl border-2 border-teal-600 rounded-full cursor-pointer ${
          !open && 'rotate-180'
        }`}
        onClick={() => setOpen(!open)}
      />

      <div className="h-10">
        <h1 className="flex items-center justify-center text-teal-900 origin-left text-4xl font-bold">
          <span className={`${!open && 'hidden'} duration-300`}>P</span>

          <PetIcon
            className={`text-3xl duration-300 ${open && 'rotate-[360deg]'}`}
          />

          <span className={`${!open && 'hidden'} duration-300`}>tWise</span>
        </h1>
      </div>

      <ul className="pt-6">
        {Menu.map((item) => (
          <li key={item.title} className={`${item.gap ? 'mt-9' : 'mt-2'}`}>
            <Link
              href={item.url}
              className={`flex items-center space-x-4 text-white p-2 cursor-pointer hover:bg-teal-600 rounded-md duration-200 ${
                router.pathname === item.url && 'bg-teal-600'
              }`}
            >
              <span>{<item.Icon className="text-2xl" />}</span>

              <span
                className={`${!open && 'scale-0'} origin-left duration-200`}
              >
                {item.title}
              </span>
            </Link>
          </li>
        ))}

        <li className="mt-2">
          <button
            onClick={handleLogout}
            className="flex w-full items-center space-x-4 text-white p-2 cursor-pointer hover:bg-teal-600 rounded-md duration-20"
          >
            <span>{<LogoutIcon className="text-2xl" />}</span>

            <span className={`${!open && 'scale-0'} origin-left duration-200`}>
              Salir
            </span>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
