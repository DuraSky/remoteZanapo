import "../styles/main.scss";
import "../styles/global.scss";

import { LanguageProvider } from "../components/contexts/LanguageContext";
import { DataProvider } from "../components/contexts/DataContext";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <LanguageProvider>
      <DataProvider>{getLayout(<Component {...pageProps} />)}</DataProvider>
    </LanguageProvider>
  );
}

export default MyApp;
