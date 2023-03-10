import Sidebar from './Sidebar';

interface Props {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Sidebar />

      <div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
