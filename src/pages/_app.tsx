import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import AppWrapper from '@/components/layout/AppWrapper';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </Provider>
  );
};

export default App;
