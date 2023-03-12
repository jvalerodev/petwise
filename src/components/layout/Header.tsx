import { useRouter } from 'next/router';
import { HiOutlineUserCircle as UserIcon } from 'react-icons/hi';
import { Title } from '@/utils/consts';
import type { PageTitle } from '@/types/types';

const Header = () => {
  const router = useRouter();
  const url = router.pathname;

  return (
    <header>
      <div className="space-y-5">
        <div className="flex justify-end items-center text-gray-600 space-x-1">
          <span className="cursor-pointer">
            <UserIcon className="text-3xl" />
          </span>

          <p className="font-bold cursor-pointer">John Doe</p>
        </div>

        <div>
          <h1 className="text-3xl text-teal-500 font-bold">{Title[url as keyof PageTitle]}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
