import Header from './Header';
import Sidebar from './Sidebar';

interface Props {
  children: JSX.Element[]
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="w-full px-10 py-5 ml-20 md:ml-0">
        <Header />

        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
