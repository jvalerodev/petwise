
import LoginForm from '@/components/forms/Login';
import LoginLayout from '@/components/layout/LoginSignupLayout';
import SEO from '@/components/SEO';

const Login = () => {
  return (
    <>
      <SEO title="Iniciar sesión" />

      <LoginLayout>
        <LoginForm />
      </LoginLayout>
    </>
  );
};

export default Login;
