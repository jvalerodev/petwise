import Header from './Header';
import Sidebar from './Sidebar';

interface Props {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full px-10 py-5 bg-gray-100">
        <Header />

        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
