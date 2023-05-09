import SignupLayout from '@/components/layout/LoginSignupLayout';
import CreateAccountForm from '@/components/forms/CreateAccount';
import SEO from '@/components/SEO';

const CreateAccount = () => {
  return (
    <>
      <SEO title="Crear cuenta" />

      <SignupLayout>
        <CreateAccountForm />
      </SignupLayout>
    </>
  );
};

export default CreateAccount;
