import { useEffect } from 'react';
import useAuth from '@/hooks/useAuth';

interface Props {
  children: React.ReactNode;
}

const AppWrapper = ({ children }: Props) => {
  const { handleAuth } = useAuth();

  useEffect(() => {
    handleAuth();
  }, []);

  return <>{children}</>;
};

export default AppWrapper;
