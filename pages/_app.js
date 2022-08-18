import { KioscoProvider } from '../context/KioscoProvide';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <KioscoProvider>
      <Component {...pageProps} />
    </KioscoProvider>
  );
}

export default MyApp;
